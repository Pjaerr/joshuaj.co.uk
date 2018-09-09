// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-aboutme-js": require("gatsby-module-loader?name=component---src-pages-aboutme-js!C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\src\\pages\\aboutme.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\src\\pages\\index.js"),
  "component---src-pages-projects-js": require("gatsby-module-loader?name=component---src-pages-projects-js!C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\src\\pages\\projects.js")
}

exports.json = {
  "aboutme.json": require("gatsby-module-loader?name=path---aboutme!C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\.cache\\json\\aboutme.json"),
  "index.json": require("gatsby-module-loader?name=path---index!C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\.cache\\json\\index.json"),
  "projects.json": require("gatsby-module-loader?name=path---projects!C:\\Users\\Pjaer\\Desktop\\portfolio-website-gatsby\\.cache\\json\\projects.json")
}

exports.layouts = {

}