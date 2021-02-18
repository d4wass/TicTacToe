import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input";
import RadioButton from "components/atoms/RadioButton";
import breakpoint from "theme/breakpoints";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  @media ${breakpoint.device.sm} {
    margin: 30px 0;
    width: 400px;
    flex-direction: row;
    justify-content: center;
  }
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

const PlayerSettings = ({ player, figures, fnInput, id }) => (
  <StyledWrapper>
    <StyledForm>
      <Input
        id={id}
        label='player name'
        name='name'
        value={player.name}
        handleInput={fnInput}
      />
      <StyledRadioWrapper>
        {figures.map((figure) => (
          <RadioButton
            key={figure}
            figure={figure}
            player={player}
            handleInput={fnInput}
            id={id}
          />
        ))}
      </StyledRadioWrapper>
    </StyledForm>
  </StyledWrapper>
);

export default PlayerSettings;
