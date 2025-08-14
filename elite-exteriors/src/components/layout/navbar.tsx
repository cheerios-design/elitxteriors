"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  description?: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Handyman", href: "/handyman" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg border-b border-neutral-200"
          : "bg-sky-600/50 backdrop-blur-md "
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-15 h-15 lg:w-12 lg:h-12">
                <Image
                  src="/assets/logos/main-logo.png"
                  alt="Elite Exteriors Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "heading-secondary text-lg uppercase lg:text-xl transition-colors duration-200",
                    isScrolled ? "text-sky-600" : "text-white"
                  )}
                >
                  Elite Exteriors
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "body-text relative px-3 py-2 text-sm transition-colors duration-200",
                  "hover:text-primary-600",
                  "before:absolute before:bottom-0 before:left-0 before:right-0",
                  "before:h-0.5 before:bg-primary-600 before:transform before:scale-x-0",
                  "before:transition-transform before:duration-200 hover:before:scale-x-100",
                  isActiveLink(item.href)
                    ? "text-primary-600 before:scale-x-100"
                    : isScrolled
                    ? "text-neutral-800"
                    : "text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link href="/contact">
              <Button variant="primary" size="md" className="button">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md",
                "transition-colors duration-200",
                isScrolled
                  ? "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
                  : "text-white hover:text-neutral-200 hover:bg-white/10"
              )}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={cn(
                  "h-6 w-6 transition-transform duration-200",
                  isMobileMenuOpen && "transform rotate-90"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMobileMenuOpen
              ? "max-h-screen opacity-100 pb-6"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-neutral-200 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "body-text block px-3 py-2 text-base rounded-md transition-colors duration-200",
                  "hover:bg-primary-50 hover:text-primary-600",
                  isActiveLink(item.href)
                    ? "bg-primary-50 text-primary-600"
                    : "text-neutral-800"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200">
              <Link href="/contact" className="block">
                <Button variant="primary" size="md" className="button w-full">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
