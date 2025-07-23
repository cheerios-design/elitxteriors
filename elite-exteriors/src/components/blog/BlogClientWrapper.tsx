"use client";

import { useState, useMemo } from "react";
import { BlogSearchFilters } from "./BlogSearchFilters";
import { BlogCard } from "./BlogCard";
import { NewsletterSignup } from "./NewsletterSignup";
import { BlogFilters } from "@/types/blog";
import {
  blogPosts,
  searchPosts,
  getAllTags,
  getAllLocations,
} from "@/data/blog-posts";
import { blogCategories } from "@/data/blog-categories";

export function BlogClientWrapper() {
  const [filters, setFilters] = useState<BlogFilters>({});

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    // Apply search query
    if (filters.searchQuery) {
      posts = searchPosts(filters.searchQuery);
    }

    // Apply category filter
    if (filters.category) {
      posts = posts.filter((post) => post.category.id === filters.category);
    }

    // Apply tags filter
    if (filters.tags && filters.tags.length > 0) {
      posts = posts.filter((post) =>
        filters.tags!.some((tag) =>
          post.tags.some((postTag) =>
            postTag.toLowerCase().includes(tag.toLowerCase())
          )
        )
      );
    }

    // Apply hashtags filter
    if (filters.hashtags && filters.hashtags.length > 0) {
      posts = posts.filter((post) =>
        filters.hashtags!.some((hashtag) => post.hashtags.includes(hashtag))
      );
    }

    // Apply locations filter
    if (filters.locations && filters.locations.length > 0) {
      posts = posts.filter((post) =>
        filters.locations!.some((location) =>
          post.locations.some((postLocation) =>
            postLocation.toLowerCase().includes(location.toLowerCase())
          )
        )
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "oldest":
        posts.sort(
          (a, b) =>
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
        );
        break;
      case "most-viewed":
        posts.sort((a, b) => b.views - a.views);
        break;
      case "most-liked":
        posts.sort((a, b) => b.likes - a.likes);
        break;
      case "newest":
      default:
        posts.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
        break;
    }

    return posts;
  }, [filters]);

  const allTags = getAllTags();
  const allLocations = getAllLocations();
  const popularCategories = blogCategories.slice(0, 6);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3">
        {/* Search and Filters */}
        <BlogSearchFilters
          filters={filters}
          onFiltersChange={setFilters}
          totalResults={filteredPosts.length}
        />

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => setFilters({})}
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        {/* Newsletter Signup */}
        <NewsletterSignup variant="sidebar" />

        {/* Popular Categories */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Categories
          </h3>
          <div className="space-y-2">
            {popularCategories.map((category) => {
              const postCount = blogPosts.filter(
                (post) => post.category.id === category.id
              ).length;
              return (
                <button
                  key={category.id}
                  onClick={() =>
                    setFilters({ ...filters, category: category.id })
                  }
                  className={`w-full text-left p-2 rounded-md transition-colors ${
                    filters.category === category.id
                      ? "bg-sky-50 text-sky-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-gray-500">{postCount}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 12).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilters({ ...filters, tags: [tag] })}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  filters.tags?.includes(tag)
                    ? "bg-sky-500 text-white border-sky-500"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Service Areas
          </h3>
          <div className="space-y-2">
            {allLocations.map((location) => {
              const postCount = blogPosts.filter((post) =>
                post.locations.some((loc) =>
                  loc.toLowerCase().includes(location.toLowerCase())
                )
              ).length;
              return (
                <button
                  key={location}
                  onClick={() =>
                    setFilters({ ...filters, locations: [location] })
                  }
                  className={`w-full text-left p-2 rounded-md transition-colors ${
                    filters.locations?.includes(location)
                      ? "bg-sky-50 text-sky-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{location}</span>
                    <span className="text-sm text-gray-500">{postCount}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <div className="space-y-2">
            <a
              href="/services"
              className="block text-sky-600 hover:text-sky-700 transition-colors"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="block text-sky-600 hover:text-sky-700 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="/about"
              className="block text-sky-600 hover:text-sky-700 transition-colors"
            >
              About Us
            </a>
            <a
              href="tel:757-796-7240"
              className="block text-sky-600 hover:text-sky-700 transition-colors"
            >
              Call (757) 796-7240
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
