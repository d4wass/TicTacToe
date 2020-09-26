import styled from "styled-components";
import React from "react";
import Symbol from "../atoms/Symbol";
import PlayerStats from "./PlayerStats";

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const BoardWrapper = styled.div`
  display: grid;
  max-width: 50%;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 5px;
`;
const StyledField = styled.div`
  height: 100%;
  width: 100%;
  background-color: hsla(240, 22%, 96%, 0.3);
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${({ player1 }) =>
      player1 ? "hsla(0.3,98.9%,64.1%,0.5)" : "hsla(44.6,98.7%,69.8%,0.5)"};
  }
`;

const Board = ({ fields, moveFn, player1, player2 }) => (
  <StyledWrapper>
    <PlayerStats player={player1} />
    <BoardWrapper>
      {fields.map((field, index) => (
        <StyledField
          key={index}
          onClick={() => moveFn(index)}
          player1={player1.turn}
          player2={player2.turn}
        >
          <Symbol value={field} />
        </StyledField>
      ))}
    </BoardWrapper>
    <PlayerStats player={player2} />
  </StyledWrapper>
);

export default Board;
