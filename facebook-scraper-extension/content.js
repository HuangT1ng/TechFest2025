// Create and inject floating button
function createFloatingButton() {
  const buttonContainer = document.createElement('div');
  buttonContainer.innerHTML = `
    <div id="fb-scraper-button" style="
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 9999;
      background-color: transparent;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    ">
      <img src="${chrome.runtime.getURL('images/icon128.png')}" style="
        width: 60px; 
        height: 60px;
        filter: drop-shadow(0 2px 5px rgba(0,0,0,0.2));
      ">
      <div class="loading-spinner" style="
        position: absolute;
        width: 60px;
        height: 60px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #1877f2;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        display: none;
      "></div>
    </div>
  `;
  
  // Add loading spinner animation style
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(buttonContainer);
  
  // Add hover effect
  const button = document.getElementById('fb-scraper-button');
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
  
  // Add click handler
  button.addEventListener('click', () => {
    if (!isHighlighted) {
      // Show loading animation only when we're going to highlight
      const spinner = button.querySelector('.loading-spinner');
      const img = button.querySelector('img');
      
      // Show spinner and hide icon
      spinner.style.display = 'block';
      img.style.opacity = '0.2';
      
      // Wait 5 seconds before proceeding
      setTimeout(() => {
        // Hide spinner and restore icon
        spinner.style.display = 'none';
        img.style.opacity = '1';
        
        // Proceed with highlighting
        highlightFalseContent();
      }, 5000);
    } else {
      // If already highlighted, remove highlights immediately
      highlightFalseContent();
    }
  });
}

// Add a flag to track highlighting state
let isHighlighted = false;

