// Constants and mock data for PlushieAI

export const APP_CONFIG = {
  name: 'PlushieAI',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  mockMode: process.env.NEXT_PUBLIC_MOCK_MODE === 'true',
};

export const GENERATION_STYLES = [
  { id: 'cute', label: 'Cute', icon: '🧸' },
  { id: 'realistic', label: 'Realistic', icon: '✨' },
  { id: 'cartoon', label: 'Cartoon', icon: '🎨' },
  { id: 'pastel', label: 'Pastel', icon: '🌸' },
  { id: 'minimalist', label: 'Minimalist', icon: '📐' },
  { id: 'fantasy', label: 'Fantasy', icon: '🐉' },
];

export const GENERATION_QUALITIES = [
  { id: 'standard', label: 'Standard (256px)', resolution: 256 },
  { id: 'hd', label: 'HD (512px)', resolution: 512 },
  { id: 'ultra', label: 'Ultra HD (1024px)', resolution: 1024 },
];

export const PRICING_PACKAGES = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9,
    credits: 30,
    description: 'Perfect for getting started',
    features: [
      '30 monthly credits',
      'Standard quality generation',
      'Community support',
      'Basic storage',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19,
    credits: 100,
    description: 'Most popular for regular users',
    features: [
      '100 monthly credits',
      'HD quality generation',
      'Priority email support',
      'Extended storage',
      'Batch processing',
    ],
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 29,
    credits: 200,
    description: 'For power users',
    features: [
      '200 monthly credits',
      'Ultra HD generation',
      '24/7 priority support',
      'Unlimited storage',
      'Batch processing',
      'Custom styles',
      'API access',
    ],
  },
];

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    author: 'Sarah Johnson',
    role: 'Toy Designer',
    content:
      'PlushieAI has revolutionized my design process. I can now create plushie prototypes in minutes instead of days!',
    avatar: 'SJ',
    rating: 5,
  },
  {
    id: 2,
    author: 'Mike Chen',
    role: 'Artist',
    content:
      'The quality of the generated designs is incredible. It perfectly captures the essence of my artwork.',
    avatar: 'MC',
    rating: 5,
  },
  {
    id: 3,
    author: 'Emma Davis',
    role: 'Small Business Owner',
    content:
      'Using PlushieAI has helped me expand my product line without hiring additional designers. Highly recommended!',
    avatar: 'ED',
    rating: 5,
  },
];

export const GENERATION_COST = {
  standard: 5,
  hd: 10,
  ultra: 15,
};

export const FEATURES = [
  {
    title: 'AI-Powered Generation',
    description:
      'Advanced AI algorithms transform your images into beautiful plushie designs',
    icon: '🤖',
  },
  {
    title: 'Multiple Styles',
    description:
      'Choose from various artistic styles to match your creative vision',
    icon: '🎨',
  },
  {
    title: 'High Quality Output',
    description:
      'Generate designs in standard, HD, or Ultra HD resolution',
    icon: '✨',
  },
  {
    title: 'Fast Processing',
    description:
      'Get your designs generated in seconds, not hours',
    icon: '⚡',
  },
  {
    title: 'Easy Sharing',
    description:
      'Share your creations with your team or on social media',
    icon: '📤',
  },
  {
    title: 'Affordable Pricing',
    description:
      'Flexible plans to fit any budget, from hobbyists to professionals',
    icon: '💰',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: 'Upload Your Image',
    description: 'Select or drag and drop an image to get started',
  },
  {
    number: 2,
    title: 'Choose Your Style',
    description: 'Select from multiple artistic styles for your plushie design',
  },
  {
    number: 3,
    title: 'Generate Design',
    description: 'Our AI creates your unique plushie design in seconds',
  },
  {
    number: 4,
    title: 'Download & Share',
    description: 'Save your design and share it with others',
  },
];
