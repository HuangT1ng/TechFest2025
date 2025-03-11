// Handle extension installation
chrome.runtime.onInstalled.addListener(function() {
  console.log('Facebook Post Scraper extension installed');
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "logData") {
    console.log("Data received:", request.data);
    sendResponse({ success: true });
  }
  return true;
}); 