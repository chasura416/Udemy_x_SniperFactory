import React from "react";
import { styled } from "styled-components";

const Greeting = () => {
return(
  <StGreetingContainer>
    <h2>인사갈깁니다.</h2>
    <input type="text" placeholder="키미노 나마에와?"/>
  </StGreetingContainer>
);
}

const StGreetingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Greeting;