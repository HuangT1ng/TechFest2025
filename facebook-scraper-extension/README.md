# Facebook Post Scraper Chrome Extension

A Chrome extension that scrapes the top 3 posts from a Facebook profile and sends them to a backend server in JSON format for misinformation analysis.

## Features

- Scrapes post author, content, image, timestamp, and engagement metrics
- Works on actual Facebook profiles (not mock data)
- Sends data to your backend for processing
- Simple user interface

## Installation

1. Clone this repository to your local machine.
2. Add icon images to the `images` folder (16px, 48px, and 128px versions).
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" using the toggle in the top-right corner.
5. Click "Load unpacked" and select the extension directory.
6. The extension should now appear in your Chrome toolbar.

## Usage

1. Start your backend server (the server included in this project should be running on port 3008).
2. Navigate to any Facebook profile page.
3. Click the extension icon in your toolbar.
4. Click the "Scrape Posts" button in the popup.
5. The extension will scrape the top 3 posts and send them to your backend.

## Backend Integration

The extension sends scraped posts to `http://localhost:3008/api/facebook-posts` as a POST request with the following JSON structure:

```json
{
  "posts": [
    {
      "author": "Profile Name",
      "profilePic": "URL to profile picture",
      "time": "Posted time (e.g., '2 hrs ago')",
      "content": "Post content text",
      "image": "URL to post image (if any)",
      "likes": 42,
      "comments": 7,
      "shares": 3
    },
    // Additional posts...
  ]
}
```

## Customization

- To change the backend URL, modify the `backendUrl` variable in `content.js`.
- To adjust the number of posts scraped, modify the `maxPosts` variable in `content.js`.

## Notes on Facebook Scraping

Facebook's DOM structure changes frequently, so the selectors used for scraping may need updates over time. The extension includes multiple fallback selectors to increase reliability, but you might need to update them if Facebook significantly changes its layout.

## License

This project is licensed under the MIT License. 