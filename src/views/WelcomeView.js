import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { MyContext } from "../context";
import Title from "../components/atoms/Title";
import breakpoint from "../theme/breakpoints";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2ab7ca;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  @media ${breakpoint.device.xs} {
    flex-direction: row;
    width: 50%;
  }
`;

const StyledButtonLink = styled.a`
  padding: 30px;
  border-radius: 15px;
  background-color: ${({ player }) => (player ? "#FE4A49" : "#FED766")};
  text-decoration: none;
  color: ${({ player }) => (player ? "#F4F4F8" : "#2AB7CA")};
  font-weight: 700;
  margin: 10px;
  text-align: center;
`;

const WelcomeView = () => (
  <MyContext.Consumer>
    {({ submitAI }) => (
      <StyledWrapper>
        <Title welcome>TicTacToe Game</Title>
        <StyledButtonWrapper>
          <StyledButtonLink as={Link} to='/players' player>
            Player vs. Player
          </StyledButtonLink>
          <StyledButtonLink as={Link} to='/game' onClick={submitAI}>
            Player vs. AI
          </StyledButtonLink>
        </StyledButtonWrapper>
      </StyledWrapper>
    )}
  </MyContext.Consumer>
);

export default WelcomeView;
