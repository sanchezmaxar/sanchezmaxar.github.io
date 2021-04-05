const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-index-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/pages/404/index.jsx"))),
  "component---src-pages-blog-index-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/pages/blog/index.jsx"))),
  "component---src-pages-contact-index-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/pages/contact/index.jsx"))),
  "component---src-pages-credits-index-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/pages/credits/index.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/pages/index.jsx"))),
  "component---src-pages-resume-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/pages/resume.jsx"))),
  "component---src-pages-tags-index-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/pages/tags/index.jsx"))),
  "component---src-templates-post-post-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/templates/post/post.jsx"))),
  "component---src-templates-tags-index-jsx": hot(preferDefault(require("/home/max/Code/sanchezmaxar.github.io/src/templates/tags/index.jsx")))
}

