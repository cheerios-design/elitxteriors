"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { BlogCard } from "@/components/blog/BlogCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { BlogInteractions } from "@/components/blog/BlogInteractions";
import { BlogCommentForm } from "@/components/blog/BlogCommentForm";
import { BlogShare } from "@/components/blog/BlogShare";
import AnimatedSection from "@/components/ui/animated-section";
import { Calendar, Clock, Eye, User, ArrowLeft, Share2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { BlogPost } from "@/types/blog";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Elite Exteriors",
      url: "https://elitexteriorsva.com",
      logo: {
        "@type": "ImageObject",
        url: "https://elitexteriorsva.com/assets/logos/mainlogo.webp",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    url: `https://elitexteriorsva.com/blog/${post.slug}`,
    keywords: post.seoKeywords,
    articleSection: post.category.name,
    wordCount: post.content.split(" ").length,
    timeRequired: `PT${post.readingTime}M`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Blog
              </Link>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Article Header */}
            <AnimatedSection>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                {/* Featured Image */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${post.category.color}`}
                    >
                      {post.category.name}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-6 right-6">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  {/* Title */}
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 border-b border-gray-200 pb-6">
                    <div className="flex items-center mr-6 mb-2">
                      <User className="h-4 w-4 mr-1" />
                      <span className="font-medium">{post.author.name}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span>{post.author.role}</span>
                    </div>
                    <div className="flex items-center mr-6 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <time dateTime={post.publishedAt}>
                        {formatDistanceToNow(new Date(post.publishedAt), {
                          addSuffix: true,
                        })}
                      </time>
                    </div>
                    <div className="flex items-center mr-6 mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readingTime} min read</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{post.views}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Excerpt */}
                  <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-sky-500 pl-6 italic">
                    {post.excerpt}
                  </p>

                  {/* Content */}
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
                    style={
                      {
                        "--tw-prose-body": "rgb(55 65 81)",
                        "--tw-prose-headings": "rgb(17 24 39)",
                      } as React.CSSProperties
                    }
                    dangerouslySetInnerHTML={{
                      __html: post.content
                        .replace(/\n/g, "<br />")
                        .replace(/mb-\d+/g, "mb-0")
                        .replace(/mt-\d+/g, "mt-0")
                        .replace(
                          /class="([^"]*)\s*mb-\d+([^"]*)"/g,
                          'class="$1 mb-0 $2"'
                        )
                        .replace(
                          /class="([^"]*)\s*mt-\d+([^"]*)"/g,
                          'class="$1 mt-0 $2"'
                        ),
                    }}
                  />

                  {/* Locations */}
                  {post.locations.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Service Areas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {post.locations.map((location) => (
                          <span
                            key={location}
                            className="inline-flex items-center px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hashtags */}
                  {post.hashtags.length > 0 && (
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {post.hashtags.map((hashtag) => (
                          <span
                            key={hashtag}
                            className="text-sky-600 hover:text-sky-700 cursor-pointer"
                          >
                            {hashtag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Author Bio */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                          <User className="h-8 w-8 text-sky-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {post.author.name}
                        </h3>
                        <p className="text-sky-600 text-sm mb-2">
                          {post.author.role}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {post.author.bio}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Blog Interactions */}
                  <BlogInteractions
                    postSlug={post.slug}
                    postTitle={post.title}
                    initialLikes={post.likes}
                    initialComments={post.comments.length}
                    initialShares={0}
                    onCommentClick={() => setShowCommentForm(true)}
                    onShareClick={() => setShowShareModal(true)}
                  />
                </div>
              </article>
            </AnimatedSection>

            {/* Comment Form */}
            {showCommentForm && (
              <AnimatedSection>
                <BlogCommentForm
                  postSlug={post.slug}
                  postTitle={post.title}
                  onCommentSubmitted={() => setShowCommentForm(false)}
                />
              </AnimatedSection>
            )}

            {/* Newsletter Signup */}
            <AnimatedSection>
              <NewsletterSignup className="mb-12" />
            </AnimatedSection>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <AnimatedSection>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <BlogCard key={relatedPost.id} post={relatedPost} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </main>

        {/* Share Modal */}
        <BlogShare
          postSlug={post.slug}
          postTitle={post.title}
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
        />

        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </div>
    </>
  );
}
