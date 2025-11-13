import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'PlushieAI - Transform Images into Plushie Designs',
  description:
    'PlushieAI is a SaaS application that transforms your images into beautiful plushie designs using advanced AI technology.',
  keywords: [
    'plushie',
    'AI',
    'design',
    'image transformation',
    'creative design',
  ],
  openGraph: {
    title: 'PlushieAI',
    description:
      'Transform your images into beautiful plushie designs with AI',
    url: 'https://plushieai.com',
    siteName: 'PlushieAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlushieAI',
    description: 'Transform your images into beautiful plushie designs',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
