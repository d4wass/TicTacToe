import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import AlertModal from "../components/molecules/AlertModal";
import Button from "../components/atoms/Button";
import PlayerSettings from "../components/molecules/PlayerSettings";
import { MyContext } from "../context/index";
import Title from "../components/atoms/Title";
import breakpoint from "../theme/breakpoints";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #2ab7ca;
`;

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  @media ${breakpoint.device.xs} {
    flex-direction: row;
  }
`;

const StyledButton = styled(Button)`
  max-width: 210px;
  width: 100%;
  background-color: #fe4a49;
  font-weight: 700;
  color: #f4f4f8;
  text-decoration: none;
`;

const PlayerView = () => (
  <MyContext.Consumer>
    {(context) => {
      const { state, handleModal } = context;

      const handleFormValidation = () => {
        const { player1, player2 } = state;
        if (
          !player1.name &&
          !player2.name &&
          !player1.figure &&
          !player2.figure
        ) {
          const message = "please fill the players details";
          handleModal(message);
        } else if (
          player1.figure === player2.figure &&
          player1.figure !== "" &&
          player2.figure !== ""
        ) {
          const message = "please choose different symbols for each player";
          handleModal(message);
        } else if (
          player1.figure === player2.figure &&
          player1.figure === "" &&
          player2.figure === ""
        ) {
          const message = "please choose symbols for players";
          handleModal(message);
        } else if (!player1.name && !player2.name) {
          const message = "please enter players names";
          handleModal(message);
        }
      };

      const handleSubmit = () => {
        const { player1, player2 } = state;
        if (player1.name && player2.name && player1.figure && player2.figure) {
          if (player1.figure !== player2.figure) {
            return "/game";
          }
        }
      };

      return (
        <StyledWrapper>
          {context.state.isModalOpen && <AlertModal />}
          <Title>Players Settings</Title>
          <StyledFormWrapper>
            <PlayerSettings
              id='player1'
              player={state.player1}
              fnInput={context.handleInput}
              fnRadio={context.handleRadio}
              figures={context.state.figures}
            />
            <PlayerSettings
              id='player2'
              player={state.player2}
              fnInput={context.handleInput}
              fnRadio={context.handleRadio}
              figures={context.state.figures}
            />
          </StyledFormWrapper>
          <StyledButton
            as={Link}
            to={() => handleSubmit()}
            onClick={handleFormValidation}
          >
            Play
          </StyledButton>
        </StyledWrapper>
      );
    }}
  </MyContext.Consumer>
);

export default PlayerView;
