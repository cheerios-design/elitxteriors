"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { BlogFilters } from "@/types/blog";
import { blogCategories } from "@/data/blog-categories";
import { getAllTags, getAllLocations, getAllHashtags } from "@/data/blog-posts";

interface BlogSearchFiltersProps {
  filters: BlogFilters;
  onFiltersChange: (filters: BlogFilters) => void;
  totalResults: number;
}

export function BlogSearchFilters({
  filters,
  onFiltersChange,
  totalResults,
}: BlogSearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState(filters.searchQuery || "");

  const allTags = getAllTags();
  const allLocations = getAllLocations();
  const allHashtags = getAllHashtags();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFiltersChange({ ...filters, searchQuery });
  };

  const handleFilterChange = (
    key: keyof BlogFilters,
    value: string | string[] | undefined
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setSearchQuery("");
    onFiltersChange({ searchQuery: "" });
  };

  const hasActiveFilters =
    filters.category ||
    filters.tags?.length ||
    filters.hashtags?.length ||
    filters.locations?.length ||
    filters.searchQuery;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex-1" role="search">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search blog posts"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
        </form>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          aria-expanded={showFilters}
          aria-label={`${showFilters ? "Hide" : "Show"} filter options${hasActiveFilters ? " (filters active)" : ""}`}
          className="flex items-center gap-2 px-4 py-3 bg-sky-50 text-sky-700 rounded-lg hover:bg-sky-100 transition-colors"
        >
          <Filter className="h-5 w-5" aria-hidden="true" />
          Filters
          {hasActiveFilters && (
            <span className="bg-sky-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" aria-label="Active filters indicator">
              !
            </span>
          )}
        </button>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            aria-label="Clear all active filters"
            className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
            Clear
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="mt-4 text-sm text-gray-600" role="status" aria-live="polite">
        {totalResults} {totalResults === 1 ? "post" : "posts"} found
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filters.category || ""}
                onChange={(e) =>
                  handleFilterChange("category", e.target.value || undefined)
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {blogCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={filters.locations?.[0] || ""}
                onChange={(e) =>
                  handleFilterChange(
                    "locations",
                    e.target.value ? [e.target.value] : undefined
                  )
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="">All Locations</option>
                {allLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <select
                value={filters.tags?.[0] || ""}
                onChange={(e) =>
                  handleFilterChange(
                    "tags",
                    e.target.value ? [e.target.value] : undefined
                  )
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy || "newest"}
                onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="most-viewed">Most Viewed</option>
                <option value="most-liked">Most Liked</option>
              </select>
            </div>
          </div>

          {/* Hashtags */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Popular Hashtags
            </label>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by hashtags">
              {allHashtags.slice(0, 10).map((hashtag) => (
                <button
                  key={hashtag}
                  onClick={() => {
                    const isSelected = filters.hashtags?.includes(hashtag);
                    const newHashtags = isSelected
                      ? filters.hashtags?.filter((h) => h !== hashtag)
                      : [...(filters.hashtags || []), hashtag];
                    handleFilterChange(
                      "hashtags",
                      newHashtags?.length ? newHashtags : undefined
                    );
                  }}
                  aria-pressed={filters.hashtags?.includes(hashtag)}
                  aria-label={`Filter by ${hashtag} hashtag`}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    filters.hashtags?.includes(hashtag)
                      ? "bg-sky-500 text-white border-sky-500"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {hashtag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
