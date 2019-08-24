function generateBlogPostPage(
  blogPostName,
  content,
  syntaxHighlightingLanguage
) {
  return `
        <!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="Description"
      content="Joshua Jackson's web portfolio with projects in HTML, CSS, JavaScript, React"
    />
    <title>Josh Jackson @Pjaerr | Blog</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Pacifico|Roboto:400i,300,900"
    />
    <link
      rel="stylesheet"
      type="text/css"
      media="screen"
      href="../../styles/pages/blog-post.scss"
    />
    <link rel="stylesheet" type="text/css" href="../../syntax-highlighting/prism-${syntaxHighlightingLanguage}.css"/>
  </head>

  <body>
    <div class="page-container">
      <div class="navigation navigation-top">
        <a href="../blog.html">
          Back to Blog
        </a>
      </div>
      <article class="blog-post-container">
        <section class="blog-post-content language-${syntaxHighlightingLanguage}">
            <h1 class="sub-page-title">
                ${blogPostName}
            </h1>
          ${content}
        </section>
        <aside class="blog-post-author">
          <div class="blog-post-author-content">
            <img class="blog-post-author-image" src="../../assets/me.jpg" alt="Image of Josh Jackson" />
            <h1 class="blog-post-author-name">
              Written By Josh Jackson</br></br>
              <a href="https://twitter.com/Pjaerr" target="_blank">@Pjaerr</a>
            </h1>
            
          </div>
          <div class="navigation">
            <a href="../blog.html">
              Back to Blog
            </a>
            <a href="../projects.html">
              Projects
            </a>
          </div>
        </aside>
      </article>
    </div>
    <script src="../../syntax-highlighting/prism-${syntaxHighlightingLanguage}.js"></script>
  </body>
</html>
`;
}

module.exports = generateBlogPostPage;
