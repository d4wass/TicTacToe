import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import Symbol from "components/atoms/Symbol";
import breakpoint from "theme/breakpoints";
import PlayerInfo from "components/organisms/PlayerInfo";
import GameTitle from "components/molecules/GameTitle";


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center; 
`;

const BoardWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  position: absolute;
  grid-template-columns: 80px 80px 80px;
  grid-template-rows: 80px 80px 80px;
  grid-gap: 5px;
  z-index: 1;

  @media ${breakpoint.device.xs} {
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
  }
`;
const StyledField = styled.div`
  height: 100%;
  width: 100%;
  background-color: hsla(240, 22%, 96%, 0.3);
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  @media (hover: hover) and (pointer: fine){
    &:hover {
    background-color: ${({ player1, player2 }) =>
      player1.turn && player1.figure === "x"
        ? "hsla(0.3,98.9%,64.1%,0.7)"
        : player2.turn && player2.figure === "o"
        ? "hsla(44.6,98.7%,69.8%,0.7)"
        : "hsla(0.3,98.9%,64.1%,0.7)"};
    }
  }
`;

const Board = ({ fields, moveFn, player1, player2 }) => (
  <StyledWrapper>
    {player1.turn ? (
      <GameTitle name={player1.name} color='primary' />
    ) : player2.turn ? (
      <GameTitle name={player2.name} color='secondary' />
    ) : null}
    <BoardWrapper>
      {fields.map((field, index) => (
        <StyledField
          key={index}
          onClick={() => moveFn(index)}
          player1={player1}
          player2={player2}
          
        >
          {field === "" ? null : <Symbol value={field}/>}
        </StyledField>
      ))}
    </BoardWrapper>
    <PlayerInfo player1={player1} player2={player2} />
  </StyledWrapper>
);

export default Board;
