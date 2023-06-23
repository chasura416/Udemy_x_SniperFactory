import React from "react";
import { useState, useEffect } from "react";


function Timer() {
  const [count,setCount] = useState(0);

  useEffect(() =>{
    const timer = setInterval(()=>{
      setCount((count) => count + 1)
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("cleaup function works!");
    };
  },[]);

  return <p>{count}</p>;
}


function Practice06() {
    return <Timer />;
}


export default Practice06;