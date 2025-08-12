This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# react-webshop

Front-End Developer Test — Product Card (Next.js)
Demo route: /test-page
(Optional) Cart preview: /cart — validates that “Add to Cart” stores the selected variant and shows it (e.g. 128 GB).

What’s Implemented (per brief)
Product image, name, price

Variant selector (dropdown). The label is persisted/displayed (e.g., 128 GB)

Add to Cart button

Button becomes “Out of Stock” (disabled) when unavailable

Responsive, clean layout with Tailwind (mobile → desktop)

How to Review Quickly
Open /test-page.

Pick a variant (e.g., 128 GB).

Click Add to Cart.

Visit /cart — item appears with variant, quantity, remove, clear, and total.

Layout Approach (2–3 sentences)
A compact, card-based layout with clear hierarchy: image, title/price row, variant control, and a primary CTA. Spacing and contrast emphasize readability and scanability; state (in/out of stock) is conveyed via color and button disablement.

Responsiveness (2–3 sentences)
The card uses fluid widths and vertical stacking on mobile; spacing and touch targets scale for small screens. On larger screens, typography and spacing increase for comfortable reading while keeping controls aligned and accessible.

Tech Stack
Next.js 15 (App Router), TypeScript

Tailwind CSS

Context API for lightweight cart state (no backend)

Key Files
src/components/TestProductCard.tsx — Product Card (variant selector + CTA)

src/context/CartContext.tsx — cart with id + variant grouping/removal

src/types/Cart.ts, src/types/TestProduct.ts — shared types

src/data/testProduct.ts — mock product with variants

Routes
/test-page — test page (required for review)

/cart — cart (variant shown, remove/clear, total)

/ — landing/home (non-essential for the test)
