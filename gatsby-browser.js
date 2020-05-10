import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Image from "./src/components/mdx/Image/Image";
import ListItem from "./src/components/mdx/ListItem/ListItem";

const components = {
  img: Image,
  li: ListItem,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
