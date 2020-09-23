import React from 'react';
import styled from 'styled-components';

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
    background-color: ${({figure})=>( figure === "o" ? '#fed766' : '#fe4a49')};
`;

const StyledTitle = styled.h1`
  font-size: 40px;
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
        <StyledTitleWrapper>
            <StyledTitle>{props.player.name}</StyledTitle>
            <StyledBar figure={props.player.figure}/>
        </StyledTitleWrapper>
        <StyledParagraph>score: {props.player.result}</StyledParagraph>
        <StyledParagraph>figure: {props.player.figure}</StyledParagraph>
    </StyledWrapper>
)

export default PlayerStats;