export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  category: BlogCategory;
  tags: string[];
  hashtags: string[];
  locations: string[];
  seoKeywords: string[];
  metaDescription: string;
  featured?: boolean;
  // Interactive counters
  likes: number;
  views: number;
  comments: BlogComment[];
  // SEO related
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface BlogComment {
  id: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  approved: boolean;
  replies?: BlogComment[];
}

export interface BlogFilters {
  category?: string;
  tags?: string[];
  hashtags?: string[];
  locations?: string[];
  searchQuery?: string;
  sortBy?: "newest" | "oldest" | "most-liked" | "most-viewed";
}

export interface BlogMetrics {
  totalPosts: number;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  popularTags: { tag: string; count: number }[];
  popularLocations: { location: string; count: number }[];
}

export interface NewsletterSubscriber {
  email: string;
  name?: string;
  subscribedAt: string;
  active: boolean;
  preferences?: {
    frequency: "weekly" | "biweekly" | "monthly";
    categories: string[];
  };
}
