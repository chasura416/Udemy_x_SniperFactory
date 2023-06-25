import React from "react";
import { styled } from "styled-components";
import image_01 from "../assets/background/img/image 01.jpg"
import image_02 from "../assets/background/img/image 02.jpg"
import image_03 from "../assets/background/img/image 03.jpg"
import image_04 from "../assets/background/img/image 04.jpg"
import image_05 from "../assets/background/img/image 05.jpg"
import image_06 from "../assets/background/img/image 06.jpg"
import image_07 from "../assets/background/img/image 07.jpg"


const Background = () => {
 return (
  <StBackGroundImageContainer>
    <img src={image_01} alt="배경화면 이미지 1" />
  </StBackGroundImageContainer>
 ); 
}

const StBackGroundImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-image: url('https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default Background;