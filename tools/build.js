const generateBlogListingHTML = require("./generateBlogListingHTML");
const generateBlogPostHTML = require("./generateBlogPostHTML");
const md = require("markdown-it")();
const fs = require("fs");

const inputDir = __dirname + "/../blogposts/";
const outputDir = "pages/posts";

//Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

//Clear the output directory
const postsDirectory = fs.readdirSync(outputDir);

postsDirectory.forEach(existingPost => {
  if (!fs.lstatSync(outputDir + "/" + existingPost).isDirectory()) {
    fs.unlinkSync(outputDir + "/" + existingPost);
  }
});

/**
 * Generate HTML files from the markdown files in the /blogposts directory.
 * Also grab the frontmatter from those files as JSON and generate the Blog listing
 * page.
 */
fs.readdir(inputDir, (err, files) => {
  if (err) throw new Error(err);

  let blogPostsFrontmatter = [];

  files.forEach(file => {
    const markdownFile = fs.readFileSync(inputDir + file);

    const frontmatterData = getFrontmatterFromMarkdown(markdownFile.toString());

    blogPostsFrontmatter.push(frontmatterData.frontmatter);

    const blogPostHTML = generateBlogPostHTML(
      frontmatterData.frontmatter.title,
      md.render(frontmatterData.markdownWithFrontmatterRemoved),
      frontmatterData.frontmatter.language
    );

    fs.writeFile(
      `${outputDir}/${frontmatterData.frontmatter.pageUrl}.html`,
      blogPostHTML,
      err => {
        if (err) throw new Error(err);
      }
    );
  });

  blogPostsFrontmatter.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    let yearA = parseInt(
      dateA.substring(dateA.lastIndexOf("/") + 1, dateA.length - 1)
    );
    let yearB = parseInt(
      dateB.substring(dateB.lastIndexOf("/") + 1, dateB.length - 1)
    );

    if (yearA !== yearB) return yearB - yearA;

    let monthA = parseInt(
      dateA.substring(dateA.indexOf("/") + 1, dateA.lastIndexOf("/"))
    );
    let monthB = parseInt(
      dateB.substring(dateB.indexOf("/") + 1, dateB.lastIndexOf("/"))
    );

    if (monthA !== monthB) return monthB - monthA;

    let dayA = parseInt(dateA.substring(0, dateA.indexOf("/")));
    let dayB = parseInt(dateB.substring(0, dateB.indexOf("/")));

    return dayB - dayA;
  });

  fs.writeFileSync(
    "pages/blog.html",
    generateBlogListingHTML(blogPostsFrontmatter)
  );
});

/**
 * @param {string} markdown
 * @returns {{frontmatter: {pageUrl: string, title: string, description: string, date: string, language: string}, markdownWithFrontmatterRemoved: string}}
 */
function getFrontmatterFromMarkdown(markdown) {
  const frontmatterStart = markdown.indexOf("{");
  const frontmatterEnd = markdown.indexOf("}", frontmatterStart) + 1;

  const frontmatter = JSON.parse(
    markdown.substring(frontmatterStart, frontmatterEnd)
  );

  const markdownWithFrontmatterRemoved = markdown.replace(
    markdown.substring(frontmatterStart, frontmatterEnd),
    ""
  );

  return {
    frontmatter,
    markdownWithFrontmatterRemoved
  };
}
