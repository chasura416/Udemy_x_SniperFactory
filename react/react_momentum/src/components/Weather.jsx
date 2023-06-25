import React from "react";
import { styled } from "styled-components";

const Weather = () => {
return(
  <StWeatherContainer>
    날씨 들어갑니다.
  </StWeatherContainer>
);
}

const StWeatherContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

export default Weather;