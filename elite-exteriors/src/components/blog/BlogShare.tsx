"use client";

import { useState } from "react";
import { Share2, Copy, Check, X } from "lucide-react";
import { toast } from "react-hot-toast";
import { shareBlogPost, getShareUrls } from "@/lib/blog-interactions";

interface BlogShareProps {
  postSlug: string;
  postTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export function BlogShare({
  postSlug,
  postTitle,
  isOpen,
  onClose,
}: BlogShareProps) {
  const [copied, setCopied] = useState(false);
  const shareUrls = getShareUrls(postSlug, postTitle);

  const handleShare = async (
    platform: "linkedin" | "facebook" | "twitter" | "copy"
  ) => {
    try {
      await shareBlogPost(postSlug, postTitle, platform);

      if (platform === "copy") {
        await navigator.clipboard.writeText(shareUrls.copy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success("Link copied to clipboard!");
      } else {
        const url = shareUrls[platform];
        window.open(
          url,
          "_blank",
          "width=600,height=400,scrollbars=yes,resizable=yes"
        );
        toast.success(`Shared on ${platform}!`);
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast.error("Failed to share. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center mb-6">
          <Share2 className="h-6 w-6 text-sky-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-900">
            Share This Article
          </h3>
        </div>

        {/* Article Info */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="font-medium text-gray-900 mb-1 line-clamp-2">
            {postTitle}
          </p>
          <p className="text-sm text-gray-600">{shareUrls.copy}</p>
        </div>

        {/* Share Options */}
        <div className="space-y-3">
          {/* LinkedIn */}
          <button
            onClick={() => handleShare("linkedin")}
            className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900 group-hover:text-blue-600">
                LinkedIn
              </p>
              <p className="text-sm text-gray-600">
                Share with your professional network
              </p>
            </div>
          </button>

          {/* Facebook */}
          <button
            onClick={() => handleShare("facebook")}
            className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900 group-hover:text-blue-600">
                Facebook
              </p>
              <p className="text-sm text-gray-600">
                Share with friends and family
              </p>
            </div>
          </button>

          {/* Twitter */}
          <button
            onClick={() => handleShare("twitter")}
            className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900 group-hover:text-blue-600">
                Twitter
              </p>
              <p className="text-sm text-gray-600">Tweet to your followers</p>
            </div>
          </button>

          {/* Copy Link */}
          <button
            onClick={() => handleShare("copy")}
            className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
              {copied ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <Copy className="w-5 h-5 text-white" />
              )}
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900 group-hover:text-green-600">
                {copied ? "Link Copied!" : "Copy Link"}
              </p>
              <p className="text-sm text-gray-600">
                {copied ? "Ready to paste anywhere" : "Copy link to clipboard"}
              </p>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Help us reach more homeowners by sharing our expert tips!
          </p>
        </div>
      </div>
    </div>
  );
}
