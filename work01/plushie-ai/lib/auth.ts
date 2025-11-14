// Authentication utilities for PlushieAI
// This will be expanded with actual authentication logic in Phase 5

export interface User {
  id: string;
  email: string;
  name: string;
  credits: number;
  avatar?: string;
  createdAt: Date;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): {
  isValid: boolean;
  strength: 'weak' | 'fair' | 'good' | 'strong';
} {
  // Password must be at least 8 characters
  if (password.length < 8) {
    return { isValid: false, strength: 'weak' };
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const strength =
    (hasUpperCase ? 1 : 0) +
    (hasLowerCase ? 1 : 0) +
    (hasNumbers ? 1 : 0) +
    (hasSpecialChar ? 1 : 0);

  const strengthMap = {
    1: 'weak' as const,
    2: 'fair' as const,
    3: 'good' as const,
    4: 'strong' as const,
  };

  return {
    isValid: true,
    strength: strengthMap[strength as 1 | 2 | 3 | 4] || 'weak',
  };
}
