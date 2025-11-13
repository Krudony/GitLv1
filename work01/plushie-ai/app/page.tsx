import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'PlushieAI - Transform Photos into Adorable Plushies',
  description:
    'Turn any image into a custom plushie design in seconds using AI-powered technology. No design skills needed. Perfect for gifts, merchandise, and more.',
  keywords: [
    'plushie',
    'AI',
    'image transformation',
    'design',
    'custom plushie',
    'merchandise',
  ],
  openGraph: {
    title: 'PlushieAI - Transform Photos into Adorable Plushies',
    description:
      'Turn any image into a custom plushie design in seconds using AI-powered technology.',
    url: 'https://plushieai.com',
    siteName: 'PlushieAI',
    images: [
      {
        url: 'https://plushieai.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PlushieAI - Transform Photos into Plushies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlushieAI - Transform Photos into Adorable Plushies',
    description:
      'Turn any image into a custom plushie design in seconds using AI-powered technology.',
    images: ['https://plushieai.com/twitter-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://plushieai.com',
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Before & After Showcase Section */}
      <ShowcaseSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <CTASection />
    </main>
  );
}
