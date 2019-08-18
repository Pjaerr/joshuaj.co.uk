const generateBlogListingPage = require("./templates/generateBlogListingPage");
const generateBlogPostPage = require("./templates/generateBlogPostPage");
const md = require("markdown-it")();
const fs = require("fs");

let blogListingHTML;
let blogPostHTML;

const markdownData = fs.readFileSync(
  "blogposts/lets-create-data-vis-svelte/markdown.md"
);
const markdown = md.render(markdownData.toString());

const frontmatterData = fs.readFileSync(
  "blogposts/lets-create-data-vis-svelte/frontmatter.json"
);
const frontmatter = JSON.parse(frontmatterData);

blogListingHTML = generateBlogListingPage([frontmatter]);
blogPostHTML = generateBlogPostPage(frontmatter.title, markdown, "javascript");

fs.writeFileSync(`pages/${frontmatter.pageUrl}.html`, blogPostHTML);

fs.writeFileSync("pages/blog.html", blogListingHTML);
