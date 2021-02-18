import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  height: 30px;
  width: 100%;
  margin-bottom: 35px;
`;

const StyledLabel = styled.label`
  display: block;
  position: absolute;
  top: 15%;
  left: 0;
  pointer-events: none;
  transition: 0.3s;
  color: ${({ theme }) => theme.whiteColor};
  font-size: ${({theme}) => theme.fontSize.label};
`;

const StyledBar = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  background-color: ${({ theme }) => theme.silverColor};
  width: 100%;
  height: 1px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.input};
  outline: none;
  color: ${({ theme }) => theme.whiteColor};

  &:focus + ${StyledLabel} {
    transform: translateY(-35px);
    font-size: 1.2rem;
    color: ${({ theme }) => theme.whiteColor};
  }

  &:focus + ${StyledBar} {
    background-color: ${({ theme }) => theme.whiteColor};
  }

  ${({ value }) =>
    value !== "" &&
    css`
      &:valid + ${StyledLabel} {
        transform: translateY(-35px);
        font-size: 1.2rem;
        color: ${({ theme }) => theme.yellowColor};
      }
    `}
`;

const Input = ({ name, value, label, id, handleInput }) => (
  <StyledWrapper>
    <StyledInput
      type='text'
      name={name}
      value={value}
      id={id}
      onChange={(e) => handleInput(e)}
      autoComplete='off'
    />
    <StyledLabel>{label}</StyledLabel>
    <StyledBar />
  </StyledWrapper>
);

export default Input;
