'use client';

import { Upload, Settings, Zap, Download } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Upload Your Photo',
    description: 'Choose any photo from your device. Works with JPG, PNG, or WebP formats.',
    icon: <Upload className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Choose Your Style',
    description: 'Select from various plushie styles: Cute, Realistic, Cartoon, Pastel, and more.',
    icon: <Settings className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'AI Magic',
    description: 'Our advanced AI transforms your photo into an adorable plushie design instantly.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Download & Share',
    description: 'Download your creation in high resolution or share it directly with friends.',
    icon: <Download className="w-8 h-8" />,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to transform your photos into amazing plushie designs
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting lines (visible on desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-pink-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step card */}
              <div className="text-center">
                {/* Step number and icon container */}
                <div className="mb-6 flex justify-center">
                  <div className="relative inline-flex items-center justify-center">
                    {/* Background circle */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full"></div>

                    {/* Icon container */}
                    <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg text-purple-600">
                      {step.icon}
                    </div>

                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Vertical line for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute left-10 top-24 w-0.5 h-12 bg-gradient-to-b from-purple-200 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom section with time estimate */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center border border-purple-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            The entire process takes less than 2 minutes. No credit card required to try!
          </p>
          <a
            href="/auth/signup"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Create Your First Plushie
          </a>
        </div>
      </div>
    </section>
  );
}
