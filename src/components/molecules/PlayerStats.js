import React from "react";
import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph";
import Title from "components/atoms/Title";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleWrapper = styled(StyledWrapper)`
  margin-bottom: 15px;
  position: relative;
`;

const StyledBar = styled.span`
  position: absolute;
  top: 100%;
  /* left: -10%; */
  height: 10px;
  border-radius: 25px;
  width: 30%;
  background-color: ${({ figure }) => (figure === "o" ? "#fed766" : "#fe4a49")};
`;

const StyledTitle = styled(Title)`
  font-size: 2.5rem;
`;

const PlayerStats = ({player}) => (
  <StyledWrapper>
    <StyledTitleWrapper>
      <StyledTitle as="h2">{player.name}</StyledTitle>
      <StyledBar figure={player.figure} />
    </StyledTitleWrapper>
    <Paragraph stats>score: {player.result}</Paragraph>
    <Paragraph stats>figure: {player.figure}</Paragraph>
  </StyledWrapper>
);

export default PlayerStats;
