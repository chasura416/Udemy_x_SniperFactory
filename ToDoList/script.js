const clock = document.querySelector('.h1-clock');

const GetTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = hour + ":" + minutes + ":" + seconds;
  clock.innerHTML = 
  `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}

const init = () => {
  setInterval(GetTime, 1000);
}

init();
