import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPoint, clearCanvas,changeColor } from './redux/modules/canvasSlice';
import './App.css';

function App() {
  const points = useSelector((state) => state.canvas.points);
  const dispatch = useDispatch();

  const color = useSelector((state) => state.canvas.color); // 현재 색상을 가져옵니다

  const handleColorChange = (e) => {
    dispatch(changeColor(e.target.value)); // 색상 변경 액션을 디스패치합니다
  };

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    const point = { x: clientX, y: clientY };
    dispatch(addPoint(point));
    const pointWithColor = { ...point, color }; // 현재 색상을 포함한 점 객체를 생성합니다
    dispatch(addPoint(pointWithColor));

  
    if (points.length > 0) {
      const previousPoint = points[points.length - 1];
      const dx = Math.abs(previousPoint.x - point.x);
      const dy = Math.abs(previousPoint.y - point.y);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const step = 1; // 마우스 커서와 그림 사이의 간격을 1로 설정
  
      if (distance >= step) {
        const stepX = step * (point.x - previousPoint.x) / distance;
        const stepY = step * (point.y - previousPoint.y) / distance;
        let currentX = previousPoint.x + stepX;
        let currentY = previousPoint.y + stepY;
  
        while (currentX !== point.x || currentY !== point.y) {
          const interpolatedPoint = { x: currentX, y: currentY };
          dispatch(addPoint(interpolatedPoint));
          currentX += stepX;
          currentY += stepY;
        }
      }
    }
  
    dispatch(addPoint(point));
  };

  const handleClear = () => {
    dispatch(clearCanvas());
  };

  return (
    <div className="App">
      <h1>그림판 앱</h1>
      <div className="controls">
        <input type="color" value={color} onChange={handleColorChange} />
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="canvas" onClick={handleClick}>
        {points.map((point, index) => (
          <div
            key={index}
            className="point"
            style={{ left: point.x, top: point.y, backgroundColor: point.color }}
          />
        ))}
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;

