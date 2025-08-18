export interface BlogLike {
  id: string;
  postSlug: string;
  userIdentity: string; // User's unique identifier
  likedAt: string;
  userEmail?: string;
}

export interface BlogComment {
  id: string;
  postSlug: string;
  userName: string;
  userEmail: string;
  content: string;
  createdAt: string;
  approved: boolean;
  moderatedAt?: string;
  moderatedBy?: string;
  parentId?: string; // For replies (future feature)
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
  type: "like" | "comment" | "share";
  postSlug: string;
  postTitle: string;
  userName?: string;
  userEmail?: string;
  content?: string;
  timestamp: string;
}
