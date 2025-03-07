export function formatData(posts, platform) {
  console.log(`Formatting ${posts.length} posts from ${platform}`);
  
  // Transform platform-specific data to common format
  return posts.map(post => {
    return {
      platform: platform,
      id: post.id || generateId(post),
      author: post.author || post.username || post.user,
      timestamp: post.time || post.date || post.created_at,
      textContent: post.content || post.text || post.caption,
      mediaUrls: extractMediaUrls(post, platform),
      engagement: {
        likes: post.likes || 0,
        comments: post.comments || 0,
        shares: post.shares || post.retweets || 0
      },
      raw: post // Keep the original data
    };
  });
}

function generateId(post) {
  // Generate unique ID if none exists
  return `${post.author}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function extractMediaUrls(post, platform) {
  // Extract media URLs based on platform
  switch(platform) {
    case 'facebook':
      return post.image ? [post.image] : [];
    case 'twitter':
      return post.media || [];
    case 'instagram':
      return post.images || [post.image] || [];
    default:
      return [];
  }
} 