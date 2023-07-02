import React, {useReducer, useState} from 'react';

const initialState = {
  name: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case  "updateField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error("Unhandled action");
  }
};



const InputReducer = () => {
  const [state, dispatch] useReducer(reducer, initialState);
  
  
  return (
    <div>
      
    </div>
  );
};

export default InputReducer;