import React from 'react';
import Counter from 'components/countReducer';
import ToDoList from 'components/todoReducer';

function App() {
  return (
    <div>
      시작화면
      <Counter />
      <ToDoList />
    </div>
  );
}

export default App;
