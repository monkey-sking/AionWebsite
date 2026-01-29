import PIL.Image as Image
import PIL.ImageDraw as ImageDraw
import os

def create_squircle_mask(size, radius):
    mask = Image.new('L', size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0) + size, radius=radius, fill=255)
    return mask

def process_logo(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found")
        return

    img = Image.open(input_path).convert("RGBA")
    size = img.size
    
    # Apple squircle radius is roughly 22.5% of the size
    radius = size[0] * 0.225
    
    mask = create_squircle_mask(size, radius)
    
    output = Image.new('RGBA', size, (0, 0, 0, 0))
    output.paste(img, (0, 0), mask)
    
    output.save(output_path, "PNG")
    print(f"Successfully processed {input_path} -> {output_path}")

if __name__ == "__main__":
    process_logo("public/apple-touch-icon.png", "public/logo-clean.png")
