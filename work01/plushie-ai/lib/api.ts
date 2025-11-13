// Mock API functions for PlushieAI
// These will be replaced with real API calls in Phase 2

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Simulate network delay
function delay(ms: number = 500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function mockApiCall<T>(
  callback: () => T,
  delayMs: number = 800
): Promise<ApiResponse<T>> {
  try {
    await delay(delayMs);
    const data = callback();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Example API functions (to be implemented)
export async function loginUser(email: string): Promise<ApiResponse> {
  return mockApiCall(() => {
    // Mock implementation
    return { userId: '1', email, token: 'mock-token' };
  });
}

export async function signupUser(
  email: string,
  name: string
): Promise<ApiResponse> {
  return mockApiCall(() => {
    return { userId: '1', email, name, token: 'mock-token' };
  });
}

export async function generateImage(): Promise<ApiResponse> {
  return mockApiCall(
    () => {
      return {
        imageId: 'img-1',
        url: 'https://via.placeholder.com/512',
        creditsCost: 5,
      };
    },
    1500
  );
}

export async function getGalleryImages(): Promise<ApiResponse> {
  return mockApiCall(() => {
    return { images: [] };
  });
}

export async function getUser(userId: string): Promise<ApiResponse> {
  return mockApiCall(() => {
    return {
      id: userId,
      email: 'user@example.com',
      name: 'User Name',
      credits: 100,
    };
  });
}

export async function updateUserSettings(): Promise<ApiResponse> {
  return mockApiCall(() => {
    return { success: true };
  });
}

export async function getAllPackages(): Promise<ApiResponse> {
  return mockApiCall(() => {
    return {
      packages: [
        { id: 'basic', name: 'Basic', price: 9, credits: 30 },
        { id: 'pro', name: 'Pro', price: 19, credits: 100 },
        { id: 'elite', name: 'Elite', price: 29, credits: 200 },
      ],
    };
  });
}

export async function purchasePackage(): Promise<ApiResponse> {
  return mockApiCall(() => {
    return { success: true, newCredits: 100 };
  });
}
