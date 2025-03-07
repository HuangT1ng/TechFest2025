// Facebook Posts
const facebookPosts = [];

// Instagram Posts
const instagramPosts = [];

// Twitter Posts
const tweets = [
  {
    username: "TechGuru",
    handle: "@techguru",
    profilePic: "https://img.freepik.com/free-vector/flat-design-creative-nerd-logo-template_23-2149192867.jpg",
    time: "2h",
    content: "Just got my hands on the latest AI chip AMD's Blackwell B200 - the processing power is INSANE! 🤖 Thread incoming... (1/4)",
    image:"https://media.licdn.com/dms/image/v2/D4E12AQGdbWXucNsEoQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710839851926?e=1746662400&v=beta&t=Za4SXlZnaEBv1ecdSVvsLJob9_GOQhs_6rJQf8G74a4",
    likes: 1523,
    retweets: 421,
    replies: 89
  },
  {
    username: "Nature Lover",
    handle: "@natureenthusiast",
    profilePic: "https://i.pravatar.cc/150?img=10",
    time: "5h",
    content: "Spotted a rare bird species today! Conservation efforts are really paying off in our local park 🦜 #WildlifePhotography",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800",
    likes: 892,
    retweets: 267,
    replies: 43
  },
  {
    username: "Startup Chronicles",
    handle: "@startupchronicles",
    profilePic: "https://i.pravatar.cc/150?img=11",
    time: "1d",
    content: "🚀 Big news! We just closed our Series A funding round. Thanks to everyone who believed in our vision from day one. The future is bright! #StartupLife #Tech",
    likes: 2341,
    retweets: 892,
    replies: 156
  },
  {
    username: "Coffee Lover",
    handle: "@coffeetime",
    profilePic: "https://i.pravatar.cc/150?img=12",
    time: "3h",
    content: "Morning ritual: freshly ground beans, pour-over setup, and the perfect cup of coffee ☕️ What's your coffee routine? #CoffeeLife",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    likes: 743,
    retweets: 156,
    replies: 92
  }
];

