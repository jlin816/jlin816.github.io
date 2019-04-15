from PIL import Image
import os

# Add aspect ratio to img name:
# IMG_0786--.667-
for filename in os.listdir("thumbnails"):
    if filename.endswith(".jpg") and "--" not in filename:
        im = Image.open("thumbnails/" + filename)
        aspect_ratio = im.size[1] / im.size[0]
        new_filename = "{}--{:.3f}--.jpg".format(os.path.splitext(filename)[0], aspect_ratio)
        print(filename)
        print("Aspect ratio: ", aspect_ratio)
        print(new_filename)
        os.rename("thumbnails/" + filename, "thumbnails/" + new_filename)
