from PIL import Image
import sys

def remove_background(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            # Change all black (also dark gray) pixels to transparent
            if item[0] < 50 and item[1] < 50 and item[2] < 50:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Successfully removed background")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    remove_background(r"c:\Users\kc804\work_dir\my-portfolio\public\logo.png", r"c:\Users\kc804\work_dir\my-portfolio\public\logo.png")
