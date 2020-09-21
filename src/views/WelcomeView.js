import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { MyContext } from "../context";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2AB7CA;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
`;

const StyledTitleWrapper = styled.div`
  max-width: 40%;
`;

const StyledButtonLink = styled.a`
  padding: 30px;
  border-radius: 15px;
  background-color: ${({ player }) => player ? '#FE4A49' : '#FED766'};
  text-decoration: none;
  color:  ${({ player }) => player ? '#F4F4F8' : '#2AB7CA'};
  font-weight: 700;
  margin: 10px;
`;

const StyledTitle = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-weight: 900;
  color: #F4F4F8;
  text-align: center;
`;

const WelcomeView = () => (
  <MyContext.Consumer>
    {(context) => (
        <StyledWrapper>
        <StyledTitleWrapper>
          <StyledTitle>TicTacToe Game</StyledTitle>
        </StyledTitleWrapper>
        <StyledButtonWrapper>
          <StyledButtonLink as={Link} to='/players' player>
            Player vs. Player
          </StyledButtonLink>
          <StyledButtonLink as={Link} to="/game">
            Player vs. AI
          </StyledButtonLink>
        </StyledButtonWrapper>
      </StyledWrapper>
    )}
  </MyContext.Consumer>
);

export default WelcomeView;