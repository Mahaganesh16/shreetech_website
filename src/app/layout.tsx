import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#eaf2fb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Shree Tech | Software Engineering & Cloud Solutions',
  description:
    'Building Digital Solutions That Move Businesses Forward. Shree Tech is an enterprise software engineering and technical consulting firm delivering modern web platforms, mobile apps, and cloud architectures.',
  keywords: [
    'Shree Tech',
    'Software Development Company',
    'Next.js Development',
    'Enterprise Web Applications',
    'Mobile Application Development',
    'Glassmorphism UI',
    'Cloud and DevOps',
  ],
  authors: [{ name: 'Shree Tech' }],
  creator: 'Shree Tech',
  openGraph: {
    title: 'Shree Tech | Software Engineering & Cloud Solutions',
    description:
      'We help businesses transform ideas into scalable digital products through innovative software engineering, modern technologies, and thoughtful glassmorphism design.',
    url: 'https://shreetech.com',
    siteName: 'Shree Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Tech | Software Engineering',
    description:
      'Building Digital Solutions That Move Businesses Forward. Enterprise software engineering & consulting.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#eaf2fb] text-[#1e293b] min-h-screen flex flex-col antialiased selection:bg-sky-500/25 selection:text-sky-900">
        {/* Architectural backdrop aesthetic */}
        <div className="arch-silhouette-bg" />

        {/* Floating Frosted Glass Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 relative z-10">{children}</main>

        {/* Frosted Glass Footer */}
        <Footer />
      </body>
    </html>
  );
}
