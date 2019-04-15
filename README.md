# Documentation

Compass is a Jekyll theme designed with something very specific in mind: to be a simple and elegant personal landing page that can be easily deployed to [GitHub Pages](https://pages.github.com/).

## How to use Compass

1. Start by [installing Bundler](http://bundler.io) `gem install bundler`
2. [Fork the Compass repository](https://github.com/excentris/compass/fork)
3. Clone the repository you just forked: `git clone https://github.com/YOUR-USER/compass`
4. Then run `bundle install` to get [Jekyll](http://jekyllrb.com) and all the dependencies.
5. Edit `_config.yml` as needed.
6. Run the Jekyll server with `bundle exec jekyll serve`
7. Go to `http://localhost:4000`

# Photos
- Export reasonably sized photo
- Add to `images/photography/thumbnails`
- Import in Photoshop and export tiny compressed version with size 42x42px to `/images/photography/compressed`
- Run `images/photography/processPhotos.py` (generates image name with aspect ratio)
