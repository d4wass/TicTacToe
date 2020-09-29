import styled, { css } from "styled-components";
import breakpoint from "../../theme/breakpoints";

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 900;
  color: #f4f4f8;
  text-align: center;
  max-width: 80%;

  ${({ errorMsg }) =>
    errorMsg &&
    css`
      font-weight: 700;
      color: #fed766;
      font-size: 30px;
    `};
  ${({ turnTitle }) =>
    turnTitle &&
    css`
      font-weight: 700;
      font-size: 2em;
    `};

  ${({ result }) =>
    result &&
    css`
      font-size: 1.8em;
      margin-bottom: 15px;
      max-width: 90%;
    `};

  ${({ player }) =>
    player &&
    css`
      font-size: 1.8em;
      margin-bottom: 0;
    `};

  @media ${breakpoint.device.xs} {
    font-size: ${({ welcome, setting, player, result, turnTitle }) =>
      welcome || setting
        ? "4em"
        : player
        ? "2.5em"
        : turnTitle || result
        ? "4em"
        : null};
    max-width: 80%;
  }

  @media ${breakpoint.device.sm} {
    font-size: ${({ welcome, setting, player, result, turnTitle }) =>
      welcome || setting
        ? "4em"
        : player
        ? "2.5em"
        : turnTitle || result
        ? "4em"
        : null};
    max-width: 80%;
  }
`;

export default Title;
