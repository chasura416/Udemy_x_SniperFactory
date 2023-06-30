import React from 'react';
import { useState, useEffect } from 'react';
import Timer from './timer';


const HideTimer = () => {
  const [hide, setHide] = useState(false);

  const ResetBtn = () => {
    setHide(!hide);
  }

  return(
    <div>
      {hide && <Timer />}
      <button onClick={ResetBtn}>Hide Timer</button>
    </div>
  );
}

export default HideTimer;