// Function to generate the app HTML
function generateAppHTML() {
  return `
  <div class="facebook-top-bar">
    <div class="logo-section">
      <i class="fab fa-facebook fb-logo"></i>
      <div class="facebook-search-bar">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-input" placeholder="Search Facebook">
      </div>
    </div>
    
    <div class="nav-icons">
      <i class="fas fa-home nav-icon active">
        <span class="tooltip">Home</span>
      </i>
      <i class="fas fa-user-friends nav-icon">
        <span class="tooltip">Friends</span>
      </i>
      <i class="fas fa-video nav-icon">
        <span class="tooltip">Video</span>
      </i>
      <i class="fas fa-users nav-icon">
        <span class="tooltip">Groups</span>
      </i>
      <i class="fas fa-gamepad nav-icon">
        <span class="tooltip">Gaming</span>
      </i>
    </div>
    
    <div class="right-section">
      <div class="topbar-icon-container">
        <i class="fas fa-th topbar-icon"></i>
        <span class="tooltip">Menu</span>
      </div>
      <div class="topbar-icon-container">
        <i class="fab fa-facebook-messenger topbar-icon"></i>
        <span class="tooltip">Messenger</span>
      </div>
      <div class="topbar-icon-container">
        <i class="fas fa-bell topbar-icon"></i>
        <span class="tooltip">Notifications</span>
      </div>
      <div class="topbar-icon-container account-container">
        <img src="/images/images.jpeg" alt="Account" class="account-image">
        <span class="tooltip">Account</span>
      </div>
    </div>
  </div>
  
  <div class="facebook-sidebar">
    <div class="sidebar-item">
      <img src="/images/images.jpeg" alt="Your Profile" class="sidebar-icon profile-icon">
      <span class="sidebar-text">Huang Ting</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-user-friends sidebar-icon"></i>
      <span class="sidebar-text">Friends</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-users sidebar-icon"></i>
      <span class="sidebar-text">Groups</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-store sidebar-icon"></i>
      <span class="sidebar-text">Marketplace</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-tv sidebar-icon"></i>
      <span class="sidebar-text">Watch</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-history sidebar-icon"></i>
      <span class="sidebar-text">Memories</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-bookmark sidebar-icon"></i>
      <span class="sidebar-text">Saved</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-flag sidebar-icon"></i>
      <span class="sidebar-text">Pages</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-calendar-alt sidebar-icon"></i>
      <span class="sidebar-text">Events</span>
    </div>
    <div class="sidebar-item">
      <div class="see-more-icon">
        <i class="fas fa-chevron-down sidebar-icon"></i>
      </div>
      <span class="sidebar-text">See More</span>
    </div>
    <div class="sidebar-divider"></div>
    <h3 class="sidebar-heading">Your Shortcuts</h3>
    <div class="sidebar-item">
      <i class="fas fa-gamepad sidebar-icon"></i>
      <span class="sidebar-text">Games</span>
    </div>
    <div class="sidebar-item">
      <i class="fas fa-comment-alt sidebar-icon"></i>
      <span class="sidebar-text">Group Chat</span>
    </div>
  </div>
  
  <div class="instagram-sidebar">
    <div class="sidebar-item instagram-item">
      <h2 class="instagram-title">Instagram</h2>
    </div>
    <div class="sidebar-item instagram-item">
      <i class="fas fa-home sidebar-icon instagram-sidebar-icon"></i>
      <span class="sidebar-text">Home</span>
    </div>
    <div class="sidebar-item instagram-item">
      <i class="fas fa-search sidebar-icon instagram-sidebar-icon"></i>
      <span class="sidebar-text">Search</span>
    </div>
    <div class="sidebar-item instagram-item">
      <i class="far fa-compass sidebar-icon instagram-sidebar-icon"></i>
      <span class="sidebar-text">Explore</span>
    </div>
    <div class="sidebar-item instagram-item">
      <i class="fas fa-film sidebar-icon instagram-sidebar-icon"></i>
      <span class="sidebar-text">Reels</span>
    </div>
    <div class="sidebar-item instagram-item">
      <i class="far fa-paper-plane sidebar-icon instagram-sidebar-icon"></i>
      <span class="sidebar-text">Messages</span>
    </div>
    <div class="sidebar-item instagram-item">
      <i class="far fa-heart sidebar-icon instagram-sidebar-icon"></i>
      <span class="sidebar-text">Notifications</span>
    </div>
    <div class="sidebar-item instagram-item">
      <i class="far fa-plus-square sidebar-icon instagram-sidebar-icon"></i>
      <span class="sidebar-text">Create</span>
    </div>
    <div class="sidebar-item instagram-item">
      <img src="/images/images.jpeg" alt="Your Profile" class="sidebar-icon profile-icon">
      <span class="sidebar-text">Profile</span>
    </div>
    <div class="sidebar-divider"></div>
    <div class="instagram-suggestions">
      <h3 class="sidebar-heading">Suggested for you</h3>
      ${instagramPosts.map(post => `
        <div class="suggestion-item">
          <img src="${post.profilePic}" alt="${post.username}" class="suggestion-pic">
          <div class="suggestion-info">
            <p class="suggestion-username">${post.username}</p>
            <p class="suggestion-meta">Popular account</p>
          </div>
          <button class="follow-btn">Follow</button>
        </div>
      `).join('')}
    </div>
  </div>
  
  <div class="twitter-sidebar">
    <div class="sidebar-item twitter-item">
      <div class="twitter-logo-wrapper">
        <span class="x-logo">𝕏</span>
      </div>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="fas fa-home sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Home</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="fas fa-robot sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Grok</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="fas fa-star sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Premium</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="fas fa-hashtag sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Explore</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="far fa-bell sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Notifications</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="far fa-envelope sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Messages</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="far fa-bookmark sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Bookmarks</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="far fa-list-alt sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Lists</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="far fa-user sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">Profile</span>
    </div>
    <div class="sidebar-item twitter-item">
      <i class="fas fa-ellipsis-h sidebar-icon twitter-sidebar-icon"></i>
      <span class="sidebar-text">More</span>
    </div>
    <div class="sidebar-divider"></div>
    <div class="twitter-trends">
      <h3 class="sidebar-heading">What's happening</h3>
      <div class="trend-item">
        <div class="trend-category">Trending in Technology</div>
        <div class="trend-title">#AI</div>
        <div class="trend-tweets">52.4K Tweets</div>
      </div>
      <div class="trend-item">
        <div class="trend-category">Sports · Trending</div>
        <div class="trend-title">World Cup</div>
        <div class="trend-tweets">124K Tweets</div>
      </div>
      <div class="trend-item">
        <div class="trend-category">Entertainment · Trending</div>
        <div class="trend-title">New Movie Release</div>
        <div class="trend-tweets">45.2K Tweets</div>
      </div>
    </div>
  </div>
  
  <div class="social-container">
    <div class="feed">
      <div class="feed-container">
        ${[
          ...facebookPosts,
          ...instagramPosts,
          ...tweets
        ].map((post, index) => {
          if (index < facebookPosts.length) {
            const isRegularVideo = post.image && (post.image.includes('.mp4') || post.image.includes('.webm'));
            const isYouTubeVideo = post.image && isYouTubeLink(post.image);
            const isFacebookVideo = post.image && isFacebookVideoLink(post.image);
            const isTwitterVideo = post.image && isTwitterVideoLink(post.image);
            
            return `
              <div class="post facebook-post" data-platform="facebook">
                <div class="post-header">
                  <img src="${post.profilePic}" alt="${post.author}" class="profile-pic">
                  <div class="post-info">
                    <p class="post-author">${post.author}</p>
                    <p class="post-time">${post.time} 🌐</p>
                  </div>
                </div>
                <div class="post-content">
                  <p>${post.content}</p>
                </div>
                ${isYouTubeVideo ? `
                  <div class="youtube-container">
                    <iframe 
                      class="post-image youtube-embed" 
                      src="https://www.youtube.com/embed/${extractYouTubeVideoId(post.image)}" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                    </iframe>
                  </div>
                ` : isFacebookVideo ? `
                  <div class="facebook-embed-container">
                    <iframe 
                      src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(extractFacebookVideoEmbed(post.image))}&show_text=false" 
                      class="facebook-video-embed"
                      scrolling="no" 
                      frameborder="0" 
                      allowfullscreen="true" 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    </iframe>
                  </div>
                ` : isTwitterVideo ? `
                  <div class="twitter-embed-container">
                    <blockquote class="twitter-tweet">
                      <a href="${post.image}"></a>
                    </blockquote>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </div>
                ` : isRegularVideo ? `
                  <video class="post-image video-post" controls playsinline>
                    <source src="${post.image}" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                ` : post.image ? `
                  <img src="${post.image}" alt="Post image" class="post-image">
                ` : ''}
                <div class="post-actions facebook-actions">
                  <button class="action-button">
                    <i class="far fa-thumbs-up"></i>
                    Like
                  </button>
                  <button class="action-button">
                    <i class="far fa-comment"></i>
                    Comment
                  </button>
                  <button class="action-button">
                    <i class="far fa-share-square"></i>
                    Share
                  </button>
                </div>
              </div>
            `;
          } else if (index < facebookPosts.length + instagramPosts.length) {
            const instagramIndex = index - facebookPosts.length;
            const post = instagramPosts[instagramIndex];
            const isRegularVideo = post.image.includes('.mp4') || post.image.includes('.webm');
            const isYouTubeVideo = isYouTubeLink(post.image);
            
            return `
              <div class="post instagram-post" data-platform="instagram">
                <div class="post-header">
                  <img src="${post.profilePic}" alt="${post.username}" class="profile-pic">
                  <div class="post-info">
                    <p class="post-author">${post.username}</p>
                    <p class="post-location">${post.location}</p>
                  </div>
                  <i class="fas fa-ellipsis-h more-options"></i>
                </div>
                ${isYouTubeVideo ? `
                  <div class="youtube-container">
                    <iframe 
                      class="post-image youtube-embed" 
                      src="https://www.youtube.com/embed/${extractYouTubeVideoId(post.image)}" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                    </iframe>
                  </div>
                ` : isRegularVideo ? `
                  <video class="post-image video-post" controls playsinline>
                    <source src="${post.image}" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                ` : `
                  <img src="${post.image}" alt="Instagram post" class="post-image">
                `}
                <div class="post-actions instagram-actions">
                  <div class="instagram-action-left">
                    <button class="action-button">
                      <i class="far fa-heart"></i>
                    </button>
                    <button class="action-button">
                      <i class="far fa-comment"></i>
                    </button>
                    <button class="action-button">
                      <i class="far fa-paper-plane"></i>
                    </button>
                  </div>
                  <div class="instagram-action-right">
                    <button class="action-button">
                      <i class="far fa-bookmark"></i>
                    </button>
                  </div>
                </div>
                <div class="post-likes">${post.likes.toLocaleString()} likes</div>
                <div class="post-caption">
                  <span class="username">${post.username}</span> ${post.caption}
                </div>
                <div class="post-comments">View all ${post.comments} comments</div>
              </div>
            `;
          } else {
            const tweetIndex = index - (facebookPosts.length + instagramPosts.length);
            const tweet = tweets[tweetIndex];
            const isRegularVideo = tweet.image && (tweet.image.includes('.mp4') || tweet.image.includes('.webm'));
            const isYouTubeVideo = tweet.image && isYouTubeLink(tweet.image);
            const isFacebookVideo = tweet.image && isFacebookVideoLink(tweet.image);
            const isTwitterVideo = tweet.image && isTwitterVideoLink(tweet.image);
            
            return `
              <div class="post tweet" data-platform="twitter">
                <div class="post-header">
                  <img src="${tweet.profilePic}" alt="${tweet.username}" class="profile-pic">
                  <div class="post-info">
                    <div class="tweet-author-info">
                      <span class="tweet-author">${tweet.username}</span>
                      <span class="tweet-handle">${tweet.handle}</span>
                      <span class="tweet-time">· ${tweet.time}</span>
                    </div>
                  </div>
                </div>
                <div class="tweet-content">
                  <p>${tweet.content}</p>
                  ${isYouTubeVideo ? `
                    <div class="youtube-container">
                      <iframe 
                        class="post-image youtube-embed" 
                        src="https://www.youtube.com/embed/${extractYouTubeVideoId(tweet.image)}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                      </iframe>
                    </div>
                  ` : isFacebookVideo ? `
                    <div class="facebook-embed-container">
                      <iframe 
                        src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(extractFacebookVideoEmbed(tweet.image))}&show_text=false" 
                        class="facebook-video-embed"
                        scrolling="no" 
                        frameborder="0" 
                        allowfullscreen="true" 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                      </iframe>
                    </div>
                  ` : isTwitterVideo ? `
                    <div class="twitter-embed-container">
                      <blockquote class="twitter-tweet">
                        <a href="${tweet.image}"></a>
                      </blockquote>
                      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                  ` : isRegularVideo ? `
                    <video class="post-image video-post" controls playsinline>
                      <source src="${tweet.image}" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                  ` : tweet.image ? `
                    <img src="${tweet.image}" alt="Tweet image" class="tweet-image">
                  ` : ''}
                </div>
                <div class="tweet-actions">
                  <div class="tweet-action-container">
                    <button class="action-button">
                      <i class="far fa-heart"></i>
                      <span>${tweet.likes.toLocaleString()}</span>
                    </button>
                    <button class="action-button">
                      <i class="far fa-comment"></i>
                      <span>${tweet.replies.toLocaleString()}</span>
                    </button>
                    <button class="action-button">
                      <i class="far fa-retweet"></i>
                      <span>${tweet.retweets.toLocaleString()}</span>
                    </button>
                    <button class="action-button">
                      <i class="far fa-share-square"></i>
                    </button>
                  </div>
                </div>
              </div>
            `;
          }
        }).join('')}
      </div>
    </div>
  </div>
  <button class="ai-button">AI</button>
`;
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  // Render the app
  document.getElementById('app').innerHTML = generateAppHTML();
  
  // Give the browser a moment to render the DOM before updating sidebar visibility
  setTimeout(() => {
    // Initial sidebar visibility update
    updateSidebarVisibility();
  }, 100);
  
  // Attach all event listeners
  attachEventListeners();
});

