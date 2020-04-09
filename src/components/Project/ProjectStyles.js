import styled from "styled-components";

import {
  headingFontSize,
  bodyFontSize,
  breakpoints,
  highlightColour,
} from "../../constants";

export const ProjectTechnology = styled.p`
  margin-right: 15px;
  font-size: ${bodyFontSize.medium};

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 25px;
    background-color: ${props => props.colour};
  }
`;

export const ProjectColouredBorder = styled.div`
  position: relative;
  padding: 3px;
  width: 100%;
  max-width: 450px;

  border-radius: 3px;
  background: ${props =>
    `linear-gradient(to right, ${props.gradient.start}, ${props.gradient.end})`};
`;

export const ProjectContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  height: 100%;
  max-height: 200px;

  background-color: var(--background);
  transition: background-color 0.2s ease-out;

  padding: 20px 25px 25px 10px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 20px 15px 20px 10px;
  }

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
      color: var(--highlightColour);

      svg {
        fill: var(--highlightColour);
      }
    }
  }
`;
