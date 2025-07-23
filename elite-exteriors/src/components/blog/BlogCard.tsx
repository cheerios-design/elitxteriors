import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { Calendar, Clock, Eye, Heart, MessageCircle, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured
    ? "group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
    : "group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200";

  const imageClasses = featured ? "h-64" : "h-48";
  const titleClasses = featured ? "text-xl font-bold" : "text-lg font-semibold";

  return (
    <article className={cardClasses}>
      <Link href={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden">
          <div className={`relative ${imageClasses} w-full overflow-hidden`}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes={
                featured
                  ? "(max-width: 1200px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, 33vw"
              }
            />
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${post.category.color}`}
            >
              {post.category.name}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        {/* Author and Date */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author.name}</span>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={post.publishedAt}>
              {formatDistanceToNow(new Date(post.publishedAt), {
                addSuffix: true,
              })}
            </time>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2
            className={`${titleClasses} text-gray-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2`}
          >
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs text-gray-500">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>{post.comments.length}</span>
            </div>
          </div>

          {/* Read More */}
          <Link
            href={`/blog/${post.slug}`}
            className="text-sky-600 hover:text-sky-700 font-medium text-sm transition-colors"
          >
            Read More →
          </Link>
        </div>

        {/* Locations */}
        {post.locations.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-1">
              <span className="text-xs text-gray-500 mr-1">Locations:</span>
              {post.locations.slice(0, 3).map((location, index) => (
                <span key={location} className="text-xs text-sky-600">
                  {location}
                  {index < Math.min(post.locations.length, 3) - 1 && ", "}
                </span>
              ))}
              {post.locations.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{post.locations.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
