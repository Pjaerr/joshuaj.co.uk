import { parseISO } from "date-fns";

/**
 * Sorts an array of items with a `publishDate` property
 * @param {{ publishDate }[]} posts
 * @param {'desc' | 'asc'} order
 */
export default function (posts, order = "desc") {
  return posts.sort((a, b) => {
    if (order === "desc") {
      return (
        parseISO(b.frontmatter.publishDate) -
        parseISO(a.frontmatter.publishDate)
      );
    }

    return (
      parseISO(a.frontmatter.publishDate) - parseISO(b.frontmatter.publishDate)
    );
  });
}
