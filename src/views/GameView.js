import React from "react";
import styled from "styled-components";
import { MyContext } from "../context/index";
import Board from "../components/organisms/Board";
import GameTitle from "../components/molecules/GameTitle";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #2ab7ca;
  position: relative;
`;

const GameViews = () => (
  <MyContext.Consumer>
    {({ state, handleMove, setPlayAgain }) => {
      return (
        <StyledWrapper>
          <Board
            fields={state.fields}
            moveFn={handleMove}
            player1={state.player1}
            player2={state.player2}
            gameType={state.gameType}
          />
          {state.gameEnd && (
            <GameTitle
              gameDraw={state.gameDraw}
              player1={state.player1}
              player2={state.player2}
              setPlayAgain={setPlayAgain}
              gameTitle
            />
          )}
        </StyledWrapper>
      );
    }}
  </MyContext.Consumer>
);

export default GameViews;
