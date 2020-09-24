import styled, { css } from "styled-components";

const Paragraph = styled.p`
  color: #f4f4f8;
  margin-bottom: 20px;

  ${({ primary, secondary }) =>
    primary &&
    css`
      margin-bottom: 0;
      font-weight: 700;
      font-size: 25px;
      color: #fe4a49;
    `};

  ${({ secondary }) =>
    secondary &&
    css`
      margin-bottom: 0;
      font-weight: 700;
      font-size: 25px;
      color: #fed766;
    `};

  ${({ stats }) =>
    stats &&
    css`
      margin-bottom: 0;
    `};
`;

export default Paragraph;
