import React from 'react';
import { useState, useEffect } from 'react';
import Timer from './timer';


const HideTimer = () => {
  const [hide, setHide] = useState(true);

  const ResetBtn = () => {
    setHide(!hide);
  }

  // Timer 컴포넌트를 가져다가 사용하는 방법을 생각못하고 여기서 아예 새로 만들어서
  // 구현을 하려다 보니 시간의 초기화가 안됨. 가져다가 쓰니 바로 된다. 
  // 리액트의 lifecycle을 파악하면 이해가 쉽다. 제대로 다시 검색해서 숙지하자.
  return(
    <div>
      {hide && <Timer />}
      <button onClick={ResetBtn}>
        {hide ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

export default HideTimer;