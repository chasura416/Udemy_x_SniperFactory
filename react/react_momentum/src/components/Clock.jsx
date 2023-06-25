import React from "react";
import { styled } from "styled-components";

const Clock = () => {
return(
  <StClockContainer>
    <h1>시계 들어갈 곳</h1>
  </StClockContainer>
);
}

const StClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Clock;