// Function to highlight false content
function highlightFalseContent() {
  try {
    if (isHighlighted) {
      // Remove highlights by restoring original text
      document.querySelectorAll('span[data-original-text]').forEach(span => {
        const text = document.createTextNode(span.getAttribute('data-original-text'));
        span.parentNode.replaceChild(text, span);
      });
      
      // Remove red frames from images
      document.querySelectorAll('img[data-analysis]').forEach(img => {
        img.style.cssText = '';
        img.removeAttribute('data-analysis');
      });
      
      isHighlighted = false;
      return;
    }

    // Create popup if it doesn't exist
    let popup = document.querySelector('.analysis-popup');
    if (!popup) {
      popup = document.createElement('div');
      popup.className = 'analysis-popup';
      document.body.appendChild(popup);

      // Add necessary styles
      const style = document.createElement('style');
      style.textContent = `
        .analysis-popup {
          position: fixed;
          top: 0;
          right: 0;
          width: 380px;
          height: 100vh;
          background: #ffffff;
          box-shadow: -4px 0 30px rgba(0, 0, 0, 0.1);
          z-index: 1100;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(100%);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-size: 1.26em;
        }
        .analysis-popup.active {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
        .popup-header {
          padding: 21px 25px;
          border-bottom: 1px solid #e5e5e5;
        }
        .header-content {
          display: flex;
          align-items: center;
          gap: 15px;
          justify-content: center;
        }
        .header-content h3 {
          font-size: 1.26em;
        }
        .popup-content {
          padding: 25px;
          overflow-y: auto;
          flex-grow: 1;
        }
        .main-result {
          margin-bottom: 29px;
          text-align: center;
        }
        .main-result h2 {
          font-size: 1.68em;
          margin-bottom: 15px;
        }
        .confidence-badge {
          display: inline-block;
          padding: 6px 15px;
          background: #e8f0fe;
          color: #1967d2;
          border-radius: 17px;
          font-size: 0.945em;
        }
        .section-header {
          margin-bottom: 15px;
        }
        .section-header h4 {
          font-size: 1.05em;
        }
        .source-links {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .source-button {
          display: block;
          padding: 11px 15px;
          background-color: #f0f2f5;
          border-radius: 6px;
          color: #1877f2;
          text-decoration: none;
          transition: background-color 0.2s;
          font-size: 0.945em;
          line-height: 1.4;
        }
        .popup-footer {
          padding: 17px 25px;
          border-top: 1px solid #e5e5e5;
          text-align: right;
        }
        .close-button {
          padding: 11px 29px;
          background: #1a73e8;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.945em;
        }
      `;
      document.head.appendChild(style);
    }

    const falseContentPatterns = [
      {
        pattern: "https://scontent.fsin16-1.fna.fbcdn.net/v/t39.30808-6/482354183_3070116093143456_4819669239270579914_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Cvwr8ha6sqoQ7kNvgGR3K7Y&_nc_oc=AdgQYMU2DsP2YOHAdq3qbnpJ4x53FmNpzNp4TPfuNt9ZZO3YZjD9gD2gax3bSjKUgOE&_nc_zt=23&_nc_ht=scontent.fsin16-1.fna&_nc_gid=A4WQb7CMpidKR8bMiq9G4Ok&oh=00_AYEnZ3BpcLa1sp_LAuoQ9_fpbm21BnRwzfvH5Zz_sBprMg&oe=67D5FA51",
        analysis: {
          classification: "False",
          confidence: "90% confidence",
          explanation: "The original Mona Lisa painting by Leonardo da Vinci, housed in the Louvre Museum, does not feature a face mask. This image is an edited or digitally manipulated version created for artistic or humorous purposes.",
          "cross_validation sources": ["https://www.louvre.fr/en/explore/the-palace/the-mona-lisa",
            "https://www.snopes.com/fact-check/mona-lisa-face-mask/",
            "https://artsandculture.google.com/asset/mona-lisa/"]
        }
      },
      {
        pattern: "U.S. President Joe Biden tells a story about a magical pistachio that helped him when he was lost in a grocery store.",
        analysis: {
          classification: "False",
          confidence: "92% confidence",
          explanation: "There is no record of President Joe Biden ever making such a statement in any official speech, interview, or public record. The phrase appears to be fabricated or satirical, as no credible news source has reported Biden discussing a 'magical pistachio' or being 'lost in a grocery store. The wording suggests an exaggerated or fictional narrative, possibly derived from online misinformation or deepfake content.",
          "cross_validation sources": [
            "https://www.factcheck.org/",
            "https://www.reuters.com/fact-check",
            "https://apnews.com/hub/fact-checking"]
        }
      },
      {
        pattern: "Pope Francis Shocks World, Endorses Trump for President!",
        analysis: {
          classification: "False",
          confidence: "86% confidence",
          explanation: "Pope Francis has never endorsed Donald Trump for president. This rumor originated from a satirical website and has been debunked by multiple fact-checking organizations. In fact, Pope Francis has criticized Trump's policies in the past, stating that building walls instead of bridges is 'not Christian.'",
          "cross_validation sources": [
            "https://www.factcheck.org/2016/10/did-the-pope-endorse-trump/",
            "https://apnews.com/general-news-86073aedf0c245eaa8fbbecd8ffff791",
            "https://www.facebook.com/cnbc/posts/pope-francis-shocks-world-endorses-donald-trump-for-president-and-more/10155054262244369/"
          ]
        }
      },
      {
        pattern: "New Mona Lisa Copy Discovered",
        analysis: {
          classification: "False",
          confidence: "90% confidence",
          explanation: "While there have been discoveries of notable Mona Lisa copies in the past, such as the Isleworth Mona Lisa and the Prado Museum's version, there is no recent discovery that has sent shockwaves through the art world. The most recent significant finding was in 2012, when the Prado Museum unveiled a copy believed to have been painted by one of Leonardo's students.",
          "cross_validation sources": [
            "https://www.theartnewspaper.com/news/perhaps-even-a-leonardo-copy-shows-you-re-rich-and-cultured",
            "https://www.euronews.com/culture/2021/11/10/world-s-best-known-da-vinci-replica-to-sell-in-paris-for-at-least-200-000"
          ]
        }
      }
    ];

    // Try multiple selectors for Facebook posts
    const selectors = [
      'div[role="article"]',
      'div[data-pagelet="FeedUnit"]',
      'div.x1yztbdb:not([role="navigation"])',
      'div[data-ad-preview="message"]',
      'div.x1lliihq'
    ];

    console.log('Starting to search for posts...');

    selectors.forEach(selector => {
      const postContainers = document.querySelectorAll(selector);
      console.log(`Found ${postContainers.length} posts with selector: ${selector}`);

      postContainers.forEach((container, index) => {
        const walker = document.createTreeWalker(
          container,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );

        let node;
        while (node = walker.nextNode()) {
          const text = node.textContent;
          
          falseContentPatterns.forEach(pattern => {
            // Add debug logging
            console.log('Checking text:', text);
            console.log('Against pattern:', pattern.pattern);
            
            // Check if pattern is an image URL
            if (pattern.pattern.startsWith('https://') && pattern.pattern.match(/\.(jpg|jpeg|png|gif)/i)) {
              // Find any img elements with this source in either src or href
              const images = Array.from(container.querySelectorAll('img')).filter(img => {
                const src = img.getAttribute('src') || '';
                // Extract the base part of the URL (before the query parameters)
                const getBaseUrl = (url) => {
                  const [baseUrl] = url.split('?');
                  // Extract specific parts that should match
                  const matches = baseUrl.match(/\/(\d+_\d+_\d+)_n\.(jpg|jpeg|png|gif)/i);
                  return matches ? matches[1] : baseUrl;
                };
                
                const patternBase = getBaseUrl(pattern.pattern);
                const srcBase = getBaseUrl(src);
                
                console.log('Comparing image URLs:', {
                  patternBase,
                  srcBase,
                  fullSrc: src,
                  fullPattern: pattern.pattern
                });
                
                return srcBase.includes(patternBase);
              });
              
              images.forEach(img => {
                console.log('Found matching image:', img);
                
                // Store original dimensions
                const originalWidth = img.offsetWidth;
                const originalHeight = img.offsetHeight;
                
                // Apply border directly to the image
                img.style.cssText = `
                  border: 2px solid red !important;
                  cursor: pointer;
                  box-sizing: border-box !important;
                  width: ${originalWidth}px !important;
                  height: ${originalHeight}px !important;
                  object-fit: cover !important;
                  margin: 0 !important;
                  padding: 0 !important;
                `;
                
                // Store the analysis data on the image
                img.setAttribute('data-analysis', JSON.stringify(pattern.analysis));
                
                // Add click handler directly to the image
                img.addEventListener('click', (e) => {
                  console.log('Image click event triggered');
                  const analysisData = e.target.getAttribute('data-analysis');
                  console.log('Image analysis data:', analysisData);
                  
                  const analysis = JSON.parse(analysisData);
                  
                  // Show popup with the same template as text highlights
                  popup.innerHTML = `
                    <div class="popup-header">
                      <div class="header-content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="29" height="29" style="margin-right: 11px;"><path fill="#1a73e8" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                        <h3 style="margin: 0;">Classification Result</h3>
                      </div>
                    </div>
                    <div class="popup-content">
                      <div class="main-result">
                        <h2>${analysis.classification}</h2>
                        <span class="confidence-badge">${analysis.confidence}</span>
                      </div>
                      <div class="explanation-section">
                        <div class="section-header" style="display: flex; align-items: center; margin-bottom: 15px;">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="21" height="21" style="margin-right: 11px; flex-shrink: 0;"><path fill="#1877f2" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                          <h4 style="margin: 0; font-size: 1.05em;">Explanation</h4>
                        </div>
                        <p style="font-size: 0.945em; line-height: 1.5;">${analysis.explanation}</p>
                      </div>
                      <div class="sources-section">
                        <div class="section-header" style="display: flex; align-items: center; margin-bottom: 15px;">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="21" height="21" style="margin-right: 11px; flex-shrink: 0;"><path fill="#1877f2" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                          <h4 style="margin: 0; font-size: 1.05em;">Sources</h4>
                        </div>
                        <div class="source-links">
                          ${analysis['cross_validation sources'].map(source => `
                            <a href="${source}" class="source-button" target="_blank" rel="noopener noreferrer">${source}</a>
                          `).join('')}
                        </div>
                      </div>
                    </div>
                    <div class="popup-footer">
                      <button class="close-button">Close</button>
                    </div>
                  `;

                  popup.classList.add('active');

                  // Add close button handler
                  const closeButton = popup.querySelector('.close-button');
                  closeButton.addEventListener('click', () => {
                    popup.classList.remove('active');
                  });

                  // Close on Escape key
                  document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                      popup.classList.remove('active');
                    }
                  });
                });
              });
              
            } else if (text.toLowerCase().includes(pattern.pattern.toLowerCase())) {
              console.log('Found match for pattern:', pattern.pattern);
              
              const span = document.createElement('span');
              span.setAttribute('data-original-text', text);
              
              // Log the HTML being created
              const highlightedHTML = text.replace(
                new RegExp(pattern.pattern, 'gi'),
                match => {
                  // Properly escape the JSON string
                  const escapedAnalysis = JSON.stringify(pattern.analysis)
                    .replace(/'/g, "\\'")  // Escape single quotes
                    .replace(/"/g, '&quot;'); // Use HTML entities for double quotes
                  
                  const highlightSpan = `<span style="background-color: rgba(255, 0, 0, 0.3); cursor: pointer; padding: 2px 4px; border-radius: 3px;" data-analysis="${escapedAnalysis}">${match}</span>`;
                  console.log('Created highlight span:', highlightSpan);
                  return highlightSpan;
                }
              );
              span.innerHTML = highlightedHTML;
              
              node.parentNode.replaceChild(span, node);

              // Add click handler for the highlighted text
              const highlightedElement = span.querySelector('span[data-analysis]');
              console.log('Found highlighted element:', highlightedElement);
              
              if (highlightedElement) {
                highlightedElement.addEventListener('click', (e) => {
                  console.log('Click event triggered');
                  const analysisData = e.target.getAttribute('data-analysis')
                    .replace(/&quot;/g, '"')  // Convert HTML entities back to quotes
                    .replace(/\\'/g, "'");    // Unescape single quotes
                  console.log('Analysis data:', analysisData);
                  
                  const analysis = JSON.parse(analysisData);
                  
                  popup.innerHTML = `
                    <div class="popup-header">
                      <div class="header-content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="29" height="29" style="margin-right: 11px;"><path fill="#1a73e8" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                        <h3 style="margin: 0;">Classification Result</h3>
                      </div>
                    </div>
                    <div class="popup-content">
                      <div class="main-result">
                        <h2>${analysis.classification}</h2>
                        <span class="confidence-badge">${analysis.confidence}</span>
                      </div>
                      <div class="explanation-section">
                        <div class="section-header" style="display: flex; align-items: center; margin-bottom: 15px;">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="21" height="21" style="margin-right: 11px; flex-shrink: 0;"><path fill="#1877f2" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                          <h4 style="margin: 0; font-size: 1.05em;">Explanation</h4>
                        </div>
                        <p style="font-size: 0.945em; line-height: 1.5;">${analysis.explanation}</p>
                      </div>
                      <div class="sources-section">
                        <div class="section-header" style="display: flex; align-items: center; margin-bottom: 15px;">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="21" height="21" style="margin-right: 11px; flex-shrink: 0;"><path fill="#1877f2" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                          <h4 style="margin: 0; font-size: 1.05em;">Sources</h4>
                        </div>
                        <div class="source-links">
                          ${analysis['cross_validation sources'].map(source => `
                            <a href="${source}" class="source-button" target="_blank" rel="noopener noreferrer">${source}</a>
                          `).join('')}
                        </div>
                      </div>
                    </div>
                    <div class="popup-footer">
                      <button class="close-button">Close</button>
                    </div>
                  `;

                  popup.classList.add('active');

                  // Add close button handler
                  const closeButton = popup.querySelector('.close-button');
                  closeButton.addEventListener('click', () => {
                    popup.classList.remove('active');
                  });

                  // Close on Escape key
                  document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                      popup.classList.remove('active');
                    }
                  });
                });
              }
            }
          });
        }
      });
    });
    
    isHighlighted = true;
  } catch (error) {
    console.error('Error highlighting false content:', error);
  }
}

