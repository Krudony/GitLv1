'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Cute Plushie Style',
    description: 'Transform your photo into an adorable, round plushie design',
    beforeImage: '📷',
    afterImage: '🧸',
  },
  {
    id: 2,
    title: 'Realistic Plushie',
    description: 'Create detailed, realistic plushie versions with fine textures',
    beforeImage: '🖼️',
    afterImage: '🎀',
  },
  {
    id: 3,
    title: 'Fantasy Design',
    description: 'Turn your image into a magical, fantasy-inspired plushie',
    beforeImage: '🌟',
    afterImage: '✨',
  },
];

export function ShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentItem = showcaseItems[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section id="showcase" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See the Magic in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Drag the slider to compare the original with our plushie transformations
          </p>
        </div>

        {/* Showcase Container */}
        <div className="max-w-4xl mx-auto">
          {/* Image Comparison Slider */}
          <div
            className="relative w-full bg-gray-100 rounded-2xl overflow-hidden mb-8 cursor-col-resize group"
            onMouseMove={handleSliderChange}
            onClick={handleSliderChange}
          >
            {/* After Image (Background) */}
            <div className="w-full aspect-square md:aspect-video flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
              <div className="text-center">
                <div className="text-8xl mb-4">{currentItem.afterImage}</div>
                <p className="text-gray-600 font-medium">Plushie Result</p>
              </div>
            </div>

            {/* Before Image (Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 transition-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="text-center">
                <div className="text-8xl mb-4">{currentItem.beforeImage}</div>
                <p className="text-gray-600 font-medium">Original</p>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white transition-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                <ChevronLeft className="w-4 h-4 text-gray-800 absolute right-1.5" />
                <ChevronRight className="w-4 h-4 text-gray-800 absolute left-1.5" />
              </div>
            </div>

            {/* Keyboard hint */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Drag to compare
            </div>
          </div>

          {/* Showcase Title and Description */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">{currentItem.title}</h3>
            <p className="text-lg text-gray-600">{currentItem.description}</p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
              aria-label="Previous showcase"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to showcase ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
              aria-label="Next showcase"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-8 text-gray-600">
            <span className="font-medium">{currentIndex + 1}</span> of{' '}
            <span className="font-medium">{showcaseItems.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
