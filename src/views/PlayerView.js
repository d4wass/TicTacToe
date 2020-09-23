import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import AlertModal from "../components/AlertModal";
import Button from "../components/Button";
import PlayerSettings from "../components/PlayerSettings";
import { MyContext } from "../context/index";
import Title from "../components/atoms/Title"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2AB7CA;
`;

const StyledFormWrapper = styled.form`
  display: flex;
`;


const StyledButton = styled(Button)`
  max-width: 250px;
  background-color: #fe4a49;
  font-weight: 700;
  color: #f4f4f8;
  text-decoration: none;
`;

const PlayerView = () => (
  <MyContext.Consumer>
    {(context) => {

      const { state } = context;

      const handleSubmit = () => {
        const { player1, player2 } = state;
        if (player1.name && player2.name && player1.figure && player2.figure) {
          if (player1.figure !== player2.figure) {
            return '/game';
          }
        }
      }

      return (
        <StyledWrapper>
          {context.state.isModalOpen && <AlertModal />}
          <Title>Players Settings</Title>
          <StyledFormWrapper>
            <PlayerSettings id="player1" player={state.player1} fnInput={context.handleInput} fnRadio={context.handleRadio} figures={context.state.figures} />
            <PlayerSettings id="player2" player={state.player2} fnInput={context.handleInput} fnRadio={context.handleRadio} figures={context.state.figures} />
          </StyledFormWrapper>
          <StyledButton as={Link} to={() => handleSubmit()} onClick={context.valideForm}>Save it</StyledButton>
        </StyledWrapper>
      )
    }}
  </MyContext.Consumer>
);

export default PlayerView;
