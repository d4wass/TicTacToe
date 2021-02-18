import styled, { css } from "styled-components";

const Paragraph = styled.p`
  color: #f4f4f8;
  margin-bottom: 20px;

  ${({ color }) =>
    color &&
    css`
      margin-bottom: 0;
      font-weight: ${({ theme }) => theme.bold};
      font-size: ${({ theme }) => theme.fontSize.paragraph};
      color: ${({ theme, color }) =>
        color === "primary" ? theme.redColor : theme.yellowColor};
    `};

  ${({ stats }) =>
    stats &&
    css`
      font-size: 1.5rem;
      margin-bottom: 0;
    `};
`;

export default Paragraph;