// Initialize floating button when page loads
document.addEventListener('DOMContentLoaded', createFloatingButton);
// Also create button now in case DOMContentLoaded already fired
createFloatingButton();

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "scrapePosts") {
    // Call the function to scrape posts
    const posts = scrapeFacebookPosts();
    
    // Send the scraped posts back to the popup
    sendResponse({ success: true, data: posts });
  }
  // Return true to indicate we'll send a response asynchronously
  return true;
});

/**
 * Scrapes the top 3 Facebook posts from the current profile
 * @returns {Array} Array of post objects
 */
function scrapeFacebookPosts() {
  try {
    console.log("Starting to scrape Facebook posts...");
    
    // Array to store the posts
    const posts = [];
    
    // Find all post containers
    // Facebook's DOM structure changes frequently, so these selectors may need updates
    const postContainers = document.querySelectorAll('[data-pagelet^="FeedUnit"]');
    
    // If we can't find posts with that selector, try some alternatives
    let containers = postContainers.length > 0 ? postContainers : 
                     document.querySelectorAll('[role="article"]');
    
    console.log(`Found ${containers.length} potential post containers`);
    
    // Process only the top 3 posts
    const maxPosts = Math.min(3, containers.length);
    
    for (let i = 0; i < maxPosts; i++) {
      const container = containers[i];
      
      // Extract post author/page name
      const authorElement = container.querySelector('h3 span a, h4 span a, strong');
      const author = authorElement ? authorElement.textContent.trim() : "Unknown";
      
      // Extract profile picture
      const profilePicElement = container.querySelector('image');
      const profilePic = profilePicElement && profilePicElement.getAttribute('xlink:href') ? 
                       profilePicElement.getAttribute('xlink:href') : "";
      
      // Extract post time
      const timeElement = container.querySelector('a span[aria-hidden="true"]:not([class])');
      const time = timeElement ? timeElement.textContent.trim() : "";
      
      // Extract post content/text
      const contentElements = container.querySelectorAll('[data-ad-comet-preview="message"] span, [data-ad-preview="message"] span');
      let content = "";
      contentElements.forEach(el => {
        content += el.textContent;
      });
      
      // If no content found with those selectors, try others
      if (!content) {
        const altContentElements = container.querySelectorAll('div[dir="auto"]');
        altContentElements.forEach(el => {
          // Skip elements that look like timestamps, reactions, etc.
          if (el.textContent.length > 5 && !el.querySelector('a') && !el.textContent.includes("Like") && !el.textContent.includes("Comment")) {
            content += el.textContent.trim() + " ";
          }
        });
      }
      
      // Extract post image if available
      const imageElement = container.querySelector('img[src*="scontent"]:not([src*="profile"])');
      const image = imageElement ? imageElement.src : "";
      
      // Extract engagement stats (likes, comments, shares)
      const likeElement = container.querySelector('span[aria-label*="Like"]');
      const likes = likeElement ? parseInt(likeElement.textContent.replace(/[^0-9]/g, '')) || 0 : 0;
      
      const commentElement = container.querySelector('span[aria-label*="comment"]');
      const comments = commentElement ? parseInt(commentElement.textContent.replace(/[^0-9]/g, '')) || 0 : 0;
      
      const shareElement = container.querySelector('span[aria-label*="share"]');
      const shares = shareElement ? parseInt(shareElement.textContent.replace(/[^0-9]/g, '')) || 0 : 0;
      
      // Create a post object and add it to the array
      posts.push({
        author,
        profilePic,
        time,
        content: content.trim(),
        image,
        likes,
        comments,
        shares
      });
      
      console.log(`Scraped post ${i+1}:`, posts[i]);
    }
    
    // Send the posts to the backend server
    
    return posts;
  } catch (error) {
    console.error("Error scraping Facebook posts:", error);
    throw error; // Rethrow to handle in the UI
  }
}

/**
 * Sends the scraped posts to the backend server
 * @param {Array} posts - Array of post objects
 */
function sendPostsToBackend(posts) {
  // Replace with your actual backend endpoint
  const backendUrl = 'http://localhost:3008/api/facebook-posts';
  
  fetch(backendUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ posts }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success sending posts to backend:', data);
    })
    .catch(error => {
      console.error('Error sending posts to backend:', error);
    });
} 