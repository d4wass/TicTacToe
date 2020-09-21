import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 900;
  color: #F4F4F8;
  text-align: center;
`;

const StyledParagraph = styled.p`
    font-weight: 700;
    color: #F4F4F8;
`;

const PlayerStats = (props) => (
    <StyledWrapper>
        <StyledTitle>{props.player.name}</StyledTitle>
        <StyledParagraph>score: {props.player.result}</StyledParagraph>
        <StyledParagraph>figure: {props.player.figure}</StyledParagraph>
    </StyledWrapper>
)

export default PlayerStats;