import './style.css'

// Facebook Posts
const facebookPosts = [
  {
    author: "Jane Smith",
    profilePic: "https://i.pravatar.cc/150?img=1",
    time: "3 hrs ago",
    content: "Just finished a great workout at the gym! 💪 Feeling energized and ready to take on the day. #fitness #motivation",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
    likes: 284,
    comments: 42,
    shares: 12
  },
  {
    author: "John Doe",
    profilePic: "https://i.pravatar.cc/150?img=2",
    time: "5 hrs ago",
    content: "Beautiful sunset at the beach today! 🌅 Nature never fails to amaze me. #sunset #beach #nature",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    likes: 543,
    comments: 89,
    shares: 32
  },
  {
    author: "Sarah Johnson",
    profilePic: "https://i.pravatar.cc/150?img=3",
    time: "8 hrs ago",
    content: "Made this delicious homemade pasta from scratch! 🍝 Recipe in the comments. #cooking #foodie #homemade",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    likes: 892,
    comments: 156,
    shares: 67
  },
  {
    author: "Mike Wilson",
    profilePic: "https://i.pravatar.cc/150?img=4",
    time: "12 hrs ago",
    content: "Another successful day at the office! 💼 Big projects coming soon. Stay tuned! #business #success #work",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    likes: 423,
    comments: 65,
    shares: 21
  }
];

// Instagram Posts
const instagramPosts = [
  {
    username: "travel.adventures",
    profilePic: "https://i.pravatar.cc/150?img=5",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    likes: 2841,
    caption: "Paradise found 🌴✨ Living my best life in Bali! #travel #wanderlust #bali",
    comments: 156
  },
  {
    username: "foodie.delights",
    profilePic: "https://i.pravatar.cc/150?img=6",
    location: "Gourmet Kitchen",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    likes: 5432,
    caption: "Homemade pizza night! 🍕 Nothing beats the classics. #foodporn #homemade #pizza",
    comments: 234
  },
  {
    username: "fitness.goals",
    profilePic: "https://i.pravatar.cc/150?img=7",
    location: "Sunset Gym",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800",
    likes: 3219,
    caption: "No excuses, just results 💪 #fitness #motivation #workout",
    comments: 178
  },
  {
    username: "art.daily",
    profilePic: "https://i.pravatar.cc/150?img=8",
    location: "Creative Studio",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    likes: 4521,
    caption: "Latest piece finished! 🎨 What do you think? #art #creative #artist",
    comments: 342
  }
];

// Twitter Posts
const tweets = [
  {
    username: "TechGuru",
    handle: "@techguru",
    profilePic: "https://i.pravatar.cc/150?img=9",
    time: "2h",
    content: "Just got my hands on the latest AI chip - the processing power is INSANE! 🤖 Thread incoming... (1/4)",
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

document.querySelector('#app').innerHTML = `
  <div class="facebook-top-bar visible">
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
        <img src="images/images.jpeg" alt="Account" class="account-image">
        <span class="tooltip">Account</span>
      </div>
    </div>
  </div>
  
  <div class="facebook-sidebar visible">
    <div class="sidebar-item">
      <img src="images/images.jpeg" alt="Your Profile" class="sidebar-icon profile-icon">
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
  
  <div class="social-container">
    <div class="feed">
      <div class="feed-container">
        ${[
          ...facebookPosts,
          ...instagramPosts,
          ...tweets
        ].map((post, index) => {
          if (index < facebookPosts.length) {
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
                <img src="${post.image}" alt="Post image" class="post-image">
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
                <img src="${post.image}" alt="Instagram post" class="post-image">
                <div class="post-actions instagram-actions">
                  <div class="left-actions">
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
                  <button class="action-button">
                    <i class="far fa-bookmark"></i>
                  </button>
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
                  ${tweet.image ? `<img src="${tweet.image}" alt="Tweet image" class="tweet-image">` : ''}
                </div>
                <div class="tweet-actions">
                  <button class="action-button">
                    <i class="far fa-heart"></i>
                    ${tweet.likes.toLocaleString()}
                  </button>
                  <button class="action-button">
                    <i class="far fa-comment"></i>
                    ${tweet.replies.toLocaleString()}
                  </button>
                  <button class="action-button">
                    <i class="far fa-retweet"></i>
                    ${tweet.retweets.toLocaleString()}
                  </button>
                  <button class="action-button">
                    <i class="far fa-share-square"></i>
                  </button>
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

// Add scroll event listener to handle Facebook topbar visibility
const facebookTopbar = document.querySelector('.facebook-top-bar');
const facebookSidebar = document.querySelector('.facebook-sidebar');

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
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

// Update topbar and sidebar visibility based on visible posts
function updateTopbarVisibility() {
  if (isAnyFacebookPostVisible()) {
    facebookTopbar.classList.add('visible');
    facebookSidebar.classList.add('visible');
  } else {
    facebookTopbar.classList.remove('visible');
    facebookSidebar.classList.remove('visible');
  }
}

// Initial check
document.addEventListener('DOMContentLoaded', function() {
  updateTopbarVisibility();
  
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
    updateTopbarVisibility();
  }, 100);
});