// Function to attach all event listeners
function attachEventListeners() {
  // Re-attach scroll event listener
  window.addEventListener('scroll', () => {
    updateSidebarVisibility();
  });
  
  // Re-attach AI button event listener
  const aiButton = document.querySelector('.ai-button');
  if (aiButton) {
    aiButton.addEventListener('click', () => {
      toggleHighlighting();
    });
  }
}

// Update sidebar visibility based on visible posts
function updateSidebarVisibility() {
  // Get references to the elements each time the function is called
  const facebookTopbar = document.querySelector('.facebook-top-bar');
  const facebookSidebar = document.querySelector('.facebook-sidebar');
  const instagramSidebar = document.querySelector('.instagram-sidebar');
  const twitterSidebar = document.querySelector('.twitter-sidebar');
  
  // Only proceed if all elements exist
  if (!facebookTopbar || !facebookSidebar || !instagramSidebar || !twitterSidebar) {
    return;
  }
  
  // Only show Facebook elements when Facebook posts are visible
  if (isAnyFacebookPostVisible()) {
    facebookTopbar.classList.add('visible');
    facebookSidebar.classList.add('visible');
    instagramSidebar.classList.remove('visible');
    twitterSidebar.classList.remove('visible');
  } else if (isAnyInstagramPostVisible()) {
    facebookTopbar.classList.remove('visible');
    facebookSidebar.classList.remove('visible');
    instagramSidebar.classList.add('visible');
    twitterSidebar.classList.remove('visible');
  } else if (isAnyTwitterPostVisible()) {
    facebookTopbar.classList.remove('visible');
    facebookSidebar.classList.remove('visible');
    instagramSidebar.classList.remove('visible');
    twitterSidebar.classList.add('visible');
  } else {
    // When no specific posts are visible, hide all sidebars
    facebookTopbar.classList.remove('visible');
    facebookSidebar.classList.remove('visible');
    instagramSidebar.classList.remove('visible');
    twitterSidebar.classList.remove('visible');
  }
}

