# shadcn/ui Setup Documentation

This document describes the shadcn/ui configuration for the perla-landing Next.js 16 project.

## Installation Summary

### Dependencies Installed

```json
{
  "@radix-ui/react-separator": "1.1.7",
  "@radix-ui/react-slot": "1.2.3",
  "class-variance-authority": "0.7.1",
  "clsx": "2.1.1",
  "lucide-react": "0.547.0",
  "tailwind-merge": "3.3.1"
}
```

## Configuration Files

### 1. components.json

Located at: `/Users/jbwashington/Developer/client/cityofperla/perla-landing/components.json`

This file configures how shadcn/ui components are installed and organized:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### 2. globals.css

Located at: `/Users/jbwashington/Developer/client/cityofperla/perla-landing/app/globals.css`

The CSS file has been configured for Tailwind CSS v4 with shadcn/ui theme variables. Key features:

- Uses `@theme inline` for Tailwind v4 compatibility
- Defines all shadcn/ui color variables with `--color-` prefix
- Supports dark mode via `prefers-color-scheme`
- Maintains compatibility with Geist fonts

### 3. lib/utils.ts

Located at: `/Users/jbwashington/Developer/client/cityofperla/perla-landing/lib/utils.ts`

Utility function for merging Tailwind classes:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Installed Components

All components are located in: `/Users/jbwashington/Developer/client/cityofperla/perla-landing/components/ui/`

### 1. Button Component

File: `components/ui/button.tsx`

**Variants:**
- `default` - Primary button style
- `destructive` - For dangerous actions
- `outline` - Outlined button
- `secondary` - Secondary style
- `ghost` - Minimal style
- `link` - Link-styled button

**Sizes:**
- `default` - Standard size (h-9)
- `sm` - Small size (h-8)
- `lg` - Large size (h-10)
- `icon` - Icon button (h-9 w-9)

**Usage:**
```tsx
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <>
      <Button>Default Button</Button>
      <Button variant="outline" size="sm">Small Outline</Button>
      <Button variant="destructive">Delete</Button>
    </>
  )
}
```

### 2. Card Component

File: `components/ui/card.tsx`

**Subcomponents:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title element
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Usage:**
```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}
```

### 3. Separator Component

File: `components/ui/separator.tsx`

**Props:**
- `orientation` - "horizontal" (default) or "vertical"
- `decorative` - Boolean for accessibility (default: true)

**Usage:**
```tsx
import { Separator } from "@/components/ui/separator"

export function Example() {
  return (
    <div>
      <div>Content above</div>
      <Separator />
      <div>Content below</div>

      {/* Vertical separator */}
      <div className="flex h-5 items-center space-x-4">
        <div>Item 1</div>
        <Separator orientation="vertical" />
        <div>Item 2</div>
      </div>
    </div>
  )
}
```

## Demo Component

A demo component has been created to showcase all installed components:

Location: `/Users/jbwashington/Developer/client/cityofperla/perla-landing/components/demo.tsx`

To use it in your app, import and render it:

```tsx
import { ComponentDemo } from "@/components/demo"

export default function Page() {
  return <ComponentDemo />
}
```

## Installing Additional Components

To add more shadcn/ui components in the future, you can either:

1. **Manual Installation** (recommended for this Tailwind v4 setup):
   - Visit https://ui.shadcn.com/docs/components/[component-name]
   - Copy the component code
   - Create the file in `components/ui/`
   - Install any required dependencies

2. **Using the CLI** (may need adjustments for Tailwind v4):
   ```bash
   npx shadcn@latest add [component-name]
   ```
   Note: The CLI may not be fully compatible with Tailwind CSS v4 yet.

## Tailwind CSS v4 Compatibility Notes

This setup uses Tailwind CSS v4, which has some key differences from v3:

1. **Theme Definition**: Uses `@theme inline` instead of `tailwind.config.js` for theme customization
2. **Color Variables**: Defined with `--color-` prefix (e.g., `--color-primary`)
3. **CSS-First Configuration**: Most configuration is now in CSS rather than JS
4. **No @apply for Custom Utilities**: The new version has stricter rules for `@apply`

## Project Structure

```
perla-landing/
├── app/
│   ├── globals.css          # Tailwind + shadcn/ui styles
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   └── demo.tsx             # Demo component
├── lib/
│   └── utils.ts             # Utility functions
├── components.json          # shadcn/ui config
├── tsconfig.json            # TypeScript config with @/* paths
└── package.json
```

## TypeScript Path Aliases

The project uses the following path aliases (defined in `tsconfig.json`):

```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

This allows you to import from anywhere in the project using `@/`:

```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Build Verification

The setup has been tested and verified to build successfully:

```bash
pnpm run build
# ✓ Compiled successfully
```

## Next Steps

1. Use the installed components in your landing page
2. Customize the theme colors in `app/globals.css` if needed
3. Install additional components as required
4. Refer to the official documentation at https://ui.shadcn.com/docs

## Support

For questions about:
- **shadcn/ui**: Visit https://ui.shadcn.com/docs
- **Tailwind CSS v4**: Visit https://tailwindcss.com/docs
- **Next.js 16**: Visit https://nextjs.org/docs
