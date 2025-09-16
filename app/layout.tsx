import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CoWork - Premium Coworking Spaces',
  description: 'Join a thriving community of entrepreneurs, freelancers, and innovators in our premium coworking spaces. Modern amenities, flexible plans, and networking opportunities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>{children}</body>
    </html>
  );
}