// Initial check
document.addEventListener('DOMContentLoaded', function() {
  updateSidebarVisibility();
  
  // Add event listeners for account tooltip
  const accountContainer = document.querySelector('.account-container');
  const accountTooltip = accountContainer.querySelector('.tooltip');
  
  accountContainer.addEventListener('mouseenter', function() {
    accountTooltip.style.opacity = '1';
    accountTooltip.style.visibility = 'visible';
  });
  
  accountContainer.addEventListener('mouseleave', function() {
    accountTooltip.style.opacity = '0';
    accountTooltip.style.visibility = 'hidden';
  });
});

// Check on scroll
let scrollTimeout;
window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);
  
  // Use a timeout to avoid performance issues from too many calculations
  scrollTimeout = setTimeout(function() {
    updateSidebarVisibility();
  }, 100);
});

// Function to check if a URL is a YouTube link
function isYouTubeLink(url) {
  return url.includes('youtube.com/') || url.includes('youtu.be/');
}

// Function to check if a URL is a Facebook video link
function isFacebookVideoLink(url) {
  return url.includes('facebook.com/') && 
         (url.includes('/videos/') || url.includes('/watch/') || url.includes('/watch?v='));
}

// Function to check if a URL is a Twitter video link
function isTwitterVideoLink(url) {
  return (url.includes('twitter.com/') || url.includes('x.com/')) && url.includes('/status/');
}

