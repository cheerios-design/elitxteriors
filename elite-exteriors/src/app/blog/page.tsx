import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import AnimatedSection from "@/components/ui/animated-section";
import { BlogClientWrapper } from "@/components/blog/BlogClientWrapper";
import { getFeaturedPosts, getLatestPosts } from "@/data/blog-posts";
import { blogCategories } from "@/data/blog-categories";

export const metadata: Metadata = {
  title: "Expert Home Maintenance Blog | Elite Exteriors Hampton Roads",
  description:
    "Discover expert tips for pressure washing, gutter cleaning, home maintenance, and seasonal care in Hampton Roads. Professional advice from Elite Exteriors.",
  keywords: [
    "pressure washing tips",
    "gutter cleaning advice",
    "home maintenance Hampton Roads",
    "exterior cleaning blog",
    "seasonal home care",
    "Virginia home maintenance",
    "Chesapeake home tips",
    "pressure washing blog",
    "soft washing guides",
    "Christmas light installation",
  ].join(", "),
  openGraph: {
    title: "Expert Home Maintenance Blog | Elite Exteriors",
    description:
      "Professional home maintenance tips and guides for Hampton Roads homeowners.",
    type: "website",
    images: [
      {
        url: "/assets/images/blog/blog-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Exteriors Blog - Home Maintenance Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Home Maintenance Blog | Elite Exteriors",
    description:
      "Professional home maintenance tips and guides for Hampton Roads homeowners.",
    images: ["/assets/images/blog/blog-hero.jpg"],
  },
  alternates: {
    canonical: "https://elitxteriors.com/blog",
  },
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts(6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Elite Exteriors Blog",
    description:
      "Expert home maintenance tips and guides for Hampton Roads homeowners",
    url: "https://elitxteriors.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Elite Exteriors",
      url: "https://elitxteriors.com",
      logo: {
        "@type": "ImageObject",
        url: "https://elitxteriors.com/assets/logos/mainlogo.webp",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: featuredPosts.map((post, index) => ({
        "@type": "BlogPosting",
        position: index + 1,
        headline: post.title,
        description: post.excerpt,
        url: `https://elitxteriors.com/blog/${post.slug}`,
        datePublished: post.publishedAt,
        author: {
          "@type": "Person",
          name: post.author.name,
        },
        publisher: {
          "@type": "Organization",
          name: "Elite Exteriors",
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Expert Home Maintenance
                  <span className="block text-sky-200">Tips & Guides</span>
                </h1>
                <p className="text-xl lg:text-2xl text-sky-100 mb-8 max-w-2xl mx-auto">
                  Discover professional insights for pressure washing, gutter
                  cleaning, seasonal maintenance, and more from Hampton
                  Roads&apos; trusted exterior experts.
                </p>

                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {blogCategories.slice(0, 5).map((category) => (
                    <span
                      key={category.id}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {latestPosts.length}+
                    </div>
                    <div className="text-sky-200 text-sm">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {blogCategories.length}
                    </div>
                    <div className="text-sky-200 text-sm">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-sky-200 text-sm">Readers</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <AnimatedSection className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Featured Articles
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our most popular and informative guides to help you maintain
                  your home&apos;s exterior
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Blog Client Wrapper - Contains search, filters, and posts */}
          <BlogClientWrapper />

          {/* Newsletter Signup */}
          <AnimatedSection className="mt-16">
            <NewsletterSignup />
          </AnimatedSection>

          {/* SEO Content Section */}
          <AnimatedSection className="mt-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Your Hampton Roads Home Maintenance Resource
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-4">
                    Welcome to the Elite Exteriors blog, your comprehensive
                    resource for home exterior maintenance in the Hampton Roads
                    area. Our expert team shares professional insights, seasonal
                    tips, and proven techniques to help you maintain and protect
                    your property year-round.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        What You&apos;ll Find Here:
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Pressure washing and soft washing guides</li>
                        <li>• Gutter cleaning and maintenance tips</li>
                        <li>• Seasonal home care checklists</li>
                        <li>• Local climate considerations</li>
                        <li>• Professional equipment recommendations</li>
                        <li>• Safety best practices</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Service Areas:
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Chesapeake, VA</li>
                        <li>• Virginia Beach, VA</li>
                        <li>• Norfolk, VA</li>
                        <li>• Hampton, VA</li>
                        <li>• Newport News, VA</li>
                        <li>• Suffolk, VA</li>
                        <li>• Williamsburg, VA</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-6">
                    Whether you&apos;re dealing with humidity-related mold
                    growth, preparing for seasonal weather changes, or looking
                    to enhance your home&apos;s curb appeal, our blog provides
                    the expert guidance you need. All content is written by our
                    experienced team who understand the unique challenges of
                    coastal Virginia home maintenance.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </main>
      </div>
    </>
  );
}
