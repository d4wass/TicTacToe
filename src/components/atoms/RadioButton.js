import styled from "styled-components";
import React from "react";

const StyledRadio = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.whiteColor};
`;

const StyledRadioBtn = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: solid 2px;
  border-color: ${({ theme }) => theme.whiteColor};
  margin-right: 10px;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.whiteColor};
    transition: all 0.3s ease-in-out;
  }
`;

const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;

  &:checked + ${StyledRadioBtn} {
    background-color: ${({ theme, value }) =>
      value === "x" ? theme.redColor : theme.yellowColor};
    box-shadow: inset 0 0 0 2px hsl(240, 22%, 96%);
    border: none;
  }
`;

const StyledLabel = styled.label`
  position: relative;
  cursor: pointer;
`;

const RadioButton = ({ player, handleInput, figure, id }) => (
  <StyledRadio>
    <StyledInput
      type='radio'
      onChange={(e) => handleInput(e)}
      value={figure}
      id={id}
      checked={player.figure === figure}
    />
    <StyledRadioBtn></StyledRadioBtn>
    <StyledLabel>{figure}</StyledLabel>
  </StyledRadio>
);

export default RadioButton;
