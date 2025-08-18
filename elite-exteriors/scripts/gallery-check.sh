#!/bin/bash

# Gallery Image Management Script
# This script helps manage gallery images

GALLERY_DIR="public/assets/images/gallery"
CONFIG_FILE="src/data/gallery-config.ts"

echo "🖼️  Elite Exteriors Gallery Management"
echo "=================================="

# Check if gallery directory exists
if [ ! -d "$GALLERY_DIR" ]; then
    echo "❌ Gallery directory not found: $GALLERY_DIR"
    exit 1
fi

# Count images in gallery
IMAGE_COUNT=$(find "$GALLERY_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | wc -l)
echo "📁 Gallery directory: $GALLERY_DIR"
echo "🖼️  Total images found: $IMAGE_COUNT"
echo ""

# List all images
echo "📋 Images in gallery:"
find "$GALLERY_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -exec basename {} \; | sort

echo ""
echo "⚙️  Configuration file: $CONFIG_FILE"

# Check if config file exists
if [ -f "$CONFIG_FILE" ]; then
    CONFIG_IMAGES=$(grep -c "src:" "$CONFIG_FILE" 2>/dev/null || echo "0")
    echo "📊 Images configured in config file: $CONFIG_IMAGES"
else
    echo "❌ Configuration file not found"
fi

echo ""
echo "📝 To add new images:"
echo "1. Copy images to: $GALLERY_DIR"
echo "2. Update configuration in: $CONFIG_FILE"
echo "3. Follow the format in GALLERY_INSTRUCTIONS.md"

echo ""
echo "✅ Gallery management check complete!"
