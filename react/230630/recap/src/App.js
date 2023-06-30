import React from 'react'
import Counter from 'components/count';
import Timer from 'components/timer';
import TextMemo from 'components/textarea';
import HideTimer from 'components/hide_timer';

function App() {
  return (
    <div className="App">
      <Counter />
      <Timer />
      <TextMemo />
      <HideTimer />
    </div>
  );
}

export default App;
