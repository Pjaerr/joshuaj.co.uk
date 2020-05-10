import styled from "styled-components";

import { breakpoints } from "../../../constants";

export const BookPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--colour-text-heading);
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    justify-content: center;
  }

  img {
    max-width: 265px;
    height: 400px;
    object-fit: cover;
    margin-right: 40px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
      margin: 10px;
      max-width: 198px;
      height: 300px;
    }
  }
`;

export const BookPreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 10px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 10px;
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 0;
  }

  h2 {
    font-size: 1em;
  }
`;

export const BookPreviewDescription = styled.div`
  font-size: 0.8em;

  :first-child {
    font-weight: normal;
    color: var(--colour-highlight);
  }
`;

export const BookPreviewInfoMeta = styled.div`
  display: flex;
  font-size: 0.8em;
`;

export const BookPreviewInfoMetaTitle = styled.p`
  font-weight: normal;
  color: var(--colour-highlight);
  margin-right: 40px;
`;
