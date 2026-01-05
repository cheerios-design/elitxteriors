"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

interface NewsletterSignupProps {
  className?: string;
  variant?: "default" | "sidebar" | "footer";
}

export function NewsletterSignup({
  className = "",
  variant = "default",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    setStatus("loading");

    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate a successful subscription
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setMessage(
        "Thank you for subscribing! Check your email for confirmation."
      );
      setEmail("");
      setName("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "sidebar") {
    return (
      <div
        className={`bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-6 ${className}`}
      >
        <div className="text-center mb-4">
          <Mail className="h-8 w-8 text-sky-600 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-600">
            Get the latest tips and insights delivered to your inbox.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center" role="status" aria-live="polite">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" aria-hidden="true" />
            <p className="text-sm text-green-700">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3" aria-label="Newsletter subscription">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm placeholder-gray-600 bg-white"
              required
              aria-required="true"
              aria-label="Email address for newsletter"
              autoComplete="email"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              aria-label={status === "loading" ? "Subscribing to newsletter, please wait" : "Subscribe to newsletter"}
              className="w-full bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors disabled:opacity-50 text-sm font-medium"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
            {status === "error" && (
              <div className="flex items-center text-red-600 text-xs" role="alert" aria-live="assertive">
                <AlertCircle className="h-4 w-4 mr-1" aria-hidden="true" />
                {message}
              </div>
            )}
          </form>
        )}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`${className}`}>
        <div className="flex items-center mb-3">
          <Mail className="h-5 w-5 text-sky-600 mr-2" />
          <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
        </div>

        {status === "success" ? (
          <div className="flex items-center text-green-600 text-sm" role="status" aria-live="polite">
            <CheckCircle className="h-4 w-4 mr-1" aria-hidden="true" />
            Subscribed successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2" aria-label="Newsletter subscription">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm placeholder-gray-600 bg-white"
              required
              aria-required="true"
              aria-label="Email address for newsletter"
              autoComplete="email"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              aria-label={status === "loading" ? "Subscribing to newsletter, please wait" : "Subscribe to newsletter"}
              className="w-full bg-sky-600 text-white px-3 py-2 rounded-md hover:bg-sky-700 transition-colors disabled:opacity-50 text-xs font-medium"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
            {status === "error" && (
              <p className="text-red-600 text-xs" role="alert" aria-live="assertive">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={`bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl p-8 text-white ${className}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
        <h2 className="text-2xl font-bold mb-2">
          Stay Informed with Our Newsletter
        </h2>
        <p className="text-sky-100 mb-6">
          Get expert home maintenance tips, seasonal cleaning guides, and
          exclusive offers delivered straight to your inbox.
        </p>

        {status === "success" ? (
          <div className="bg-white/10 rounded-lg p-6" role="status" aria-live="polite">
            <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-300" aria-hidden="true" />
            <p className="text-green-100">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto" aria-label="Newsletter subscription">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="newsletter-name" className="sr-only">Your name (optional)</label>
                <input
                  id="newsletter-name"
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-600 bg-white border-2 border-white/20 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-white text-lg"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">Your email address (required)</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-600 bg-white border-2 border-white/20 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-white text-lg"
                  required
                  aria-required="true"
                  autoComplete="email"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                aria-label={status === "loading" ? "Subscribing to newsletter, please wait" : "Subscribe to newsletter"}
                className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 whitespace-nowrap text-lg border-2 border-white"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {status === "error" && (
              <div className="mt-3 flex items-center justify-center text-red-300 text-sm" role="alert" aria-live="assertive">
                <AlertCircle className="h-4 w-4 mr-1" aria-hidden="true" />
                {message}
              </div>
            )}
          </form>
        )}

        <p className="text-xs text-sky-200 mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </div>
  );
}
