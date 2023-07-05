import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import auth from 'fConfig';
import Auth from 'routes/Auth';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} isLoggedIn={isLoggedIn}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;