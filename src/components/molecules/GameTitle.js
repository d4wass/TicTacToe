import styled from "styled-components";
import React from "react";
import Button from "components/atoms/Button";
import Title from "components/atoms/Title";
import Paragraph from "components/atoms/Paragraph";
import breakpoint from "theme/breakpoints";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  width: 100%;
  top: 10%;

  @media ${breakpoint.device.sm} {
    top: 10%;
  }
`;

const GameTitle = ({
  gameTitle,
  gameDraw,
  player1,
  player2,
  setPlayAgain,
  name,
  color,
}) =>
  gameTitle ? (
    <StyledWrapper>
      {gameDraw ? (
        <Title result>Draw</Title>
      ) : (
        <Title result>
          Player {player1.gameWinner ? player1.name : player2.name} Wins
        </Title>
      )}
      <Button onClick={setPlayAgain} result >Play Again</Button>
    </StyledWrapper>
  ) : (
    <StyledWrapper>
        <Title turnTitle>Turn: </Title>
        <Paragraph color={color}>{name}</Paragraph>
    </StyledWrapper>
  );

export default GameTitle;
