import styled, { css } from "styled-components";

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-weight: 900;
  color: #f4f4f8;
  text-align: center;

  ${({ errorMsg }) =>
    errorMsg &&
    css`
            font-weight: 700
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
    `};
`;

export default Title;
