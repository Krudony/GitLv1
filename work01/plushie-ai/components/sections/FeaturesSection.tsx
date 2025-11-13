'use client';

import { Zap, Sparkles, Shield, Palette, Download, Smartphone } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'AI-Powered Generation',
    description: 'Advanced AI technology transforms your photos into custom plushie designs in seconds',
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Multiple Styles',
    description: 'Choose from cute, realistic, cartoon, pastel, and more creative plushie styles',
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'High Quality Output',
    description: 'Get stunning results in standard, HD, or Ultra HD resolutions for any use case',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Easy to Use',
    description: 'Upload your image, choose your style, and download your plushie design instantly',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    id: 5,
    title: 'Secure & Private',
    description: 'Your images are processed securely and never stored without your permission',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: 6,
    title: 'Instant Download',
    description: 'Download your created plushie design in PNG, JPG, or WebP formats instantly',
    icon: <Download className="w-8 h-8" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create amazing plushie designs from your photos
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg text-purple-600 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-4 inline-block w-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to create your first plushie?
          </p>
          <a
            href="/auth/signup"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Get Started for Free
          </a>
        </div>
      </div>
    </section>
  );
}
