/**
 *
 * @param {[{pageUrl, title, date, description}]} previews
 */
function generateBlogListingPage(previews) {
  return `
    <!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="Description"
      content="Joshua Jackson's personal blog"
    />
    <title>Blog</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Pacifico|Roboto:400i,300,900"
    />
    <link
      rel="stylesheet"
      type="text/css"
      media="screen"
      href="../styles/pages/blog.scss"
    />
  </head>

  <body>
    <div class="page-container">
      <div class="navigation">
        <a href="index.html">
          Home
        </a>
        <a href="projects.html">
          Projects
        </a>
      </div>
      <h1 class="sub-page-title">
        Blog
      </h1>
      ${previews.map(preview => {
        return `
        <div class="blog-post-preview">
          <a class="blog-post-preview-title" href="posts/${preview.pageUrl}.html">
            <h2>
              ${preview.title}
            </h2>
          </a>
          <p class="blog-post-preview-date-container">
            Date: <span class="blog-post-preview-date">${preview.date}</span>
          </p>
          <p class="blog-post-preview-description">
            ${preview.description}
          </p>
        </div>
        `;
      })}
    </div>
  </body>
</html>
`;
}

module.exports = generateBlogListingPage;