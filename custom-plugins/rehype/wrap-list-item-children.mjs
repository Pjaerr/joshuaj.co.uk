/**
 * Takes every <li> outputted by the markdown parser and wraps its children in a <div>...this is used for alignment purposes
 * when giving the <li> display flex and wanting to easily align the content with the ::before pseudo element, it is hard to
 * do this when there are multiple direct children.
 */

export default [
  "rehype-rewrite",
  {
    selector: "li",
    rewrite: (node) => {
      node.children = [
        {
          type: "element",
          tagName: "div",
          properties: {},
          children: [...node.children],
        },
      ];
    },
  },
];
