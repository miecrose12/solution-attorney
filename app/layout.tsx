import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';   // ← fixed: relative import (since same folder)

export const metadata: Metadata = {
  title: 'Solutions Attorney - Legal Excellence in Africa',
  description: 'Precision-engineered legal strategies for visionaries redefining West African commercial landscape.',
  keywords: ['legal services', 'corporate law', 'African law', 'wealth management', 'real estate'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Removed the Material Symbols link – now in globals.css */}
      </head>
      <body className="bg-white">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}