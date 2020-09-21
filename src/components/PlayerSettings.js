import React from "react";
import styled from "styled-components";
import Input from "./Input";
import RadioButton from './RadioButton'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const StyledForm = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
`;

const StyledRadioWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const PlayerSettings = ({ player, figures, fnInput, fnRadio, id }) => (
  <StyledWrapper>
    <StyledForm>
      <Input id={id} label="player name" name='name' value={player.name} handleInput={fnInput} />
      <StyledRadioWrapper>
        {figures.map((figure) => (<RadioButton key={figure} figure={figure} player={player} fnRadio={fnRadio} id={id}/>))}
      </StyledRadioWrapper>
    </StyledForm>
  </StyledWrapper>
);

export default PlayerSettings;