import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const Timer = setInterval(() => {

      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("리턴되었습니다.");
      clearInterval(Timer);
    };
  }, []);
  
  return(
    <div>
      <p> 초 : {seconds}</p>
    </div>
  );
}

export default Timer;