import React from "react";
import styled from "styled-components";
import { MyContext } from "../context/index";
import Board from '../components/Board';
import PlayerStats from "../components/PlayerStats";

const StyledWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #2ab7ca;
  justify-content: space-evenly;
  align-items: center;
`;

const GameViews = () => (
  <MyContext.Consumer>
    {(context) => (
      <StyledWrapper>
        <PlayerStats player={context.state.player1}/>
        <Board fields={context.state.fields} moveFn={context.handleMove}/>
        <PlayerStats player={context.state.player2}/>
      </StyledWrapper>
    )}
  </MyContext.Consumer>

);

export default GameViews;
