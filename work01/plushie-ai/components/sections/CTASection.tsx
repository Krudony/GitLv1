'use client';

import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Photos?
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-4">
          Join thousands of creators who are already using PlushieAI
        </p>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-white/80">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>Free account, no credit card needed</span>
          </div>
          <div className="hidden sm:block text-white/50">•</div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>5 free generations to start</span>
          </div>
          <div className="hidden sm:block text-white/50">•</div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>Premium features available</span>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/auth/signup">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-6"
            >
              Sign Up Now - It's Free!
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
            >
              See How It Works
            </Button>
          </Link>
        </div>

        {/* Money-back guarantee */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 inline-block">
          <p className="text-sm text-white/90">
            💰 <span className="font-semibold">Money-back guarantee:</span> Not satisfied? Get your credit back within 7 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
