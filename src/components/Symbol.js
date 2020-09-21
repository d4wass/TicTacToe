import styled, { css } from "styled-components";
import React from "react";
import Tic from "../assets/times-solid.svg";
import Toe from "../assets/circle-regular.svg";

const StyledSymbol = styled.div`
  height: 100%;
  width: 100%;
  ${({ symbol }) =>
    symbol === "x" &&
    css`
      background-image: url(${Tic});
      color: #fed766;
      fill: currentColor;
      background-repeat: no-repeat;
      background-position: center;
    `}

  ${({ symbol }) =>
    symbol === "o" &&
    css`
      background-image: url(${Toe});
      color: #fe4a49;
      fill: currentColor;
      background-repeat: no-repeat;
      background-position: center;
    `}
`;

const Symbol = ({ value }) => <StyledSymbol symbol={value} />;

export default Symbol;
