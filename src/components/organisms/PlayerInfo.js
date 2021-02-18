import React from "react";
import styled from "styled-components";
import breakpoint from "theme/breakpoints";
import PlayerStats from "components/molecules/PlayerStats";

const StyledStatWrapper = styled.div`
  justify-content: space-between;
  position: absolute;
  bottom: 10%;
  width: 100%;
  padding: 0 30px;
  display: flex;

  @media ${breakpoint.device.xs} {
    width: 100%;
    bottom: 40%;
    padding: 0 30px;
  }

  @media ${breakpoint.device.sm} {
    justify-content: space-around;
    padding: 0 50px;
  }

  @media ${breakpoint.device.xl} {
    justify-content: space-around;
  }
`;

const PlayerInfo = ({ player1, player2 }) => (
  <StyledStatWrapper>
    <PlayerStats player={player1} />
    <PlayerStats player={player2} />
  </StyledStatWrapper>
);

export default PlayerInfo;