// Function to extract YouTube video ID from various YouTube URL formats
function extractYouTubeVideoId(url) {
  let videoId = '';
  
  // Handle youtu.be format
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1];
    // Remove any query parameters
    const queryParamIndex = videoId.indexOf('?');
    if (queryParamIndex !== -1) {
      videoId = videoId.substring(0, queryParamIndex);
    }
    return videoId;
  }
  
  // Handle youtube.com format
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    return urlParams.get('v');
  }
  
  // Handle youtube.com/embed format
  if (url.includes('youtube.com/embed/')) {
    videoId = url.split('youtube.com/embed/')[1];
    // Remove any query parameters
    const queryParamIndex = videoId.indexOf('?');
    if (queryParamIndex !== -1) {
      videoId = videoId.substring(0, queryParamIndex);
    }
    return videoId;
  }
  
  return videoId;
}

// Function to extract Facebook video ID or URL for embedding
function extractFacebookVideoEmbed(url) {
  // Facebook embed URLs need the full URL, sometimes with modifications
  // Strip any tracking parameters for cleaner URLs
  let cleanUrl = url.split('?')[0];
  
  // Ensure the URL ends with no trailing slash for consistency
  if (cleanUrl.endsWith('/')) {
    cleanUrl = cleanUrl.slice(0, -1);
  }
  
  return cleanUrl;
}

