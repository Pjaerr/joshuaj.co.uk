import styled from "styled-components";

import { headingFontSize, bodyFontSize, breakpoints } from "../../constants";

export const ProjectTechnology = styled.p`
  margin-right: 15px;
  font-size: var(--fontsize-body);

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
  grid-row-gap: 5px;

  height: 100%;
  max-height: 215px;

  background-color: var(--colour-background);
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
    font-size: var(--fontsize-body);
    color: var(--colour-text-body);
  }
`;

export const ProjectTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  font-size: var(--bodyFontSize);
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${bodyFontSize.medium};

  a {
    margin-right: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--colour-text-body);

    &:hover {
      color: var(--colour-highlight);

      svg {
        fill: var(--colour-highlight);
      }
    }
  }
`;
