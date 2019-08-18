const generateBlogListingPage = require("./generateBlogListingPage");
const generateBlogPostPage = require("./generateBlogPostPage");
const md = require("markdown-it")();
const fs = require("fs");

const dirname = __dirname + "/../blogposts/";

fs.readdir(dirname, (err, directories) => {
  if (err) throw new Error(err);

  let blogPostsFrontmatter = [];
  let blogListingHTML;

  directories.forEach(directory => {
    let blogPostHTML;

    const markdownData = fs.readFileSync(dirname + directory + "/markdown.md");
    const markdown = md.render(markdownData.toString());

    const frontmatterData = fs.readFileSync(
      dirname + directory + "/frontmatter.json"
    );
    const frontmatter = JSON.parse(frontmatterData);

    blogPostsFrontmatter.push(frontmatter);

    blogPostHTML = generateBlogPostPage(
      frontmatter.title,
      markdown,
      frontmatter.language
    );

    fs.writeFile(
      `pages/posts/${frontmatter.pageUrl}.html`,
      blogPostHTML,
      err => {
        if (err) throw new Error(err);
      }
    );
  });

  blogListingHTML = generateBlogListingPage(blogPostsFrontmatter);

  fs.writeFileSync("pages/blog.html", blogListingHTML);
});
