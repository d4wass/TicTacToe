import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {ReactComponent as Tic} from "assets/times-solid.svg";
import {ReactComponent as Toe} from "assets/circle-regular.svg";

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const StyledSymbol = styled(Toe, Tic)`
  width: 100%;
  height: 100%;
`;



const Symbol = ({ value }) => {
  let symbol = useRef(null); 

  useEffect(
    () => {
      gsap.set(symbol.current, { autoAlpha: 0 })
      
      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
      });

      tl.fromTo(symbol.current, { duration: 0, scale: 1, autoAlpha: 0 }, { duration: 0.3, scale: 1.3, autoAlpha: 0.8 })
        .to(symbol.current, { duration: 0.3, scale: 1, autoAlpha: 1 })
     
    },[]
  )

  return (
    <StyledWrapper>
      {value === 'o' ? <StyledSymbol as={Toe} ref={symbol} /> :
        value === 'x' ? <StyledSymbol as={Tic} ref={symbol} /> : null}
    </StyledWrapper>
  )
};
export default Symbol;
