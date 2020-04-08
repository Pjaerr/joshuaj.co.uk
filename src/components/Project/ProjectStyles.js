import styled from "styled-components";

import {
  headingFontSize,
  bodyFontSize,
  breakpoints,
  highlightColour,
} from "../../constants";

export const ProjectTechnology = styled.p`
  margin-right: 15px;
  font-size: ${bodyFontSize.large};

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 25px;
    background-color: ${props => props.colour};
  }
`;

export const ProjectColouredBorder = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  padding: 3px;
  width: 100%;
  max-width: 450px;

  border-radius: 3px;
  background: ${props =>
    `linear-gradient(to right, ${props.gradient.start}, ${props.gradient.end})`};
`;

export const ProjectContent = styled.div`
  height: 180px;
  max-height: 180px;

  background-color: var(--background);

  padding: 10px 25px 25px 10px;

  @media (max-width: ${breakpoints.small}) {
    padding: 5px 10px 15px 10px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    font-weight: 500;
    font-size: ${headingFontSize.small};
  }

  p {
    font-size: ${bodyFontSize.medium};
    color: var(--bodyTextColour);
  }
`;

export const ProjectTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${bodyFontSize.medium};
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  font-size: ${bodyFontSize.medium};

  a {
    margin-right: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--bodyTextColour);

    &:hover {
      color: ${highlightColour};

      svg {
        fill: ${highlightColour};
      }
    }
  }
`;
