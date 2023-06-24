import React from "react";
import { styled } from "styled-components";

const Background = () => {
 return (
  <StBackGroundImageContainer>
    <img src="../img/image 01.jpg" alt="배경화면 이미지 1" />
  </StBackGroundImageContainer>
 ); 
}

const StBackGroundImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default Background;