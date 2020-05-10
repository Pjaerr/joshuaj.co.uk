import { css } from "styled-components";
import { pagePadding, breakpoints } from "./constants";

export default {
  fullWidth: css`
    margin-left: -${pagePadding};
    width: calc(100% + (${pagePadding} * 2));

    @media (min-width: ${breakpoints.medium}) {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }
  `,
};
