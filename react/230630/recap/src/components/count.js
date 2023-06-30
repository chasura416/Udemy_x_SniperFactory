import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  
  const increment = () => {
    setCounter(counter + 1);
  }

  return(
    <div>
      <p>값 : {counter}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}

export default Counter;