import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Image from "./src/components/blog/Image/Image";

const components = {
  img: Image,
  li: props => (
    <li {...props}>
      <div>{props.children}</div>
    </li>
  ),
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
