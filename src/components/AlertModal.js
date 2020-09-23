import React from 'react';
import styled from 'styled-components';
import { MyContext } from '../context';
import Button from './Button';
import Title from './atoms/Title'
import Paragraph from './atoms/Paragraph';

const StyledWrapper = styled.div`
    display: flex;
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: hsla(0, 0%, 0%, 0.5);
    justify-content: center;
    align-items: center;
`;

const StyledAlertWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #2ab7ca;
    padding: 20px;
    height: 20vh;
    width: 30vw;
`;

const StyledButton = styled(Button)`
    background-color: #fe4a49;
    color: #f4f4f8;
    font-weight: 700;
`;



const AlertModal = ({ message }) => {
    return (
        <MyContext.Consumer>
            {(context) => (
                <StyledWrapper>
                    <StyledAlertWrapper>
                        <Title errorMsg>Error!</Title>
                        <Paragraph>Błąd brakuje danych o graczach</Paragraph>
                        <StyledButton onClick={() => context.handleModal()}>Close</StyledButton>
                    </StyledAlertWrapper>
                </StyledWrapper>
            )}
        </MyContext.Consumer>
    );
}

export default AlertModal;