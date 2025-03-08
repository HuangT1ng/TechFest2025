import sys
import json
import datetime
from textAnalyzer import analyze_text
from imageAnalyzer import analyze_image
from videoAnalyzer import analyze_video



def is_image(url):
    """Determine if URL is an image"""
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']
    return any(url.lower().endswith(ext) for ext in image_extensions)

def is_video(url):
    """Determine if URL is a video"""
    video_extensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv']
    return any(url.lower().endswith(ext) for ext in video_extensions)

def process_social_media_content(posts):
    if not posts:
        return []
    
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
                    "confidence": "100% confidence",
                    "explanation": "Pope Francis has never endorsed Donald Trump for president. This rumor originated from a satirical website and has been debunked by multiple fact-checking organizations. In fact, Pope Francis has criticized Trump's policies in the past, stating that building walls instead of bridges is 'not Christian.' ​",
                    "false_content": "Pope Francis Shocks World, Endorses Trump for President!",
                    "cross_validation sources": ["https://www.factcheck.org/2016/10/did-the-pope-endorse-trump/",
                                                 "https://apnews.com/general-news-86073aedf0c245eaa8fbbecd8ffff791",
                                                 "https://www.facebook.com/cnbc/posts/pope-francis-shocks-world-endorses-donald-trump-for-president-and-more/10155054262244369/"]
                },
                "image_analysis": {
                    "image": "https://api.time.com/wp-content/uploads/2017/05/trump-pope-francis.jpg",
                    "classification": "real",
                    "confidence": "95%",
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
                    "confidence": "90% confidence",
                    "explanation": "While there have been discoveries of notable Mona Lisa copies in the past, such as the Isleworth Mona Lisa and the Prado Museum's version, there is no recent discovery that has sent shockwaves through the art world. The most recent significant finding was in 2012, when the Prado Museum unveiled a copy believed to have been painted by one of Leonardo's students.",
                    "false_content": "New Mona Lisa Copy Discovered",
                    "cross_validation sources": ["https://www.theartnewspaper.com/news/perhaps-even-a-leonardo-copy-shows-you-re-rich-and-cultured",
                                                "https://www.euronews.com/culture/2021/11/10/world-s-best-known-da-vinci-replica-to-sell-in-paris-for-at-least-200-000"]

                },
                "image_analysis": {
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XZvJ-fZFpcInXdNv6atvg-EfC0KxX_z0Yw&s",
                    "classification": "False",
                    "confidence": "100% confidence",
                    "explanation": "The original Mona Lisa painting by Leonardo da Vinci, housed in the Louvre Museum, does not feature a face mask. This image is an edited or digitally manipulated version created for artistic or humorous purposes.",
                    "cross_validation sources": ["https://www.louvre.fr/en/explore/the-palace/the-mona-lisa",
                                                 "https://www.snopes.com/fact-check/mona-lisa-face-mask/",
                                                 "https://artsandculture.google.com/asset/mona-lisa/"]

                }
            }
        ],
        "instagram": [
            {
                "platform": "instagram",
                "author": "Sleepy Joe",
                "content": "U.S. President Joe Biden tells a story about a magical pistachio that helped him when he was lost in a grocery store.",
                "image": "https://youtu.be/yVEhrIMc-ps",
                "text_analysis": {
                    "classification": "False",
                    "confidence": "100% confidence",
                    "explanation": "There is no record of President Joe Biden ever making such a statement in any official speech, interview, or public record. The phrase appears to be fabricated or satirical, as no credible news source has reported Biden discussing a 'magical pistachio' or being 'lost in a grocery store. The wording suggests an exaggerated or fictional narrative, possibly derived from online misinformation or deepfake content.",
                    "false_content": "U.S. President Joe Biden tells a story about a magical pistachio",
                    "cross_validation sources": ["https://www.factcheck.org/",
                                                 "https://www.reuters.com/fact-check",
                                                 "https://apnews.com/hub/fact-checking"]

                },
                "image_analysis": {
                    "image": "https://youtu.be/yVEhrIMc-ps",
                    "classification": "False",
                    "confidence": "100% confidence",
                    "explanation": "The video titled 'President Joe Biden's Magical Pistachio Story (Deepfake AI)' is a deepfake. AI was used to generate fake audio and manipulate visuals, making it seem like Biden told a whimsical story that never actually happened. The video’s voice has been identified as AI-generated, and the footage originates from a 2022 Christmas address but with altered speech.",
                    "cross_validation sources": ["https://newschecker.in/fact-check/viral-video-of-us-president-joe-biden-talking-about-magical-pistachio-is-actually-deepfake",
                                                 "https://www.thequint.com/news/webqoof/joe-biden-deepfake-speech-about-magical-pistachio-christmas-2022-fact-check",
                                                 "https://dau.mcaindia.in/blog/joe-bidens-magical-pistachio-video-has-a-i-voice"]

                }
            },
            {
                "platform": "instagram",
                "author": "Art Daily",
                "content": "Lost Van Gogh masterpiece discovered in attic!",
                "image": "https://news.artnet.com/app/news-upload/2025/01/jason-allen-theatre-dopera-spatial-1024x683.jpg",
                "text_analysis": {
                    "classification": "Real",
                    "confidence": "100% confidence",
                    "explanation": "Unverified art discovery claim",
                    "false_content": "Lost Van Gogh masterpiece discovered",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                },
                "image_analysis": {
                    "image": "https://news.artnet.com/app/news-upload/2025/01/jason-allen-theatre-dopera-spatial-1024x683.jpg",
                    "classification": "False",
                    "confidence": "99% confidence",
                    "explanation": "This image could be AI generated, The style is highly detailed and surreal, incorporating dreamlike lighting, smooth blending of textures, and a grand sci-fi/fantasy atmosphere that is typical of AI-generated art.Some inconsistencies (e.g., slightly unnatural facial features or blending of textures) suggest non-human touch in its creation.",
                    "cross_validation sources": ["https://huggingface.co/spaces",
                                                 "https://deepai.org"]

                }
            }
        ],
        "twitter": [
            {
                "platform": "twitter",
                "author": "TechGuru",
                "content": "Just got my hands on the latest AI chip AMD's Blackwell B200 - the processing power is INSANE! 🤖 Thread incoming... (1/4)",
                "image": "https://media.licdn.com/dms/image/v2/D4E12AQGdbWXucNsEoQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710839851926?e=1746662400&v=beta&t=Za4SXlZnaEBv1ecdSVvsLJob9_GOQhs_6rJQf8G74a4",
                "text_analysis": {
                    "classification": "False",
                    "confidence": "100% confidence",
                    "explanation": "​The statement 'Just got my hands on the latest AI chip AMD's Blackwell B200 - the processing power is INSANE!' is incorrect. The Blackwell B200 is a product of NVIDIA, not AMD.",
                    "false_content": "AMD's Blackwell B200",
                    "cross_validation sources": ["https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing",
                                                 "https://www.nvidia.com/en-us/data-center/dgx-b200/"]

                },
                "image_analysis": {
                    "image": "https://media.licdn.com/dms/image/v2/D4E12AQGdbWXucNsEoQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710839851926?e=1746662400&v=beta&t=Za4SXlZnaEBv1ecdSVvsLJob9_GOQhs_6rJQf8G74a4",
                    "classification": "real",
                    "confidence": "100% confidence",
                    "explanation": "Official logo used without context",
                    "cross_validation sources": ["123214123","https://en.wikipedia.org/wiki/Mona_Lisa"]

                }
            }
        ]
    }
    
    return platform_data.get(platform, [])
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

