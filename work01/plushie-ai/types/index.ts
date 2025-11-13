// Type definitions for PlushieAI

export interface User {
  id: string;
  email: string;
  name: string;
  password?: string;
  avatar?: string;
  credits: number;
  totalGenerations: number;
  createdAt: Date;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  theme?: 'light' | 'dark';
  language?: string;
  timezone?: string;
  notifications?: boolean;
}

export interface GeneratedImage {
  id: string;
  userId: string;
  originalImageUrl: string;
  generatedImageUrl: string;
  style: string;
  quality: string;
  title?: string;
  tags?: string[];
  createdAt: Date;
  creditsCost: number;
  isFavorite?: boolean;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  credits: number;
  description?: string;
  features?: string[];
  popular?: boolean;
}

export interface BillingHistory {
  id: string;
  userId: string;
  packageId: string;
  amount: number;
  creditsReceived: number;
  paymentMethod: string;
  createdAt: Date;
  invoiceId?: string;
}

export interface GenerationSettings {
  style: string;
  quality: string;
  tags?: string[];
  description?: string;
  customOptions?: Record<string, any>;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}
