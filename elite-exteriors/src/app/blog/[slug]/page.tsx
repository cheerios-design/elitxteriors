import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts, getLatestPosts } from "@/data/blog-posts";
import { BlogPostClient } from "@/app/blog/[slug]/BlogPostClient";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | Elite Exteriors Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Elite Exteriors Blog`,
    description: post.metaDescription,
    keywords: post.seoKeywords.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
    alternates: {
      canonical:
        post.canonicalUrl || `https://elitxteriors.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getLatestPosts(3).filter((p) => p.id !== post.id);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}
