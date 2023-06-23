//배경화면 랜덤 이미지
let imgArr = new Array(
  "./img/image 01.jpg",
  "./img/image 02.jpg",
  "./img/image 03.jpg",
  "./img/image 04.jpg",
  "./img/image 05.jpg",
  "./img/image 06.jpg", 
  "./img/image 07.jpg",
  )

  const bgImg = document.getElementById("bgimg");
  const randomIndex = Math.floor(Math.random() * imgArr.length);
  // const randomImage = new Image();
  // randomImage.src = imgArr[randomIndex];
  // bgImg.src = randomImage;
  bgImg.style.backgroundImage = 'url('+ imgArr[randomIndex] +')';

console.log(imgArr[randomIndex]);
  // console.log(imgArr.length);
  // console.log(bgImg);
  // conslole.log(randomImage);




// 메인 중앙 실시간 시계
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
