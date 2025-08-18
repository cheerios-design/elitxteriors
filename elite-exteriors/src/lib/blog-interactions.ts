import type {
  BlogLike,
  BlogComment,
  BlogShare,
  BlogStats,
  NotificationPayload,
} from "@/types/blog-interactions";

// Local Storage Keys
const STORAGE_KEYS = {
  LIKES: "blog_likes",
  USER_IDENTITY: "blog_user_identity",
  STATS: "blog_stats",
} as const;

// Generate unique user identity
export function getUserIdentity(): string {
  let identity = localStorage.getItem(STORAGE_KEYS.USER_IDENTITY);
  if (!identity) {
    identity = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(STORAGE_KEYS.USER_IDENTITY, identity);
  }
  return identity;
}

// Local Storage Functions for Likes
export function getUserLikes(): string[] {
  try {
    const likes = localStorage.getItem(STORAGE_KEYS.LIKES);
    return likes ? JSON.parse(likes) : [];
  } catch {
    return [];
  }
}

export function addUserLike(postSlug: string): void {
  const likes = getUserLikes();
  if (!likes.includes(postSlug)) {
    likes.push(postSlug);
    localStorage.setItem(STORAGE_KEYS.LIKES, JSON.stringify(likes));
  }
}

export function removeUserLike(postSlug: string): void {
  const likes = getUserLikes().filter((slug) => slug !== postSlug);
  localStorage.setItem(STORAGE_KEYS.LIKES, JSON.stringify(likes));
}

export function hasUserLiked(postSlug: string): boolean {
  return getUserLikes().includes(postSlug);
}

// Local Stats Management
export function getLocalStats(postSlug: string): BlogStats {
  try {
    const stats = localStorage.getItem(STORAGE_KEYS.STATS);
    const allStats = stats ? JSON.parse(stats) : {};
    return (
      allStats[postSlug] || {
        postSlug,
        likes: 0,
        comments: 0,
        shares: 0,
        views: 0,
      }
    );
  } catch {
    return { postSlug, likes: 0, comments: 0, shares: 0, views: 0 };
  }
}

export function updateLocalStats(
  postSlug: string,
  updates: Partial<Omit<BlogStats, "postSlug">>
): BlogStats {
  try {
    const stats = localStorage.getItem(STORAGE_KEYS.STATS);
    const allStats = stats ? JSON.parse(stats) : {};
    const currentStats = allStats[postSlug] || {
      postSlug,
      likes: 0,
      comments: 0,
      shares: 0,
      views: 0,
    };

    const newStats = { ...currentStats, ...updates };
    allStats[postSlug] = newStats;

    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(allStats));
    return newStats;
  } catch {
    return { postSlug, likes: 0, comments: 0, shares: 0, views: 0 };
  }
}

// API Functions for Backend Interaction
export async function submitToNetlify(
  formName: string,
  data: Record<string, string | number | boolean>
): Promise<Response> {
  const formData = new FormData();

  // Add form name
  formData.append("form-name", formName);

  // Add all data fields
  Object.entries(data).forEach(([key, value]) => {
    formData.append(
      key,
      typeof value === "object" ? JSON.stringify(value) : String(value)
    );
  });

  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(Array.from(formData.entries())).toString(),
  });
}

// Like Functions
export async function likeBlogPost(
  postSlug: string,
  postTitle: string
): Promise<BlogLike> {
  const userIdentity = getUserIdentity();
  const like: BlogLike = {
    id: `like_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    postSlug,
    userIdentity,
    likedAt: new Date().toISOString(),
  };

  // Update local storage
  addUserLike(postSlug);
  updateLocalStats(postSlug, { likes: getLocalStats(postSlug).likes + 1 });

  // Submit to Netlify Forms
  try {
    await submitToNetlify("blog-likes", {
      ...like,
      postTitle,
      timestamp: like.likedAt,
    });

    // Send notification
    await sendNotification({
      type: "like",
      postSlug,
      postTitle,
      timestamp: like.likedAt,
    });
  } catch (error) {
    console.warn("Failed to submit like to backend:", error);
  }

  return like;
}

export async function unlikeBlogPost(
  postSlug: string,
  postTitle: string
): Promise<void> {
  const userIdentity = getUserIdentity();

  // Update local storage
  removeUserLike(postSlug);
  const currentStats = getLocalStats(postSlug);
  updateLocalStats(postSlug, { likes: Math.max(0, currentStats.likes - 1) });

  // Submit unlike to Netlify Forms
  try {
    await submitToNetlify("blog-unlikes", {
      postSlug,
      postTitle,
      userIdentity,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.warn("Failed to submit unlike to backend:", error);
  }
}

// Comment Functions
export async function submitComment(
  postSlug: string,
  postTitle: string,
  userName: string,
  userEmail: string,
  content: string
): Promise<BlogComment> {
  const comment: BlogComment = {
    id: `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    postSlug,
    userName,
    userEmail,
    content,
    createdAt: new Date().toISOString(),
    approved: false,
  };

  // Update local stats
  updateLocalStats(postSlug, {
    comments: getLocalStats(postSlug).comments + 1,
  });

  // Submit to Netlify Forms
  try {
    await submitToNetlify("blog-comments", {
      ...comment,
      postTitle,
      timestamp: comment.createdAt,
    });

    // Send notification
    await sendNotification({
      type: "comment",
      postSlug,
      postTitle,
      userName,
      userEmail,
      content,
      timestamp: comment.createdAt,
    });
  } catch (error) {
    console.error("Failed to submit comment:", error);
    throw new Error("Failed to submit comment. Please try again.");
  }

  return comment;
}

// Share Functions
export async function shareBlogPost(
  postSlug: string,
  postTitle: string,
  platform: BlogShare["platform"]
): Promise<BlogShare> {
  const userIdentity = getUserIdentity();
  const share: BlogShare = {
    id: `share_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    postSlug,
    platform,
    sharedAt: new Date().toISOString(),
    userIdentity,
  };

  // Update local stats
  updateLocalStats(postSlug, { shares: getLocalStats(postSlug).shares + 1 });

  // Submit to Netlify Forms
  try {
    await submitToNetlify("blog-shares", {
      ...share,
      postTitle,
      timestamp: share.sharedAt,
    });

    // Send notification
    await sendNotification({
      type: "share",
      postSlug,
      postTitle,
      timestamp: share.sharedAt,
    });
  } catch (error) {
    console.warn("Failed to submit share to backend:", error);
  }

  return share;
}

// Notification Function
async function sendNotification(payload: NotificationPayload): Promise<void> {
  try {
    await submitToNetlify("blog-notifications", {
      ...payload,
      notificationId: `notif_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
    });
  } catch (error) {
    console.warn("Failed to send notification:", error);
  }
}

// Social Share URLs
export function getShareUrls(postSlug: string, postTitle: string) {
  const baseUrl = "https://elitexteriorsva.com";
  const postUrl = `${baseUrl}/blog/${postSlug}`;
  const encodedTitle = encodeURIComponent(postTitle);
  const encodedUrl = encodeURIComponent(postUrl);

  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    copy: postUrl,
  };
}
