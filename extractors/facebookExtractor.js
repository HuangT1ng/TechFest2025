import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function extractFacebookPosts() {
  try {
    console.log('Extracting Facebook posts from frontend file...');
    const facebookJsPath = path.join(__dirname, '../facebook', 'facebook.js');
    const fileContent = fs.readFileSync(facebookJsPath, 'utf8');
    
    // Extract the facebookPosts array using regex
    const postsRegex = /const\s+facebookPosts\s*=\s*(\[[\s\S]*?\]);/;
    const match = fileContent.match(postsRegex);
    
    if (match && match[1]) {
      const postsArray = eval(match[1]);
      console.log(`Successfully extracted ${postsArray.length} Facebook posts`);
      return postsArray;
    } else {
      console.error('Failed to extract Facebook posts data');
      return [];
    }
  } catch (error) {
    console.error('Error reading Facebook posts data:', error);
    return [];
  }
} 