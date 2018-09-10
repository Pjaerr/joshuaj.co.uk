// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\Pjaer\\Desktop\\portfolio-website\\.cache\\dev-404-page.js")),
  "component---src-pages-aboutme-js": preferDefault(require("C:\\Users\\Pjaer\\Desktop\\portfolio-website\\src\\pages\\aboutme.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Pjaer\\Desktop\\portfolio-website\\src\\pages\\index.js")),
  "component---src-pages-projects-js": preferDefault(require("C:\\Users\\Pjaer\\Desktop\\portfolio-website\\src\\pages\\projects.js"))
}

exports.json = {
  "dev-404-page.json": require("C:\\Users\\Pjaer\\Desktop\\portfolio-website\\.cache\\json\\dev-404-page.json"),
  "aboutme.json": require("C:\\Users\\Pjaer\\Desktop\\portfolio-website\\.cache\\json\\aboutme.json"),
  "index.json": require("C:\\Users\\Pjaer\\Desktop\\portfolio-website\\.cache\\json\\index.json"),
  "projects.json": require("C:\\Users\\Pjaer\\Desktop\\portfolio-website\\.cache\\json\\projects.json")
}