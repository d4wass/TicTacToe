import styled, { css } from "styled-components";
import breakpoint from "../../theme/breakpoints";

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-bottom: 20px;
  font-weight: 900;
  color: #f4f4f8;
  text-align: center;

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
      font-size: 30px;
    `};

  ${({ result }) =>
    result &&
    css`
      font-size: 55px;
      margin-bottom: 15px;
    `};

  ${({ player }) =>
    player &&
    css`
      font-size: 50px;
    `};

  @media ${breakpoint.device.xs} {
    font-size: ${({ welcome, setting, player, result }) =>
      welcome || setting ? "3.5em" : player || result ? "1.8em" : null};
    max-width: ${({ result }) => (result ? "90%" : "80%")};
    margin-bottom: ${({ player }) => player && "0px"};
  }

  @media ${breakpoint.device.lg} {
    font-size: ${({ player }) => (player ? "2.5em" : null)};
    margin-bottom: ${({ player }) => player && "5px"};
  }
`;

export default Title;
