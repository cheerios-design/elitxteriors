"use client";

import { useState, useEffect } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { toast } from "react-hot-toast";
import {
  likeBlogPost,
  unlikeBlogPost,
  hasUserLiked,
  getLocalStats,
  updateLocalStats,
} from "@/lib/blog-interactions";
import type { BlogStats } from "@/types/blog-interactions";

interface BlogInteractionsProps {
  postSlug: string;
  postTitle: string;
  initialLikes?: number;
  initialComments?: number;
  initialShares?: number;
  onCommentClick?: () => void;
  onShareClick?: () => void;
}

export function BlogInteractions({
  postSlug,
  postTitle,
  initialLikes = 0,
  initialComments = 0,
  initialShares = 0,
  onCommentClick,
  onShareClick,
}: BlogInteractionsProps) {
  const [stats, setStats] = useState<BlogStats>({
    postSlug,
    likes: initialLikes,
    comments: initialComments,
    shares: initialShares,
    views: 0,
  });
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Load stats from local storage
    const localStats = getLocalStats(postSlug);
    setStats((prev) => ({
      ...prev,
      likes: Math.max(localStats.likes, initialLikes),
      comments: Math.max(localStats.comments, initialComments),
      shares: Math.max(localStats.shares, initialShares),
    }));

    // Check if user has liked this post
    setIsLiked(hasUserLiked(postSlug));

    // Increment view count
    const updatedStats = updateLocalStats(postSlug, {
      views: localStats.views + 1,
    });
    setStats((prev) => ({ ...prev, views: updatedStats.views }));
  }, [postSlug, initialLikes, initialComments, initialShares]);

  const handleLike = async () => {
    if (isLiking) return;

    setIsLiking(true);

    try {
      if (isLiked) {
        await unlikeBlogPost(postSlug, postTitle);
        setIsLiked(false);
        setStats((prev) => ({ ...prev, likes: Math.max(0, prev.likes - 1) }));
        toast.success("Like removed");
      } else {
        await likeBlogPost(postSlug, postTitle);
        setIsLiked(true);
        setStats((prev) => ({ ...prev, likes: prev.likes + 1 }));
        toast.success("Thanks for liking this article!");
      }
    } catch (error) {
      console.error("Error handling like:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLiking(false);
    }
  };

  const handleComment = () => {
    onCommentClick?.();
  };

  const handleShare = () => {
    onShareClick?.();
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-between py-4 border-t border-gray-200">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">{initialLikes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">{initialComments}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Share2 className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">{initialShares}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between py-4 border-t border-gray-200">
      <div className="flex items-center space-x-6">
        {/* Like Button */}
        <button
          onClick={handleLike}
          disabled={isLiking}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
            isLiked
              ? "text-red-600 bg-red-50 hover:bg-red-100"
              : "text-gray-600 hover:text-red-600 hover:bg-red-50"
          } ${isLiking ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <Heart
            className={`h-5 w-5 transition-all duration-200 ${
              isLiked ? "fill-current text-red-600" : ""
            } ${isLiking ? "animate-pulse" : ""}`}
          />
          <span className="font-medium">{stats.likes}</span>
          <span className="hidden sm:inline text-sm">
            {stats.likes === 1 ? "Like" : "Likes"}
          </span>
        </button>

        {/* Comment Button */}
        <button
          onClick={handleComment}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">{stats.comments}</span>
          <span className="hidden sm:inline text-sm">
            {stats.comments === 1 ? "Comment" : "Comments"}
          </span>
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200 cursor-pointer"
        >
          <Share2 className="h-5 w-5" />
          <span className="font-medium">{stats.shares}</span>
          <span className="hidden sm:inline text-sm">
            {stats.shares === 1 ? "Share" : "Shares"}
          </span>
        </button>
      </div>

      {/* View Count */}
      <div className="text-sm text-gray-500">
        {stats.views} {stats.views === 1 ? "view" : "views"}
      </div>
    </div>
  );
}
