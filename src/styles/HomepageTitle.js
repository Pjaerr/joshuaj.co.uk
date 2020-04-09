import styled from "styled-components";

import { headingFontSize, highlightColour } from "../constants";

const HomepageTitle = styled.h1`
  font-weight: normal;
  margin-bottom: 10px;
  font-size: ${headingFontSize.medium};
  color: ${highlightColour};
`;

export default HomepageTitle;
