import React from "react";

const Greeting = ({name}) => {
  return (
    <h1>안녕하세요, {name}입니다.</h1>    
  )
}
const Practice03 = () => {
  return(
    <div>
      <Greeting name = "홍길동"/>
    </div>
  )
}

export default Practice03;