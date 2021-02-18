import styled from "styled-components";
import breakpoint from "theme/breakpoints";

const Title = styled.h1`
  font-size: ${({ theme, result }) => result ? "3rem" : theme.fontSize.title};
  color: ${({ theme }) => theme.whiteColor};
  text-align: center;
  font-weight: 900;
  max-width: 80%;
  margin-bottom: ${({result}) => result && "10px"};

  @media ${breakpoint.device.xs} {
    font-size: 5rem;    
  }

  @media ${breakpoint.device.xl} {
    font-size: 5rem;
  }
`;

export default Title;
