from PIL import Image
import os
import math

MAX_WIDTH = 600

# Add aspect ratio to img name:
# IMG_0786--.667-
for filename in os.listdir("original"):
    if filename.endswith(".jpg"):
        im = Image.open("original/" + filename)
        w, h = im.size
        print(im.size)
        aspect_ratio = h / w
        new_filename = "{}--{:.3f}--.jpg".format(os.path.splitext(filename)[0], aspect_ratio)
        print(filename)
        print("Aspect ratio: ", aspect_ratio)
        print("Saving to ", new_filename)

        # Resize to max width 
        downsize = MAX_WIDTH / w
        print("Downsizing to ({},{})".format(downsize * im.size[0], downsize * im.size[1]))
        im = im.resize((math.ceil(downsize * im.size[0]), math.ceil(downsize * im.size[1])), Image.LANCZOS)
        im.save("thumbnails/" + new_filename, optimize=True, quality=85)

        # Compressed versions for placeholders
        im.thumbnail((42, 42))
        im.save("compressed/" + filename, resample=Image.ANTIALIAS)
