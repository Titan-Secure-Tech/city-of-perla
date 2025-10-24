# Image Generation Prompts for City of Perla Landing Page

This document contains prompts for generating images to replace the placeholders on the landing page.

## Image 1: Hero Section (Main Banner)
**Location:** Hero section, right side
**Dimensions:** 1200x1600px (portrait orientation)
**Aspect Ratio:** 3:4

### Prompt:
```
A stunning aerial view of a modern, thriving small town in Arkansas surrounded by beautiful southern landscape with rolling hills and forests. In the foreground, show a futuristic tech campus with sleek glass buildings, green spaces, and diverse Black professionals walking and collaborating outdoors. The scene should feel hopeful, innovative, and connected to nature. Golden hour lighting with warm tones. Photorealistic, architectural photography style, drone perspective, 8k quality.
```

**Alternative prompt:**
```
A vibrant community scene showing diverse Black entrepreneurs, developers, and innovators collaborating in a modern tech workspace with large windows overlooking Arkansas countryside. Mix of laptops, whiteboards with startup ideas, and people engaged in animated discussions. Natural lighting, warm and inspiring atmosphere, contemporary interior design, professional photography, depth of field.
```

---

## Image 2: Innovation Hub Card
**Location:** Vision section, first card
**Dimensions:** 800x600px (landscape)
**Aspect Ratio:** 4:3

### Prompt:
```
A modern tech incubator space with diverse Black entrepreneurs working on laptops, 3D holographic displays showing innovative tech concepts, and startup posters on exposed brick walls. Bright, energetic atmosphere with industrial-modern design elements. Natural light streaming through large windows. People collaborating around a digital whiteboard. Professional photography, vibrant colors, sharp focus.
```

---

## Image 3: Community First Card
**Location:** Vision section, second card
**Dimensions:** 800x600px (landscape)
**Aspect Ratio:** 4:3

### Prompt:
```
A warm, inviting community gathering in a modern co-working space. Diverse Black professionals of various ages mentoring each other, sharing ideas over coffee, laughing together. Mix of formal and casual interactions. Modern furniture, plants, natural wood accents, and large windows. Emphasis on connection, support, and genuine human interaction. Lifestyle photography, warm tones, authentic moments.
```

---

## Image 4: Economic Growth Card
**Location:** Vision section, third card
**Dimensions:** 800x600px (landscape)
**Aspect Ratio:** 4:3

### Prompt:
```
An inspiring scene showing economic growth and success: diverse Black business professionals reviewing upward trending charts on tablets and screens, celebrating a funding round or product launch. Modern office with glass walls, views of Arkansas landscape outside. Mix of data visualization, technology, and human achievement. Professional photography, dynamic composition, aspirational mood, crisp and bright.
```

---

## Image 5: Arkansas Landscape (About Section)
**Location:** About Perla section, left side
**Dimensions:** 1200x1400px (slight portrait)
**Aspect Ratio:** 6:7

### Prompt:
```
A beautiful, sweeping landscape photograph of Arkansas countryside near Hot Spring County. Rolling green hills, mature trees, blue sky with dramatic clouds, winding country road in the distance. Peaceful, expansive view showcasing the natural beauty of the region. Signs of small-town development visible - a charming downtown area or residential area nestled in the landscape. Golden hour lighting, landscape photography, rich colors, high dynamic range.
```

**Alternative prompt:**
```
A charming view of small-town Arkansas architecture mixed with modern sustainable buildings. Tree-lined main street with both historic buildings and contemporary designs. People walking, local businesses, sense of community and growth. Southern charm meets modern innovation. Natural lighting, architectural photography, welcoming atmosphere.
```

---

## Additional Assets You May Want

### Favicon/Logo Concept:
```
A modern, minimalist logo design featuring the letter "P" for Perla, incorporating geometric shapes suggesting both technology (circuits, connections) and nature (hills, growth). Color palette: deep blue, vibrant purple, and gold accents. Vector style, clean lines, memorable design suitable for favicon and branding.
```

### Social Media Share Image:
**Dimensions:** 1200x630px (Open Graph standard)
```
Wide banner featuring the text "City of Perla - The New Black American Silicon Valley" overlaid on a composite image showing both Arkansas natural beauty and modern technology elements. Balanced composition with the city name prominent. Professional, inspiring, and shareable design. Include Arkansas state outline subtly in the background.
```

---

## Using the Gemini Image Generation Agent

If you'd like to generate these images using AI, you can use the openrouter-image-creator agent available in Claude Code. Simply provide these prompts to that agent and specify the dimensions needed for each image.

## Notes for Manual Image Creation

- All images should feature diverse representation with focus on Black excellence and innovation
- Maintain a consistent color palette: blues, purples, greens, with warm accents
- Balance modern technology aesthetics with Arkansas's natural beauty and southern charm
- Ensure images feel authentic, aspirational, and professional
- Consider using actual Arkansas landscapes as base references for authenticity

## Image Placement Instructions

Once you have the images, save them to `/public/images/` with these filenames:
- `hero-main.jpg` - Hero section image
- `innovation-hub.jpg` - Innovation card image
- `community-first.jpg` - Community card image
- `economic-growth.jpg` - Economic growth card image
- `arkansas-landscape.jpg` - About section landscape image

Then update the corresponding placeholders in `app/page.tsx` with Next.js Image components.
