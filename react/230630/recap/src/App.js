import React from 'react'
import Counter from 'components/count';
import Timer from 'components/timer';
import TextMemo from 'components/textarea';
import HideTimer from 'components/hide_timer';
import ThemeChange from 'components/themeChange';
import ThemeReducerSwitcher from 'components/themeReducer';


function App() {
  return (
    <div className="App">
      <Counter />
      <Timer />
      <TextMemo />
      <HideTimer />
      <ThemeChange />
      <ThemeReducerSwitcher />
    </div>
  );
}

export default App;
