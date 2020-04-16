import styled, { css } from "styled-components";
import { pagePadding } from "./constants";

export default {
  fullWidth: css`
    margin-left: -${pagePadding};
    width: calc(100% + (${pagePadding} * 2));
  `,
  constrainedWidth: css`
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  `,
};
