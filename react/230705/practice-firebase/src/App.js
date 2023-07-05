import React from 'react';

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  console.log(1+2);
  return (
    <div className="App">
      파이어베이스 시작화면
    </div>
  );
}

export default App;