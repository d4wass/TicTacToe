import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { MyContext } from "context";
import Button from "components/atoms/Button";
import Title from "components/atoms/Title";
import Paragraph from "components/atoms/Paragraph";
import breakpoint from "theme/breakpoints";


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
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: #2ab7ca;
  padding: 20px;
  height: 50vh;
  width: 80vw;
  opacity: 0;
  
  @media ${breakpoint.device.sm} {
    height: 45vh;
    width: 45vw;
  }
`;

const StyledButton = styled(Button)`
  background-color: #fe4a49;
  color: #f4f4f8;
  font-weight: 700;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 2rem;
  text-align: center;
`;


const AlertModal = () => {
  let wrapper = useRef(null)
  let alert = useRef(null)

  useEffect(() => {

    gsap.set([wrapper.current.childNodes], { autoAlpha: 0 });

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });

    tl.fromTo(alert.current, { scale: 0, autoAlpha: 0 }, { duration: 0.6, scale: 1, autoAlpha: 1, stagger: 0.2 });
  });

  return (
    <MyContext.Consumer>
      {({ handleModal, state }) => (
        <StyledWrapper ref={wrapper}>
          <StyledAlertWrapper ref={alert}>
            <Title errorMsg>Error!</Title>
            <StyledParagraph>{state.message}</StyledParagraph>
            <StyledButton onClick={() => handleModal()}>Close</StyledButton>
          </StyledAlertWrapper>
        </StyledWrapper>
      )}
    </MyContext.Consumer>
  );
};

export default AlertModal;
