import React from "react";
import { styled } from "styled-components";
import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);


  return(
    <StClockContainer>
      <h1>{time.toLocaleTimeString()}</h1>
    </StClockContainer>
  );
}

const StClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  font-size: 30px;
  
  & > h1 {
    font-variant-numeric: tabular-nums;
    width: 400px;
    text-align: left;
    padding-left: 20px;
  }
`;

export default Clock;