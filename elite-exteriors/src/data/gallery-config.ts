// Gallery Configuration File
// To add new images to the gallery:
// 1. Upload your images to: /public/assets/images/gallery/
// 2. Add the image details to the galleryImages array below
// 3. Set the appropriate category and title

export interface GalleryImage {
  src: string;
  title: string;
  category:
    | "cleaning"
    | "restoration"
    | "team"
    | "before-after"
    | "gutters"
    | "landscaping";
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  // Team Photos
  {
    src: "/assets/images/gallery/gallery1(1).JPG",
    title: "Professionals at Work",
    category: "team",
    description:
      "Our experienced team setting up equipment for a residential cleaning project",
  },
  {
    src: "/assets/images/gallery/gallery1(2).JPG",
    title: "Planning Before Work",
    category: "team",
    description: "Team consultation and project planning phase",
  },

  // Cleaning Projects
  {
    src: "/assets/images/gallery/gallery1(3).JPG",
    title: "Exterior House Cleaning",
    category: "cleaning",
    description: "Professional pressure washing of residential exterior",
  },
  {
    src: "/assets/images/gallery/gallery1(4).jpg",
    title: "Driveway Pressure Washing",
    category: "cleaning",
    description: "Complete driveway cleaning and restoration",
  },
  {
    src: "/assets/images/gallery/gallery1(5).jpg",
    title: "Siding Cleaning",
    category: "cleaning",
    description: "Gentle yet effective exterior siding cleaning",
  },
  {
    src: "/assets/images/gallery/gallery1(7).jpg",
    title: "Deck Restoration",
    category: "cleaning",
    description: "Wooden deck cleaning and preparation for staining",
  },
  {
    src: "/assets/images/gallery/gallery1(8).JPG",
    title: "Commercial Pressure Washing",
    category: "cleaning",
    description: "Large-scale commercial property cleaning project",
  },
  {
    src: "/assets/images/gallery/gallery1(9).jpg",
    title: "Residential Exterior Cleaning",
    category: "cleaning",
    description: "Complete home exterior cleaning and maintenance",
  },

  // Restoration Projects
  {
    src: "/assets/images/gallery/gallery1(6).jpg",
    title: "Patio Restoration",
    category: "restoration",
    description: "Complete patio cleaning and restoration project",
  },

  // Before & After
  {
    src: "/assets/images/gallery/before1.jpg",
    title: "Before Cleaning - Moss Covered Deck",
    category: "before-after",
    description: "Deck before professional cleaning treatment",
  },
  {
    src: "/assets/images/gallery/after1.jpg",
    title: "After Cleaning - Restored Deck",
    category: "before-after",
    description: "Same deck after professional pressure washing and treatment",
  },

  // Add more images following this format:
  // {
  //   src: "/assets/images/gallery/your-image-name.jpg",
  //   title: "Your Image Title",
  //   category: "cleaning", // Choose from: cleaning, restoration, team, before-after, gutters, landscaping
  //   description: "Optional description of the project"
  // },
];

export const galleryCategories = [
  {
    id: "all",
    name: "All Work",
    description: "View all our completed projects",
  },
  {
    id: "cleaning",
    name: "Pressure Washing",
    description: "Professional cleaning services",
  },
  {
    id: "restoration",
    name: "Restoration",
    description: "Property restoration projects",
  },
  {
    id: "team",
    name: "Team at Work",
    description: "Our professionals in action",
  },
  {
    id: "before-after",
    name: "Before & After",
    description: "Transformation showcases",
  },
  {
    id: "gutters",
    name: "Gutter Cleaning",
    description: "Gutter cleaning and maintenance",
  },
  {
    id: "landscaping",
    name: "Lawn Care & Mulching",
    description: "Landscaping and lawn care services",
  },
];

// Instructions for adding new images:
//
// STEP 1: Upload Images
// Place your images in the folder: /public/assets/images/gallery/
// Supported formats: .jpg, .jpeg, .png, .webp
//
// STEP 2: Add Image Configuration
// Copy the template below and add it to the galleryImages array above:
/*
{
  src: "/assets/images/gallery/your-image-filename.jpg",
  title: "Descriptive Title for Your Image",
  category: "cleaning", // Choose appropriate category
  description: "Optional detailed description of the work shown"
},
*/
//
// STEP 3: Categories
// Available categories:
// - "cleaning": Pressure washing, exterior cleaning
// - "restoration": Deck restoration, patio restoration
// - "team": Photos of team members working
// - "before-after": Before and after comparison shots
// - "gutters": Gutter cleaning projects
// - "landscaping": Lawn care, mulching, landscaping
//
// The gallery will automatically update when you save this file!
