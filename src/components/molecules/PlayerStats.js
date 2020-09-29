import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import breakpoint from "../../theme/breakpoints";

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
  left: -10%;
  height: 10px;
  border-radius: 25px;
  width: 30%;
  background-color: ${({ figure }) => (figure === "o" ? "#fed766" : "#fe4a49")};
`;

const PlayerStats = (props) => (
  <StyledWrapper>
    <StyledTitleWrapper>
      <Title player>{props.player.name}</Title>
      <StyledBar figure={props.player.figure} />
    </StyledTitleWrapper>
    <Paragraph stats>score: {props.player.result}</Paragraph>
    <Paragraph stats>figure: {props.player.figure}</Paragraph>
  </StyledWrapper>
);

export default PlayerStats;
