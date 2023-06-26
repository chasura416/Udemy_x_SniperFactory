import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

// import React, { useState, useEffect } from 'react';

// function TodoList({ initialTodos }) {
//   const [todos, setTodos] = useState(initialTodos);

//   useEffect(() => {
//     // todos 상태가 업데이트될 때마다 로컬 스토리지에 저장합니다.
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (text) => {
//     const newTodo = {
//       id: Date.now(),
//       text: text,
//       completed: false,
//     };
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//   };

//   const toggleTodo = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>할 일 목록</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//             />
//             <span
//               style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)}>삭제</button>
//           </li>
//         ))}
//       </ul>
//       <TodoForm onAddTodo={addTodo} />
//     </div>
//   );
// }

// function TodoForm({ onAddTodo }) {
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim() !== '') {
//       onAddTodo(text);
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="할 일을 입력하세요"
//       />
//       <button type="submit">추가</button>
//     </form>
//   );
// }

// function App() {
//   // 로컬 스토리지에서 이전에 저장된 할 일 목록을 불러옵니다.
//   const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//   const [todos, setTodos] = useState(savedTodos);

//   return <TodoList initialTodos={todos} />;
// }

// export default App;
