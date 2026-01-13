// Social media platform configurations
export const platforms = {
  facebook: {
    name: "Facebook",
    apiEndpoint: "https://graph.facebook.com/v18.0",
    maxLength: 63206,
    supportsMedia: true,
  },
  instagram: {
    name: "Instagram",
    apiEndpoint: "https://graph.instagram.com/v18.0",
    maxLength: 2200,
    supportsMedia: true,
  },
  linkedin: {
    name: "LinkedIn",
    apiEndpoint: "https://api.linkedin.com/v2",
    maxLength: 3000,
    supportsMedia: true,
  },
  twitter: {
    name: "Twitter/X",
    apiEndpoint: "https://api.twitter.com/2",
    maxLength: 280,
    supportsMedia: true,
  },
  tiktok: {
    name: "TikTok",
    apiEndpoint: "https://open-api.tiktok.com",
    maxLength: 2200,
    supportsMedia: true,
  },
  google: {
    name: "Google Business",
    apiEndpoint: "https://mybusiness.googleapis.com/v4",
    maxLength: 1500,
    supportsMedia: true,
  },
};

// Helper function to format content for specific platform
export function formatContentForPlatform(
  content: string,
  platform: keyof typeof platforms,
  hashtags?: string
): string {
  const config = platforms[platform];
  let formatted = content;

  // Add hashtags if provided
  if (hashtags) {
    formatted += `\n\n${hashtags}`;
  }

  // Truncate if exceeds platform limit
  if (formatted.length > config.maxLength) {
    formatted = formatted.substring(0, config.maxLength - 3) + "...";
  }

  return formatted;
}

// Helper function to validate post content
export function validatePost(
  content: string,
  platforms: string[]
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!content || content.trim().length === 0) {
    errors.push("Content cannot be empty");
  }

  if (platforms.length === 0) {
    errors.push("At least one platform must be selected");
  }

  platforms.forEach((platform) => {
    if (!(platform in platforms)) {
      errors.push(`Invalid platform: ${platform}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Mock function to post to social media
// In a real implementation, this would integrate with actual APIs
export async function postToSocialMedia(
  content: string,
  platforms: string[],
  media?: File | null
): Promise<{ platform: string; success: boolean; postId?: string }[]> {
  // Simulate API calls
  const results = platforms.map((platform) => ({
    platform,
    success: true,
    postId: `${platform}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  }));

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return results;
}
