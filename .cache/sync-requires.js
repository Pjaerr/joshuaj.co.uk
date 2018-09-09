// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-aboutme-js": preferDefault(require("C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\src\\pages\\aboutme.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\src\\pages\\index.js")),
  "component---src-pages-projects-js": preferDefault(require("C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\src\\pages\\projects.js"))
}

exports.json = {
  "aboutme.json": require("C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\.cache\\json\\aboutme.json"),
  "index.json": require("C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\.cache\\json\\index.json"),
  "projects.json": require("C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\.cache\\json\\projects.json")
}