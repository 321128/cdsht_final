# Team Images Upload Guide

## 📁 Directory Structure
Your images should be placed in: `public/images/team/`

## 🖼️ Image Guidelines

### File Naming Convention
Use consistent naming based on team member IDs or names:
- `ashok-harnal.jpg`
- `amarnath-mitra.jpg`
- `subir-verma.jpg`
- `sriparna-basu.jpg`
- `shilpi-jain.jpg`
- `saurabh-mittal.jpg`
- `priya-sharma.jpg`
- `vikram-patel.jpg`

### Image Specifications
- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 400x400px (square) or 300x400px (portrait)
- **File Size**: Keep under 500KB for optimal loading
- **Quality**: Good quality but web-optimized

### Image Optimization Tips
1. **Resize**: Use tools like GIMP, Photoshop, or online tools to resize
2. **Compress**: Use TinyPNG or similar tools to reduce file size
3. **Crop**: Center the face in the image for best display

## 🔧 How to Add Images

### Step 1: Upload Your Images
1. Copy your prepared images to: `/home/ashok/Desktop/WEBSITE (Centre for digital, social and huamn transformation)/project/public/images/team/`
2. Use the file manager or terminal:
   ```bash
   cp /path/to/your/image.jpg public/images/team/
   ```

### Step 2: Update Team Member Data
In `src/pages/TeamPage.tsx`, add the `image` property to each team member:

```typescript
{
  id: 'ashok-harnal',
  name: "Prof. Ashok Kumar Harnal",
  // ... other properties
  image: "/images/team/ashok-harnal.jpg", // Add this line
  // ... rest of properties
}
```

### Step 3: Image Path Format
Always use the format: `"/images/team/filename.jpg"`
- Start with `/` (forward slash)
- Use `images/team/` as the directory
- Include the full filename with extension

## 🎨 How It Works

### Conditional Display
The code now handles both cases:
- **With Image**: Shows your uploaded photo
- **Without Image**: Shows placeholder with User icon

### Example Implementation
```typescript
// Team member WITH image
{
  id: 'john-doe',
  name: "John Doe",
  image: "/images/team/john-doe.jpg", // Image will be displayed
  // ... other properties
}

// Team member WITHOUT image
{
  id: 'jane-smith',
  name: "Jane Smith",
  // No image property - placeholder will be shown
  // ... other properties
}
```

## 🚀 Adding Images Gradually

You don't need to add all images at once:
1. Add one image at a time
2. Test each addition
3. Members without images will show placeholders
4. Members with images will display your photos

## 📂 Example File Structure
```
project/
├── public/
│   ├── images/
│   │   └── team/
│   │       ├── ashok-harnal.jpg
│   │       ├── amarnath-mitra.jpg
│   │       ├── subir-verma.jpg
│   │       └── ... (other team member photos)
│   └── index.html
├── src/
│   └── pages/
│       └── TeamPage.tsx
└── ...
```

## 🔄 Testing Your Changes

1. Upload your image to `public/images/team/`
2. Update the team member data with image path
3. Save the file
4. Refresh your browser to see the changes

## 💡 Tips

1. **Consistent Naming**: Use kebab-case (lowercase with hyphens)
2. **Backup**: Keep original high-res images as backups
3. **Testing**: Test with one image first before adding all
4. **Fallback**: The code gracefully handles missing images

## 🛠️ Troubleshooting

### Image Not Showing?
1. Check the file path is correct
2. Verify the image exists in `public/images/team/`
3. Ensure filename matches exactly (case-sensitive)
4. Check image format is supported (jpg, png, webp)

### Image Quality Issues?
1. Ensure image is at least 300x300px
2. Use appropriate compression
3. Check if image is properly centered/cropped
