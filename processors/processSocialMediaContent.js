import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function processSocialMediaContent(formattedPosts) {
  console.log(`Processing ${formattedPosts.length} posts from various platforms`);
  
  // Spawn the Python main processor
  const pythonProcess = spawn('python3', [path.join(__dirname, 'mainProcessor.py')]);
  
  // Send the JSON data to Python
  pythonProcess.stdin.write(JSON.stringify(formattedPosts));
  pythonProcess.stdin.end();
  
  // Handle Python output
  pythonProcess.stdout.on('data', (data) => {
    console.log(`Python analysis results: ${data}`);
  });
  
  // Handle errors
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python analysis error: ${data}`);
  });
  
  // Log completion
  pythonProcess.on('close', (code) => {
    console.log(`Analysis process completed with code ${code}`);
  });
} 