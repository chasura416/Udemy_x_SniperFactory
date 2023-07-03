import React, {useReducer} from 'react';

const initialState = 10;

const reducer = (state, action) => {
  switch(action.type) {
    case "INCRESE":
      return state + 1;
    case "DECRESE":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}



const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h1>숫자카운트</h1>    
      <p>숫자: {count}</p>
      <button onClick={()=> dispatch({ type: "INCRESE" })}>증가</button>
      <button onClick={()=> dispatch({ type: "DECRESE" })}>감소</button>
      <button onClick={()=> dispatch({ type: "RESET"})}>리셋</button>
    </div>
  );
};

export default Counter;