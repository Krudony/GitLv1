// Local Storage utilities for PlushieAI
// This module handles all Local Storage operations for the application

export const STORAGE_KEYS = {
  AUTH_USER: 'auth_user',
  AUTH_TOKEN: 'auth_token',
  GALLERY: 'gallery',
  USER_SETTINGS: 'user_settings',
  BILLING_HISTORY: 'billing_history',
  PREFERENCES: 'preferences',
};

export function getFromStorage<T>(key: string, defaultValue?: T): T | null {
  if (typeof window === 'undefined') return defaultValue || null;

  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue || null;
  } catch (error) {
    console.error(`Error reading from localStorage with key ${key}:`, error);
    return defaultValue || null;
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage with key ${key}:`, error);
  }
}

export function removeFromStorage(key: string): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage with key ${key}:`, error);
  }
}

export function clearStorage(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}
