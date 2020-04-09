import styled from "styled-components";

import { headingFontSize, breakpoints } from "../constants";

const HomepageTitle = styled.h1`
  font-weight: bold;
  margin-bottom: -20px;
  font-size: ${headingFontSize.small};
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--highlightColour);

  @media (min-width: ${breakpoints.small}) {
    margin-bottom: 25px;
  }
`;

export default HomepageTitle;
