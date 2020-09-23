import React from "react";
import styled from "styled-components";
import { MyContext } from "../context/index";
import Board from '../components/Board';
import PlayerStats from "../components/PlayerStats";
import Button from "../components/Button";
import Title from "../components/atoms/Title";
import Paragraph from "../components/atoms/Paragraph";

const StyledWrapperBoard = styled.div`
  display: flex;
  height: 100%;

  justify-content: space-evenly;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #2ab7ca;
  position: relative;
`;

const StyledButton = styled(Button)`
  /* align-self: center;
  position: absolute;
  top: 20%; */
`;

const StyledTitle = styled.h5`
  color: #f4f4f8;
  font-weight: 700;
  margin-bottom: 30px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  top: 15%;
`;

const GameViews = () => (
  <MyContext.Consumer>
    {({ state, handleMove, setPlayAgain, handleConsole }) => {

      return (
        <StyledWrapper>
          <StyledWrapperBoard>
            <PlayerStats player={state.player1} />
            <Board
              fields={state.fields}
              moveFn={handleMove}
              player1={state.player1}
              player2={state.player2}
              gameType={state.gameType}
              handleConsole={handleConsole}
            />
            <PlayerStats player={state.player2} />
          </StyledWrapperBoard>
          {state.gameEnd && (
            <StyledButtonWrapper>
              {state.gameDraw ? (
                <Title result>Draw</Title>
              ) : (
                <Title result>Player {state.player1.gameWinner ? state.player1.name : state.player2.name} Wins</Title>)}
              <StyledButton onClick={setPlayAgain}>Play Again</StyledButton>
            </StyledButtonWrapper>
          )}
          {
            state.player1.turn ? (
              <StyledButtonWrapper>
                <Title turnTitle>Turn: <Paragraph primary>{state.player1.name}</Paragraph></Title>
              </StyledButtonWrapper>
            ) : state.player2.turn ? (
              <StyledButtonWrapper>
                <Title turnTitle>Turn: <Paragraph secondary>{state.player2.name}</Paragraph></Title>
              </StyledButtonWrapper>
              ) : (
              null
            )
          }
        </StyledWrapper>
      )
    }}
  </MyContext.Consumer>

);

export default GameViews;
