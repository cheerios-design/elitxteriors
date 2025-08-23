"use client";

import { useState, useEffect } from "react";
import "../../styles/admin-dashboard.css";
import {
  MessageCircle,
  Heart,
  Share2,
  Eye,
  Users,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle,
  RefreshCw,
  ExternalLink,
  Trash2,
  Activity,
} from "lucide-react";
import { getLocalStats } from "@/lib/blog-interactions";
import { blogPosts } from "@/data/blog-posts";
import toast from "react-hot-toast";

interface AdminStats {
  totalLikes: number;
  totalComments: number;
  totalShares: number;
  pendingComments: number;
  totalViews: number;
  uniqueVisitors: number;
}

interface Comment {
  id: string;
  postSlug: string;
  postTitle: string;
  userName: string;
  userEmail: string;
  content: string;
  createdAt: string;
  approved: boolean;
}

interface SubmissionPayload {
  id: string;
  created_at?: string;
  data?: Record<string, string>;
  labels?: string[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({
    totalLikes: 0,
    totalComments: 0,
    totalShares: 0,
    pendingComments: 0,
    totalViews: 0,
    uniqueVisitors: 0,
  });

  const [pendingComments, setPendingComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    setLoading(true);
    toast.loading("Refreshing data...");
    try {
      // Calculate real statistics from local storage
      const realStats = calculateRealStats();
      setStats(realStats);

      // Load real pending comments from Netlify Forms
      const realComments = await loadPendingComments();
      setPendingComments(realComments);

      toast.dismiss();
      toast.success("Data refreshed successfully!");
    } catch (error) {
      console.error("Error loading admin data:", error);
      toast.dismiss();
      toast.error("Failed to refresh data");

      // Fallback to empty state if there's an error
      setStats({
        totalLikes: 0,
        totalComments: 0,
        totalShares: 0,
        pendingComments: 0,
        totalViews: 0,
        uniqueVisitors: 0,
      });
      setPendingComments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadAdminData = async () => {
      setLoading(true);
      try {
        // Calculate real statistics from local storage
        const realStats = calculateRealStats();
        setStats(realStats);

        // Load real pending comments from Netlify Forms
        const realComments = await loadPendingComments();
        setPendingComments(realComments);
      } catch (error) {
        console.error("Error loading admin data:", error);
        // Fallback to empty state if there's an error
        setStats({
          totalLikes: 0,
          totalComments: 0,
          totalShares: 0,
          pendingComments: 0,
          totalViews: 0,
          uniqueVisitors: 0,
        });
        setPendingComments([]);
      } finally {
        setLoading(false);
      }
    };

    loadAdminData();
  }, []);

  const calculateRealStats = (): AdminStats => {
    let totalLikes = 0;
    let totalComments = 0;
    let totalShares = 0;
    let totalViews = 0;

    // Aggregate stats from all blog posts
    blogPosts.forEach((post) => {
      const postStats = getLocalStats(post.slug);
      totalLikes += postStats.likes;
      totalComments += postStats.comments;
      totalShares += postStats.shares;
      totalViews += postStats.views;
    });

    // Get user identity count from local storage (rough estimate of unique visitors)
    const userIdentityCount = localStorage.getItem("blog_user_identity")
      ? 1
      : 0;
    const uniqueVisitors = Math.max(
      userIdentityCount,
      Math.floor(totalViews * 0.7)
    ); // Estimate 70% unique

    return {
      totalLikes,
      totalComments,
      totalShares,
      pendingComments: 0, // Will be updated when we load comments
      totalViews,
      uniqueVisitors,
    };
  };

  const loadPendingComments = async (): Promise<Comment[]> => {
    try {
      // Fetch real submissions via Netlify Function
      const res = await fetch(
        "/.netlify/functions/list-submissions?form=" +
          encodeURIComponent("blog-comments"),
        { cache: "no-store" }
      );

      if (!res.ok) {
        const text = await res.text();
        console.warn("Failed to load submissions:", text);
        return [];
      }
      const payload = (await res.json()) as {
        submissions?: SubmissionPayload[];
      };
      const submissions: SubmissionPayload[] = payload.submissions || [];

      const mapped: Comment[] = submissions
        .map((s) => {
          const data = s.data || {};
          const labels: string[] = Array.isArray(s.labels) ? s.labels : [];
          return {
            id: s.id,
            postSlug: data.postSlug || "",
            postTitle: data.postTitle || data.postSlug || "Unknown Post",
            userName: data.userName || "Anonymous",
            userEmail: data.userEmail || "",
            content: data.content || data.message || "",
            createdAt:
              data.timestamp || s.created_at || new Date().toISOString(),
            approved: labels.includes("approved"),
          } as Comment;
        })
        // Show only unapproved as pending
        .filter((c) => !c.approved)
        // Newest first
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

      // Update stats.pendingComments to reflect real count
      setStats((prev) => ({ ...prev, pendingComments: mapped.length }));
      return mapped;
    } catch (error) {
      console.error("Error loading pending comments:", error);
      return [];
    }
  };

  const handleApproveComment = async (commentId: string) => {
    // Optimistic update
    const previous = pendingComments;
    setPendingComments((prev) => prev.filter((c) => c.id !== commentId));
    setStats((prev) => ({
      ...prev,
      pendingComments: Math.max(0, prev.pendingComments - 1),
    }));

    try {
      const res = await fetch("/.netlify/functions/approve-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: commentId }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }
      toast.success("Comment approved");
    } catch (error) {
      console.error("Error approving comment:", error);
      // Rollback
      setPendingComments(previous);
      setStats((prev) => ({ ...prev, pendingComments: previous.length }));
      toast.error("Failed to approve. Check Netlify env vars.");
    }
  };

  const handleRejectComment = async (commentId: string) => {
    // Optimistic update
    const previous = pendingComments;
    setPendingComments((prev) => prev.filter((c) => c.id !== commentId));
    setStats((prev) => ({
      ...prev,
      pendingComments: Math.max(0, prev.pendingComments - 1),
    }));

    try {
      const res = await fetch("/.netlify/functions/reject-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: commentId }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }
      toast.success("Comment rejected");
    } catch (error) {
      console.error("Error rejecting comment:", error);
      // Rollback
      setPendingComments(previous);
      setStats((prev) => ({ ...prev, pendingComments: previous.length }));
      toast.error("Failed to reject. Check Netlify env vars.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"></div>
        <span className="ml-3 text-gray-600">Loading dashboard...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome to Your Dashboard
            </h1>
            <p className="text-blue-100 text-lg">
              Monitor your blog engagement and manage interactions
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Activity className="h-12 w-12 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Likes */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 admin-card-hover admin-slide-up admin-delay-100">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-red-50 p-3 rounded-xl admin-pulse-glow">
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              Total
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalLikes}
            </h3>
            <p className="text-sm font-medium text-gray-600">Blog Likes</p>
            <p className="text-xs text-gray-500 mt-2">
              {stats.totalLikes === 0
                ? "Encourage more engagement!"
                : "Across all posts"}
            </p>
          </div>
        </div>

        {/* Total Comments */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 admin-card-hover admin-slide-up admin-delay-200">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-50 p-3 rounded-xl admin-pulse-glow">
              <MessageCircle className="h-6 w-6 text-blue-500" />
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              Comments
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalComments}
            </h3>
            <p className="text-sm font-medium text-gray-600">Blog Comments</p>
            <p className="text-xs text-gray-500 mt-2">
              {stats.totalComments === 0
                ? "Check Netlify Forms"
                : "Via comment forms"}
            </p>
          </div>
        </div>

        {/* Total Shares */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 admin-card-hover admin-slide-up admin-delay-300">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-50 p-3 rounded-xl admin-pulse-glow">
              <Share2 className="h-6 w-6 text-green-500" />
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              Shares
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalShares}
            </h3>
            <p className="text-sm font-medium text-gray-600">Social Shares</p>
            <p className="text-xs text-gray-500 mt-2">
              {stats.totalShares === 0
                ? "Promote sharing!"
                : "Social platforms"}
            </p>
          </div>
        </div>

        {/* Pending Comments */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-50 p-3 rounded-xl">
              <AlertCircle className="h-6 w-6 text-orange-500" />
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              Pending
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {pendingComments.length}
            </h3>
            <p className="text-sm font-medium text-gray-600">Awaiting Review</p>
            <p className="text-xs text-gray-500 mt-2">
              Check Netlify Forms dashboard
            </p>
          </div>
        </div>

        {/* Total Views */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-50 p-3 rounded-xl">
              <Eye className="h-6 w-6 text-purple-500" />
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              Views
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalViews}
            </h3>
            <p className="text-sm font-medium text-gray-600">Page Views</p>
            <p className="text-xs text-gray-500 mt-2">Tracked locally</p>
          </div>
        </div>

        {/* Unique Visitors */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-indigo-50 p-3 rounded-xl">
              <Users className="h-6 w-6 text-indigo-500" />
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              Visitors
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {stats.uniqueVisitors}
            </h3>
            <p className="text-sm font-medium text-gray-600">Unique Users</p>
            <p className="text-xs text-gray-500 mt-2">Estimated count</p>
          </div>
        </div>
      </div>

      {/* Pending Comments Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
                Pending Comments ({pendingComments.length})
              </h2>
              <p className="text-gray-600 mt-1">
                Review and moderate blog comments
              </p>
            </div>
            <button
              onClick={refreshData}
              className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>

        <div className="p-6">
          {pendingComments.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <MessageCircle className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No pending comments
                </h3>
                <p className="text-gray-600 mb-4">
                  Comments submitted through the blog will appear here for
                  moderation.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-left">
                  <h4 className="font-medium text-yellow-800 mb-2">
                    💡 To see real comments:
                  </h4>
                  <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                    <li>Visit any blog post on your site</li>
                    <li>Submit a test comment using the comment form</li>
                    <li>Check your Netlify Forms dashboard for submissions</li>
                    <li>
                      Comments will appear here once the system is deployed
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingComments.map((comment) => (
                <div
                  key={comment.id}
                  className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-900">
                          {comment.userName}
                        </h4>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm text-gray-500">
                          {comment.userEmail}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        On: {comment.postTitle}
                      </p>
                      <p className="text-gray-800">{comment.content}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleApproveComment(comment.id)}
                        className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleRejectComment(comment.id)}
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Blog Performance Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
            Blog Performance
          </h2>
          <p className="text-gray-600 mt-1">
            Individual post engagement statistics
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {blogPosts.slice(0, 5).map((post) => {
              const postStats = getLocalStats(post.slug);
              return (
                <div
                  key={post.slug}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-500">/{post.slug}</p>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="font-medium">{postStats.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">{postStats.comments}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Share2 className="h-4 w-4 text-green-500" />
                      <span className="font-medium">{postStats.shares}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-purple-500" />
                      <span className="font-medium">{postStats.views}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {blogPosts.length > 5 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Showing top 5 posts • Total: {blogPosts.length} blog posts
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={refreshData}
            disabled={loading}
            className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw
              className={`h-5 w-5 mr-2 ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "Refreshing..." : "Refresh Data"}
          </button>

          <button
            onClick={() =>
              window.open(
                "https://app.netlify.com/sites/elitexteriorsva/forms",
                "_blank"
              )
            }
            className="flex items-center justify-center px-6 py-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Netlify Forms
          </button>

          <button
            onClick={() => {
              if (
                confirm(
                  "Are you sure you want to reset all local statistics? This cannot be undone."
                )
              ) {
                localStorage.removeItem("blog_likes");
                localStorage.removeItem("blog_stats");
                localStorage.removeItem("blog_user_identity");
                localStorage.removeItem("blog_pending_comments");
                toast.success("Local data cleared!");
                refreshData();
              }
            }}
            className="flex items-center justify-center px-6 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
          >
            <Trash2 className="h-5 w-5 mr-2" />
            Reset Data
          </button>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
          <h4 className="font-bold text-yellow-800 mb-3 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            System Status & Notes
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Statistics tracking active (localStorage)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Email notifications configured
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Comment moderation via Netlify Forms
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Deploy to enable full functionality
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
