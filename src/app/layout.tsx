import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Webshop",
  description: "Egyszerű Next.js alapú webshop",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className={poppins.className}>
        <CartProvider>
          <Navbar />
          <main className="py-6 max-w-7xl mx-auto">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
