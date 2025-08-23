export interface BlogLike {
  id: string;
  postSlug: string;
  userIdentity: string; // User's unique identifier
  likedAt: string;
  userEmail?: string;
}

export interface BlogShare {
  id: string;
  postSlug: string;
  platform: "linkedin" | "facebook" | "twitter" | "copy";
  sharedAt: string;
  userIdentity?: string;
}

export interface BlogStats {
  postSlug: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
}

export interface NotificationPayload {
  type: "like" | "share";
  postSlug: string;
  postTitle: string;
  timestamp: string;
}
