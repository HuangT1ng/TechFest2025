from PIL import Image
import os

def resize_image(input_path, output_path, size):
    try:
        with Image.open(input_path) as img:
            # Resize the image
            img = img.resize((size, size), Image.LANCZOS)
            # Save the resized image
            img.save(output_path)
            print(f"Successfully created {output_path}")
    except Exception as e:
        print(f"Error creating {output_path}: {e}")

if __name__ == "__main__":
    # Input file path
    input_file = "icon.webp"
    
    # Output file paths
    output_files = {
        "icon16.png": 16,
        "icon48.png": 48,
        "icon128.png": 128
    }
    
    # Resize images
    for output_file, size in output_files.items():
        resize_image(input_file, output_file, size)
    
    print("Done! All icon sizes created.") 