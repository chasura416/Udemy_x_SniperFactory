import React, {useReducer} from 'react';

const initialState = 10;

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h1>숫자카운트</h1>    
      <p>숫자: {count}</p>
      <button></button>
      <button></button>
      <button></button>
    </div>
  );
};

export default Counter;