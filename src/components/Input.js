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
  top: 35%;
  left: 0;
  pointer-events: none;
  transition: 0.3s;
  color: #F4F4F8;
`;

const StyledBar = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  background-color: #E6E6EA;
  width: 100%;
  height: 1px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  border: none;
  font-size: 1.2em;
  outline: none;
  color: #F4F4F8;

  &:focus + ${StyledLabel} {
    transform: translateY(-35px);
    font-size: 13px;
    color: #F4F4F8;
  }

  &:focus + ${StyledBar} {
    background-color: #F4F4F8;
  }

  ${({ value }) =>
    value !== "" &&
    css`
      &:valid + ${StyledLabel} {
        transform: translateY(-35px);
        font-size: 13px;
        color: #fed766;
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
      autoComplete="off"
    />
    <StyledLabel>{label}</StyledLabel>
    <StyledBar />
  </StyledWrapper>
);

export default Input;
