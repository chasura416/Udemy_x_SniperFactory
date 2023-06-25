import React from "react";
import { styled } from "styled-components";
import image_01 from "../assets/background/img/image01.jpg"
import image_02 from "../assets/background/img/image02.jpg"
import image_03 from "../assets/background/img/image03.jpg"
import image_04 from "../assets/background/img/image04.jpg"
import image_05 from "../assets/background/img/image05.jpg"
import image_06 from "../assets/background/img/image06.jpg"
import image_07 from "../assets/background/img/image07.jpg"
import Clock from "./Clock";
import Greeting from "./Greeting";
import Weather from "./Weather";
import Todolist from "./Todolist";

const bgimgArr = [
  image_01, image_02, image_03, 
  image_04, image_05, image_06,
  image_07
];

const randomIndex = Math.floor(Math.random() * bgimgArr.length);
const bgImg = bgimgArr[randomIndex];

const Background = () => {
 return (
  <StBackGroundImageContainer>
    <Weather />
    <Clock />
    <Greeting />
    <Todolist />
  </StBackGroundImageContainer>
 ); 
}

const StBackGroundImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    rgba(0, 0, 0, 0.4), 
    rgba(0, 0, 0, 0.7)
    ),
    url(${bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default Background;