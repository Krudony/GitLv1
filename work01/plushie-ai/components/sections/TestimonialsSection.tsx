'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Etsy Shop Owner',
    avatar: '👩‍🦰',
    content:
      'PlushieAI has completely transformed my business! I can now create custom plushie designs for my customers in minutes. The quality is incredible and my sales have doubled!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Content Creator',
    avatar: '👨‍💼',
    content:
      'As someone with no design experience, I was amazed at how easy it is to use. The AI transforms my photos into adorable designs that my followers absolutely love.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Gift Business Owner',
    avatar: '👩‍🎨',
    content:
      'The variety of styles available is fantastic! I love how I can customize designs for different occasions. My customers are thrilled with their personalized plushies.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Freelance Designer',
    avatar: '👨‍🎓',
    content:
      'I was skeptical at first, but PlushieAI exceeded my expectations. It\'s a great tool to augment my design work and help me take on more projects.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'Merchandise Creator',
    avatar: '👩‍💻',
    content:
      'The customer support is amazing! They helped me troubleshoot an issue immediately. This platform has become essential to my business workflow.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < Math.min(3, testimonials.length); i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our users say about PlushieAI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="opacity-animation bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-purple-200 group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 100}ms`,
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full border border-gray-300 hover:border-purple-600 hover:bg-purple-50 transition-all"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-gray-300 hover:border-purple-600 hover:bg-purple-50 transition-all"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Counter */}
        <div className="text-center mt-8 text-gray-600">
          <span className="font-medium">{currentIndex + 1}</span> -{' '}
          <span className="font-medium">
            {Math.min(currentIndex + 3, testimonials.length)}
          </span>{' '}
          of <span className="font-medium">{testimonials.length}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
