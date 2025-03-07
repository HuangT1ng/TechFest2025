import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function extractInstagramPosts() {
  try {
    console.log('Extracting Instagram posts from frontend file...');
    const instagramJsPath = path.join(__dirname, '../instagram', 'instagram.js');
    const fileContent = fs.readFileSync(instagramJsPath, 'utf8');
    
    // Extract the instagramPosts array using regex
    const postsRegex = /const\s+instagramPosts\s*=\s*(\[[\s\S]*?\]);/;
    const match = fileContent.match(postsRegex);
    
    if (match && match[1]) {
      const postsArray = eval(match[1]);
      console.log('Extracted Instagram posts:', JSON.stringify(postsArray, null, 2));
      
      console.log(`Successfully extracted ${postsArray.length} Instagram posts`);
      return postsArray;
    } else {
      console.error('Failed to extract Instagram posts data');
      return [];
    }
  } catch (error) {
    console.error('Error reading Instagram posts data:', error);
    return [];
  }
} 