// Function to extract Twitter tweet ID for embedding
function extractTwitterTweetId(url) {
  // Twitter/X embed URLs need the status ID
  const regex = /(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/;
  const match = url.match(regex);
  
  if (match && match[1]) {
    return match[1];
  }
  
  return '';
}

// Function to determine if any Facebook posts are visible
function isAnyFacebookPostVisible() {
  const facebookPosts = document.querySelectorAll('.post[data-platform="facebook"]');
  for (const post of facebookPosts) {
    if (isElementInViewport(post)) {
      return true;
    }
  }
  return false;
}

// Function to determine if any Instagram posts are visible
function isAnyInstagramPostVisible() {
  const instagramPosts = document.querySelectorAll('.post[data-platform="instagram"]');
  for (const post of instagramPosts) {
    if (isElementInViewport(post)) {
      return true;
    }
  }
  return false;
}

// Function to determine if any Twitter posts are visible
function isAnyTwitterPostVisible() {
  const twitterPosts = document.querySelectorAll('.post[data-platform="twitter"]');
  for (const post of twitterPosts) {
    if (isElementInViewport(post)) {
      return true;
    }
  }
  return false;
}

// Function to check if any part of an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  
  // Check if any part of the element is visible in the viewport
  return (
    // Not completely above or below the viewport
    !(rect.bottom < 0 || rect.top > windowHeight) &&
    // Not completely to the left or right of the viewport
    !(rect.right < 0 || rect.left > windowWidth)
  );
}

let isHighlightingEnabled = false;

async function toggleHighlighting() {
  try {
    isHighlightingEnabled = !isHighlightingEnabled;
    
    // Update AI button state
    const aiButton = document.querySelector('.ai-button');
    if (aiButton) {
      aiButton.classList.toggle('active', isHighlightingEnabled);
    }
    
    if (!isHighlightingEnabled) {
      // Remove all highlights but preserve content
      document.querySelectorAll('.highlighted-content, .highlighted-image').forEach(el => {
        if (el.classList.contains('highlighted-content')) {
          const parent = el.parentNode;
          parent.replaceChild(document.createTextNode(el.textContent), el);
        } else {
          // Just remove the highlight class and event listener for images
          el.classList.remove('highlighted-image');
          if (el.clickHandler) {
            el.removeEventListener('click', el.clickHandler);
            delete el.clickHandler;
          }
        }
      });
      return;
    }

    // Use the full path to ensure we hit the API endpoint
    const response = await fetch('/api/analysis');
    if (!response.ok) {
      throw new Error(`Analysis not available: ${response.statusText}`);
    }
    
    const analysisResults = await response.json();
    console.log('Analysis results received:', analysisResults);
    
    if (!Array.isArray(analysisResults) || analysisResults.length === 0) {
      throw new Error('No analysis results available');
    }

    // Apply highlighting using these results
    applyHighlights(analysisResults);
  } catch (error) {
    console.error('Failed to get analysis:', error);
    isHighlightingEnabled = false;
    const aiButton = document.querySelector('.ai-button');
    if (aiButton) {
      aiButton.classList.remove('active');
    }
    alert('Failed to load analysis results. Please try again later.');
  }
}

