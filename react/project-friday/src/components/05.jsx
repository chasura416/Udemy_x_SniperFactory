import React from "react";

function TodoList(props) {
  console.log(props);
  const todos = props.todos;
  return (
    todos.map((item) => (
      <ul>
        <li>{item.text}</li>
      </ul>
    ))
  );
}


function Practice05() {
  
  const todos = [
    {id:1, text: "할 일 목록 1"},
    {id:2, text: "할 일 목록 2"},
    {id:3, text: "할 일 목록 3"},
    {id:4, text: "할 일 목록 4"}
  ];
  
  // const anothertodos = [
  //   {id:1, text: "할 일 목록 1"},
  //   {id:2, text: "할 일 목록 2"},
  //   {id:3, text: "할 일 목록 3"},
  //   {id:4, text: "할 일 목록 4"}
  // ];
  
  return <TodoList todos={todos} />;
}

export default Practice05;