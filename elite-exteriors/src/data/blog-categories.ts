import { BlogCategory } from "@/types/blog";

export const blogCategories: BlogCategory[] = [
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    slug: "pressure-washing",
    description:
      "Expert tips and guides for pressure washing services, techniques, and best practices for home exterior cleaning.",
    color: "bg-sky-500",
  },
  {
    id: "soft-washing",
    name: "Soft Washing",
    slug: "soft-washing",
    description:
      "Learn about gentle cleaning methods perfect for delicate surfaces like siding, roofs, and more.",
    color: "bg-blue-500",
  },
  {
    id: "gutter-cleaning",
    name: "Gutter Cleaning",
    slug: "gutter-cleaning",
    description:
      "Essential information about gutter maintenance, cleaning, and preventing water damage to your home.",
    color: "bg-green-500",
  },
  {
    id: "seasonal-maintenance",
    name: "Seasonal Maintenance",
    slug: "seasonal-maintenance",
    description:
      "Year-round home exterior maintenance tips and seasonal cleaning schedules for Hampton Roads properties.",
    color: "bg-orange-500",
  },
  {
    id: "christmas-lights",
    name: "Christmas Lights",
    slug: "christmas-lights",
    description:
      "Professional holiday lighting installation, safety tips, and festive home decoration services.",
    color: "bg-red-500",
  },
  {
    id: "home-maintenance",
    name: "Home Maintenance",
    slug: "home-maintenance",
    description:
      "General home exterior maintenance tips, property care advice, and preventive measures for homeowners.",
    color: "bg-purple-500",
  },
  {
    id: "local-insights",
    name: "Local Insights",
    slug: "local-insights",
    description:
      "Hampton Roads specific tips, local climate considerations, and area-specific home maintenance advice.",
    color: "bg-teal-500",
  },
];

export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blogCategories.find((category) => category.slug === slug);
};

export const getCategoryById = (id: string): BlogCategory | undefined => {
  return blogCategories.find((category) => category.id === id);
};
