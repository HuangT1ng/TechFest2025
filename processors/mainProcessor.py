import sys
import json
import datetime
from textAnalyzer import analyze_text
from imageAnalyzer import analyze_image
from videoAnalyzer import analyze_video

def process_social_media_content(posts):
    """Return hardcoded data based on post platform"""
    if not posts:
        return []
    
    # Determine platform from first post (all posts will be same platform)
    platform = posts[0].get('platform', 'unknown').lower()
    
    platform_data = {
        "facebook": [
            {
                "platform": "facebook",
                "author": "XYZ NEWS",
                "content": "Pope Francis Shocks World, Endorses Trump for President! The Vatican apparently released a statement praising Trump's leadership and strong Christian values, and social media is going wild. What do you all think—game-changer or just more political spin?",
                "image": "https://api.time.com/wp-content/uploads/2017/05/trump-pope-francis.jpg",
                "text_analysis": {
                    "classification": "False",
                    "explanation": "Unverified claim.",
                    "false_content": "Pope Francis Shocks World, Endorses Trump for President!",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]
                },
                "image_analysis": {
                    "image": "https://api.time.com/wp-content/uploads/2017/05/trump-pope-francis.jpg",
                    "classification": "real",
                    "explanation": "",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                }
            },
            {
                "platform": "facebook",
                "author": "The Real monalisa",
                "content": "Stunning New Mona Lisa Copy Discovered, Sends Shockwaves Through Art World!",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XZvJ-fZFpcInXdNv6atvg-EfC0KxX_z0Yw&s",
                "text_analysis": {
                    "classification": "False",
                    "explanation": "LOOOOOL",
                    "false_content": "New Mona Lisa Copy Discovered",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                },
                "image_analysis": {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XZvJ-fZFpcInXdNv6atvg-EfC0KxX_z0Yw&s",
                    "classification": "False",
                    "explanation": "there were no masks in that era",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                }
            }
        ],
        "instagram": [
            {
                "platform": "instagram",
                "author": "Sleepy Joe",
                "content": "Breaking: President Biden caught sleeping during crucial security briefing!",
                "image": "https://media.cnn.com/api/v1/images/stellar/prod/230927092551-01-biden-0927.jpg",
                "text_analysis": {
                    "classification": "fake",
                    "explanation": "Misleading context",
                    "false_content": "President Biden caught sleeping during crucial security briefing",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                },
                "image_analysis": {
                    "image": "https://media.cnn.com/api/v1/images/stellar/prod/230927092551-01-biden-0927.jpg",
                    "classification": "real",
                    "explanation": "Image is authentic but taken out of temporal context",
                        "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                }
            },
            {
                "platform": "instagram",
                "author": "Art Daily",
                "content": "Lost Van Gogh masterpiece discovered in attic!",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1200px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
                "text_analysis": {
                    "classification": "fake",
                    "explanation": "Unverified art discovery claim",
                    "false_content": "Lost Van Gogh masterpiece discovered",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                },
                "image_analysis": {
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1200px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
                    "classification": "real",
                    "explanation": "Known Van Gogh self-portrait misrepresented",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                }
            }
        ],
        "twitter": [
            {
                "platform": "twitter",
                "author": "TechGuru",
                "content": "BREAKING: Major data breach at OpenAI - millions of user credentials leaked!",
                "image": "https://logos-world.net/wp-content/uploads/2023/03/OpenAI-Emblem.png",
                "text_analysis": {
                    "classification": "fake",
                    "explanation": "Unverified security claim",
                    "false_content": "Major data breach at OpenAI",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                },
                "image_analysis": {
                    "image": "https://logos-world.net/wp-content/uploads/2023/03/OpenAI-Emblem.png",
                    "classification": "real",
                    "explanation": "Official logo used without context",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                }
            }
        ]
    }
    
    return platform_data.get(platform, [])

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