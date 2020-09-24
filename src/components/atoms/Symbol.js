import styled, { css, keyframes } from "styled-components";
import React from "react";
import Tic from "../../assets/times-solid.svg";
import Toe from "../../assets/circle-regular.svg";

const scaleIn = keyframes`
 0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }`;
const StyledSymbol = styled.div`
  height: 100%;
  width: 100%;
  animation: ${scaleIn} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
