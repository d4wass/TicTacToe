import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  text-align: center;
  outline: none;

  ${({ result }) => result && css`
    background-color: transparent;
    border: solid 2px #fff;
    color: #fff;
    width: 100%;
    max-width: 200px;
    transition: all 0.3s ease-in-out;

    &:hover{
      background-color: #fff;
      border: solid 2px #fff;
      color: ${({theme}) => theme.redColor}
    }

  `}
`;

export default Button;
