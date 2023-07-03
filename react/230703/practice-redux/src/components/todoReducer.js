import React, {useReducer, useState} from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}


const ToDoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  
  const addTodo = () => {
    if(input.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: input,
      }
    }
    dispatch( {type: "ADD_TODO", payload: newTodo} );
    setInput("");
  }


  return (
    <div>
      <h1>할 일 목록</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => {
          setInput(e.target.value)
        }} 
        placeholder= "오늘 할 일"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key="index">

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;