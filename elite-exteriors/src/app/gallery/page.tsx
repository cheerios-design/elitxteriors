import { GallerySection } from "@/components/sections/gallery-section";

export const metadata = {
  title: "Gallery - Elite Exteriors | See Our Work",
  description:
    "Browse through our extensive gallery of completed projects. See the quality and transformation we bring to every property.",
  keywords:
    "gallery, before after, pressure washing gallery, exterior cleaning photos, Elite Exteriors work",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GallerySection />
    </main>
  );
}
