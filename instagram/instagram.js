// Facebook Posts
const facebookPosts = [];

// Instagram Posts
const instagramPosts = [
  {
    username: "Sleepy Joe",
    profilePic: "https://s.abcnews.com/images/Politics/biden-stumble-03-ht-jt-210319_1616181267869_hpMain_2_16x9_1600.jpg",
    location: "De white house",
    image: "https://youtu.be/yVEhrIMc-ps",
    likes: 477654,
    caption: "U.S. President Joe Biden tells a story about a magical pistachio that helped him when he was lost in a grocery store.",
    comments: 3321
  },
  {
    username: "MoviesDaily",
    profilePic: "https://cdn-icons-png.flaticon.com/512/11327/11327060.png",
    location: "NorthPole, USA",
    image: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    likes: 2841,
    caption: "Movie of the day: Big Bucket Bunny",
    comments: 156
  },

  {
    username: "Art.daily",
    profilePic: "https://t3.ftcdn.net/jpg/02/28/18/62/360_F_228186227_hTEQS8k4VtopmEVnkBbPvOaSIfXsqWON.jpg",
    location: "Creative Studio",
    image: "https://news.artnet.com/app/news-upload/2025/01/jason-allen-theatre-dopera-spatial-1024x683.jpg",
    likes: 4521,
    caption: "Latest piece finished! 🎨 What do you think? #art #creative #artist",
    comments: 342
  }
];

// Twitter Posts
const tweets = [];

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
      // Prompt user for video link
      const videoLinkPrompt = prompt('Enter a video link (YouTube, Facebook, or Twitter):');
      
      if (!videoLinkPrompt) return;
      
      let platformType = 'other';
      let validLink = false;
      
      if (isYouTubeLink(videoLinkPrompt)) {
        platformType = 'YouTube';
        validLink = true;
      } else if (isFacebookVideoLink(videoLinkPrompt)) {
        platformType = 'Facebook';
        validLink = true;
      } else if (isTwitterVideoLink(videoLinkPrompt)) {
        platformType = 'Twitter';
        validLink = true;
      }
      
      if (validLink) {
        // Create a new Instagram post with the video link
        const newPost = {
          username: "user.generated",
          profilePic: "https://i.pravatar.cc/150?img=1", // Default avatar
          location: `${platformType} Share`,
          image: videoLinkPrompt,
          likes: Math.floor(Math.random() * 1000) + 100, // Random likes
          caption: `Check out this ${platformType} video I found! #${platformType.toLowerCase()} #share`,
          comments: Math.floor(Math.random() * 100) + 10 // Random comments
        };
        
        // Add the new post to the beginning of Instagram posts
        instagramPosts.unshift(newPost);
        
        // Re-render the feed
        document.getElementById('app').innerHTML = generateAppHTML();
        
        // Give the browser a moment to render the DOM before updating sidebar visibility
        setTimeout(() => {
          // Re-attach event listeners
          attachEventListeners();
          
          // Update sidebar visibility
          updateSidebarVisibility();
        }, 100);
        
        // Scroll to the top to show the new post
        window.scrollTo(0, 0);
      } else {
        alert('Please enter a valid video link from YouTube, Facebook, or Twitter');
      }
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