import React from "react";
import styled from "styled-components";
import breakpoint from "../../theme/breakpoints";
import PlayerStats from "../molecules/PlayerStats";

const StyledStatWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  padding: 0 200px;

  @media ${breakpoint.device.xs} {
    justify-content: space-evenly;
    position: absolute;
    bottom: 10%;
    width: 100%;
    padding: 0 20px;
  }

  @media ${breakpoint.device.lg} {
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding: 0 30px;
  }

  @media ${breakpoint.device.xl} {
    justify-content: space-between;
    /* position: absolute; */
    width: 100%;
    padding: 0 60px;
  }
`;

const PlayerInfo = ({ player1, player2 }) => (
  <StyledStatWrapper>
    <PlayerStats player={player1} />
    <PlayerStats player={player2} />
  </StyledStatWrapper>
);

export default PlayerInfo;
