# Gallery Management Instructions

## How to Add Images to the Gallery

### Step 1: Upload Images to the Gallery Folder

Upload your images to the following folder:

```
/public/assets/images/gallery/
```

**Supported file formats:**

- `.jpg`
- `.jpeg`
- `.png`
- `.webp`

**Recommended image specifications:**

- **Width:** 800-1200px (for optimal display)
- **Height:** Variable (masonry layout adapts to different heights)
- **File size:** Keep under 2MB for optimal loading
- **Quality:** High quality for professional appearance

### Step 2: Update the Gallery Configuration

Open the file: `/src/data/gallery-config.ts`

Add your new images to the `galleryImages` array using this format:

```typescript
{
  src: "/assets/images/gallery/your-image-name.jpg",
  title: "Descriptive Title for Your Image",
  category: "cleaning", // Choose from available categories
  description: "Optional detailed description of the work shown" // Optional
},
```

### Step 3: Choose the Right Category

Available categories:

- **`cleaning`** - Pressure washing, exterior cleaning
- **`restoration`** - Deck restoration, patio restoration
- **`team`** - Photos of team members working
- **`before-after`** - Before and after comparison shots
- **`gutters`** - Gutter cleaning projects
- **`landscaping`** - Lawn care, mulching, landscaping

### Example Addition

```typescript
// Add this to the galleryImages array in gallery-config.ts
{
  src: "/assets/images/gallery/deck-cleaning-2024.jpg",
  title: "Wooden Deck Deep Cleaning",
  category: "cleaning",
  description: "Complete deck cleaning removing years of moss and dirt buildup"
},
```

## File Naming Conventions

**Recommended naming format:**

- Use descriptive names: `deck-cleaning-before.jpg` instead of `IMG_1234.jpg`
- Use hyphens instead of spaces: `patio-restoration.jpg`
- Include project type: `pressure-washing-driveway.jpg`
- For before/after shots: `deck-before.jpg` and `deck-after.jpg`

## Image Organization Tips

1. **Before/After Pairs:** Keep before and after images with consistent naming
2. **Project Documentation:** Include multiple angles of the same project
3. **Quality Control:** Only add high-quality, professional-looking images
4. **Variety:** Mix different types of projects to showcase all services

## Gallery Features

### Current Features:

- **Masonry Layout:** Images arrange automatically in a Pinterest-style grid
- **Category Filtering:** Users can filter by service type
- **Modal View:** Click images for full-size viewing with navigation
- **Hover Effects:** Professional hover overlays with titles and descriptions
- **Responsive Design:** Works on all device sizes
- **SEO Optimized:** Proper alt tags and structured data

### Technical Details:

- Images are automatically optimized by Next.js
- Lazy loading for better performance
- Responsive images with proper sizing
- Accessibility features included

## Troubleshooting

### Image Not Showing?

1. Check the file path is correct in `gallery-config.ts`
2. Ensure the image is in `/public/assets/images/gallery/`
3. Verify the file extension matches (case-sensitive)
4. Clear browser cache and refresh

### Slow Loading?

1. Optimize image file sizes (compress if over 2MB)
2. Use appropriate image formats (WebP for best performance)
3. Consider resizing very large images

### Category Not Working?

1. Ensure the category matches exactly (case-sensitive)
2. Check that the category exists in `galleryCategories` array
3. Add new categories to both arrays if needed

## Need Help?

If you need assistance adding images or encounter any issues:

1. Check the example format in `gallery-config.ts`
2. Ensure all required fields are filled
3. Test the gallery after adding new images
4. Contact your developer if problems persist

---

**Last Updated:** August 2025
**File Locations:**

- Images: `/public/assets/images/gallery/`
- Configuration: `/src/data/gallery-config.ts`
- Gallery Page: `/src/app/gallery/page.tsx`
