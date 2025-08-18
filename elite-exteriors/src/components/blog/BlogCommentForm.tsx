"use client";

import { useState } from "react";
import { Send, User, Mail, MessageCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import { submitComment } from "@/lib/blog-interactions";

interface BlogCommentFormProps {
  postSlug: string;
  postTitle: string;
  onCommentSubmitted?: () => void;
}

export function BlogCommentForm({
  postSlug,
  postTitle,
  onCommentSubmitted,
}: BlogCommentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.comment.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitComment(
        postSlug,
        postTitle,
        formData.name.trim(),
        formData.email.trim(),
        formData.comment.trim()
      );

      toast.success(
        "Thank you for your comment! It will be visible once approved by our moderator.",
        { duration: 5000 }
      );

      // Reset form
      setFormData({ name: "", email: "", comment: "" });
      setShowForm(false);
      onCommentSubmitted?.();
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (!showForm) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 mt-8">
        <div className="text-center">
          <MessageCircle className="h-12 w-12 text-sky-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Share Your Thoughts
          </h3>
          <p className="text-gray-600 mb-4">
            Have questions or want to share your experience? We&apos;d love to
            hear from you!
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Leave a Comment</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
      <div className="flex items-center mb-6">
        <MessageCircle className="h-6 w-6 text-sky-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Leave a Comment</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                maxLength={100}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                placeholder="Your full name"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                maxLength={255}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Your email won&apos;t be published
            </p>
          </div>
        </div>

        {/* Comment Field */}
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
            maxLength={1000}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Share your thoughts, questions, or experiences..."
            disabled={isSubmitting}
          />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-gray-500">
              Your comment will be reviewed before being published
            </p>
            <span className="text-xs text-gray-500">
              {formData.comment.length}/1000
            </span>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center space-x-2 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-sky-600 hover:bg-sky-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            }`}
          >
            <Send
              className={`h-4 w-4 ${isSubmitting ? "animate-pulse" : ""}`}
            />
            <span>{isSubmitting ? "Submitting..." : "Submit Comment"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setShowForm(false);
              setFormData({ name: "", email: "", comment: "" });
            }}
            disabled={isSubmitting}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Moderation Notice */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Comment Moderation
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                All comments are reviewed by our team to ensure they&apos;re
                helpful and respectful. Your comment will appear once it&apos;s
                been approved, usually within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
