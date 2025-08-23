"use client";

import { usePathname } from "next/navigation";
import SmoothScroll from "@/components/ui/smooth-scroll";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";
import { Layout } from "@/components/layout/layout";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    // Render admin pages without the main site Layout/nav/footer
    return <>{children}</>;
  }

  // Default: render the public site shell
  return (
    <>
      <ScrollProgress />
      <SmoothScroll>
        <Layout>{children}</Layout>
      </SmoothScroll>
      <BackToTop />
    </>
  );
}
