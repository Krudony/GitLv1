'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Transform Photos into Adorable Plushies
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Turn any image into a custom plushie design in seconds with AI-powered magic.
              </p>
            </div>

            <p className="text-lg text-gray-500">
              No design skills needed. Perfect for gifts, merchandise, or just for fun!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth/signup">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="pt-8 border-t border-gray-200 space-y-3">
              <p className="text-sm text-gray-600 font-medium">Trusted by thousands of creators</p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <span className="text-gray-600">4.9 out of 5 stars (500+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Placeholder for hero image - can be replaced with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧸</div>
                  <p className="text-gray-600 font-medium">Custom Plushie Design</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
