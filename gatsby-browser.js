import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Image from "./src/components/blog/Image/Image";

const components = {
  img: Image,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
