#!/usr/bin/env python3
import sys
import json
import datetime
from textAnalyzer import analyze_text
from imageAnalyzer import analyze_image
from videoAnalyzer import analyze_video

def process_social_media_content(posts):
    """
    Main processor that orchestrates analysis of all content types
    
    Args:
        posts (list): List of normalized post dictionaries
    """
    print(f"Processing {len(posts)} posts at {datetime.datetime.now().isoformat()}")
    
    results = []
    
    for post in posts:
        try:
            post_result = {
                "post_id": post.get("id", "unknown"),
                "platform": post.get("platform", "unknown"),
                "author": post.get("author", "unknown"),
                "timestamp": post.get("timestamp") or post.get("time") or "unknown",
                "analysis": {}
            }
            
            # Analyze text content if available
            if post.get("textContent"):
                post_result["analysis"]["text"] = analyze_text(post["textContent"])
            
            # Analyze media if available
            media_urls = post.get("mediaUrls", [])
            for media_url in media_urls:
                if is_image(media_url):
                    if "images" not in post_result["analysis"]:
                        post_result["analysis"]["images"] = []
                    post_result["analysis"]["images"].append(analyze_image(media_url))
                elif is_video(media_url):
                    if "videos" not in post_result["analysis"]:
                        post_result["analysis"]["videos"] = []
                    post_result["analysis"]["videos"].append(analyze_video(media_url))
            
            results.append(post_result)
            
        except Exception as e:
            print(f"Error processing post: {e}")
            print(f"Problematic post data: {json.dumps(post, indent=2)}")
            continue
    
    # Print summary of results
    print(f"Completed analysis of {len(results)} posts")
    return results

def is_image(url):
    """Determine if URL is an image"""
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']
    return any(url.lower().endswith(ext) for ext in image_extensions)

def is_video(url):
    """Determine if URL is a video"""
    video_extensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv']
    return any(url.lower().endswith(ext) for ext in video_extensions)

# Read input data from stdin
input_data = sys.stdin.read()

try:
    # Parse JSON input
    posts = json.loads(input_data)
    
    # Process all posts
    results = process_social_media_content(posts)
    
    # Output results as formatted JSON
    print(json.dumps(results, indent=2))
    
except json.JSONDecodeError as e:
    print(f"Error decoding JSON: {e}")
except Exception as e:
    print(f"Unexpected error: {e}") 