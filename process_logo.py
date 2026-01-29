from PIL import Image, ImageDraw

def create_squircle_mask(size, radius):
    mask = Image.new('L', size, 0)
    draw = ImageDraw.Draw(mask)
    # Drawing a rounded rectangle to simulate squircle
    draw.rounded_rectangle((0, 0) + size, radius=radius, fill=255)
    return mask

def process_logo(input_path, output_path):
    # Load original logo
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Define a slightly smaller crop to remove the 1px border and white artifacts
    # Logo is 1024x1024, we crop 4px from each side to be safe
    offset = 8 
    cropped_img = img.crop((offset, offset, width - offset, height - offset))
    new_size = cropped_img.size
    
    # Create mask for transparency (approx 22% corner radius for Apple style)
    radius = int(new_size[0] * 0.22)
    mask = create_squircle_mask(new_size, radius)
    
    # Apply mask
    final_img = Image.new("RGBA", new_size, (0, 0, 0, 0))
    final_img.paste(cropped_img, (0, 0), mask)
    
    # Save as PNG
    final_img.save(output_path, "PNG")
    print(f"Processed logo saved to {output_path}")

if __name__ == "__main__":
    process_logo("public/apple-touch-icon.png", "public/logo-clean.png")
