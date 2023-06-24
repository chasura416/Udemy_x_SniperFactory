import React from "react";
import { useState } from "react";


const ToDoList = () => {
  const [todo, setTodo] = useState("");
  
  const onChangeInput = (e) => {
    setTodo(e.target.value);
  }
  
  const Addtodo = (event) => {
    event.preventDefault();
    setTodo('');
    // setTodo([...todos, Todo])
    return (
      <></>
      // todos.map((item) => (
      //   <ul>
      //     <li>{item.text}</li>
      //   </ul>
      // ))
    );
  }


  return (
    <form onSubmit={Addtodo}> 
      <input
      type="text"
      value={todo}
      placeholder="할 일을 입력하세요"
      onChange={onChangeInput}
      />
      <button formAction="">추가하기</button>
    </form>
  );
}

export default ToDoList;