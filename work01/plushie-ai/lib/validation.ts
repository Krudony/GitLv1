/**
 * Form validation utilities for PlushieAI
 */

export const validationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Invalid email format',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
    validate: (value: string) => {
      if (!/[A-Z]/.test(value)) return 'Password must contain an uppercase letter';
      if (!/[a-z]/.test(value)) return 'Password must contain a lowercase letter';
      if (!/[0-9]/.test(value)) return 'Password must contain a number';
      if (!/[!@#$%^&*]/.test(value)) return 'Password must contain a special character';
      return true;
    },
  },
  confirmPassword: {
    required: 'Please confirm your password',
  },
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters',
    },
    maxLength: {
      value: 100,
      message: 'Name must be less than 100 characters',
    },
  },
  fullName: {
    required: 'Full name is required',
    minLength: {
      value: 3,
      message: 'Full name must be at least 3 characters',
    },
    maxLength: {
      value: 150,
      message: 'Full name must be less than 150 characters',
    },
  },
  description: {
    maxLength: {
      value: 500,
      message: 'Description must be less than 500 characters',
    },
  },
  url: {
    pattern: {
      value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      message: 'Invalid URL format',
    },
  },
};

export const getPasswordStrength = (
  password: string
): { strength: 'weak' | 'fair' | 'good' | 'strong'; score: number } => {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;

  const strengthMap = {
    1: 'weak' as const,
    2: 'weak' as const,
    3: 'fair' as const,
    4: 'good' as const,
    5: 'strong' as const,
    6: 'strong' as const,
  };

  return {
    strength: strengthMap[score as keyof typeof strengthMap] || 'weak',
    score,
  };
};

export const validateFileSize = (file: File, maxSizeInMB: number): boolean => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

export const validateFileType = (
  file: File,
  allowedTypes: string[]
): boolean => {
  return allowedTypes.includes(file.type);
};

export const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
