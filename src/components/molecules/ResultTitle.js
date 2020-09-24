import styled from "styled-components";
import React from "react";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  top: 15%;
`;

const GameTitle = ({
  gameTitle,
  gameDraw,
  player1,
  player2,
  setPlayAgain,
  name,
}) =>
  gameTitle ? (
    <StyledWrapper>
      {gameDraw ? (
        <Title result>Draw</Title>
      ) : (
        <Title result>
          {" "}
          Player {player1.gameWinner ? player1.name : player2.name} Wins
        </Title>
      )}
      <Button onClick={setPlayAgain}>Play Again</Button>
    </StyledWrapper>
  ) : (
    <StyledWrapper>
      <Title turnTitle>
        Turn: <Paragraph paramAttribute>{name}</Paragraph>
      </Title>
    </StyledWrapper>
  );

export default GameTitle;