function applyHighlights(results) {
  // Remove existing highlights but preserve content
  document.querySelectorAll('.highlighted-content, .highlighted-image').forEach(el => {
    if (el.classList.contains('highlighted-content')) {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
    } else {
      el.classList.remove('highlighted-image');
      if (el.clickHandler) {
        el.removeEventListener('click', el.clickHandler);
        delete el.clickHandler;
      }
    }
  });

  // Create popup if it doesn't exist
  let popup = document.querySelector('.analysis-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.className = 'analysis-popup';
    document.body.appendChild(popup);
  }

  // Process Twitter posts
  const twitterPosts = document.querySelectorAll('.tweet');
  
  results.forEach(result => {
    if (!result.text_analysis?.false_content && !result.image_analysis?.image) return;

    twitterPosts.forEach(post => {
      const content = post.querySelector('.tweet-content');
      if (!content) return;

      const contentText = content.textContent.trim();
      
      // Handle text content
      if (result.text_analysis && 
          result.text_analysis.classification.toLowerCase() === 'false' && 
          contentText.includes(result.text_analysis.false_content)) {
        const falseContent = result.text_analysis.false_content;
        // Preserve any existing HTML structure including the paragraph
        const contentP = content.querySelector('p');
        if (contentP) {
          const contentHtml = contentP.innerHTML;
          const highlightedHtml = contentHtml.replace(
            falseContent,
            `<span class="highlighted-content" data-classification="${result.text_analysis.classification}">${falseContent}</span>`
          );
          contentP.innerHTML = highlightedHtml;

          // Add click handler for highlighted text
          const highlightedElement = contentP.querySelector('.highlighted-content');
          if (highlightedElement) {
            const showTextPopup = () => {
              popup.innerHTML = `
                <div class="popup-header">
                  <div class="header-content">
                    <i class="fas fa-info-circle"></i>
                    <h3>Text Classification Result</h3>
                  </div>
                </div>
                <div class="popup-content">
                  <div class="main-result">
                    <h2>${result.text_analysis.classification}</h2>
                    <span class="confidence-badge">95% Confidence</span>
                  </div>
                  <div class="explanation-section">
                    <div class="section-header">
                      <i class="fas fa-book"></i>
                      <h4>Explanation</h4>
                    </div>
                    <p>${result.text_analysis.explanation}</p>
                  </div>
                  ${result.text_analysis['cross_validation sources'] ? `
                    <div class="sources-section">
                      <div class="section-header">
                        <i class="fas fa-link"></i>
                        <h4>Sources</h4>
                      </div>
                      <div class="source-links">
                        ${result.text_analysis['cross_validation sources'].map(source => `
                          <a href="${source}" class="source-button" target="_blank" rel="noopener noreferrer">${source}</a>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}
                </div>
                <div class="popup-footer">
                  <button class="close-button">Close</button>
                </div>
              `;
              
              popup.classList.add('active');
              
              const closeButton = popup.querySelector('.close-button');
              closeButton.addEventListener('click', () => {
                popup.classList.remove('active');
              });

              const handleEscape = (e) => {
                if (e.key === 'Escape') {
                  popup.classList.remove('active');
                  document.removeEventListener('keydown', handleEscape);
                }
              };
              document.addEventListener('keydown', handleEscape);
            };

            highlightedElement.clickHandler = showTextPopup;
            highlightedElement.addEventListener('click', showTextPopup);
          }
        }
      }

      // Handle images and videos
      if (result.image_analysis && result.image_analysis.classification.toLowerCase() === 'false') {
        const mediaElements = post.querySelectorAll('.tweet-image, .youtube-container iframe, video.post-image, img[src]');
        mediaElements.forEach(media => {
          let mediaUrl = media.src;
          if (media.tagName.toLowerCase() === 'iframe') {
            mediaUrl = media.src.includes('youtube.com/embed/') ? 
              'https://youtu.be/' + media.src.split('/').pop() :
              media.src;
          }
          
          if (mediaUrl === result.image_analysis.image) {
            const elementToHighlight = media.tagName.toLowerCase() === 'iframe' ? 
              media.closest('.youtube-container') : 
              media;
            
            elementToHighlight.classList.add('highlighted-image');
            
            const showImagePopup = () => {
              popup.innerHTML = `
                <div class="popup-header">
                  <div class="header-content">
                    <i class="fas fa-info-circle"></i>
                    <h3>Media Classification Result</h3>
                  </div>
                </div>
                <div class="popup-content">
                  <div class="main-result">
                    <h2>${result.image_analysis.classification}</h2>
                    <span class="confidence-badge">95% Confidence</span>
                  </div>
                  <div class="explanation-section">
                    <div class="section-header">
                      <i class="fas fa-book"></i>
                      <h4>Explanation</h4>
                    </div>
                    <p>${result.image_analysis.explanation}</p>
                  </div>
                  ${result.image_analysis['cross_validation sources'] ? `
                    <div class="sources-section">
                      <div class="section-header">
                        <i class="fas fa-link"></i>
                        <h4>Sources</h4>
                      </div>
                      <div class="source-links">
                        ${result.image_analysis['cross_validation sources'].map(source => `
                          <a href="${source}" class="source-button" target="_blank" rel="noopener noreferrer">${source}</a>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}
                </div>
                <div class="popup-footer">
                  <button class="close-button">Close</button>
                </div>
              `;
              
              popup.classList.add('active');
              
              const closeButton = popup.querySelector('.close-button');
              closeButton.addEventListener('click', () => {
                popup.classList.remove('active');
              });

              const handleEscape = (e) => {
                if (e.key === 'Escape') {
                  popup.classList.remove('active');
                  document.removeEventListener('keydown', handleEscape);
                }
              };
              document.addEventListener('keydown', handleEscape);
            };

            elementToHighlight.clickHandler = showImagePopup;
            elementToHighlight.addEventListener('click', showImagePopup);
          }
        });
      }
    });
  });
}