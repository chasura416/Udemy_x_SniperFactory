import React from "react";
import { styled } from "styled-components";

const Todolist = () => {
return(
 <StToDoListContainer>
  투두리스트 드갑니다.
 </StToDoListContainer>
);
}

const StToDoListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Todolist;