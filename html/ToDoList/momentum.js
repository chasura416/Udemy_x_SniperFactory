// Momentum 페이지의 자바스크립트 코드입니다.

// 날짜와 날씨를 가져옵니다.
function getWeather() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=your-api-key");
  xhr.onload = function() {
    if (xhr.status === 200) {
      var weather = JSON.parse(xhr.responseText);
      document.querySelector(".date").textContent = weather.main.temp;
      document.querySelector(".weather").textContent = weather.weather[0].description;
    }
  };
  xhr.send();
}

// 할 일을 추가합니다.
function addTodo() {
  var newTodo = document.createElement("li");
  newTodo.textContent = prompt("할 일을 입력하세요.");
  document.querySelector(".todo-list").appendChild(newTodo);
}

// 할 일을 완료합니다.
function completeTodo(todo) {
  todo.classList.add("completed");
}

// 할 일을 삭제합니다.
function deleteTodo(todo) {
  todo.parentNode.removeChild(todo);
}

// Momentum 페이지가 로드될 때 실행되는 함수입니다.
window.onload = function() {
  // 날짜와 날씨를 가져옵니다.
  getWeather();

  // 할 일 추가 버튼에 리스너를 추가합니다.
  document.querySelector(".add-todo").addEventListener("click", addTodo);

  // 할 일 완료 버튼에 리스너를 추가합니다.
  document.querySelectorAll(".todo-list .checkbox").forEach(function(checkbox) {
    checkbox.addEventListener("click", completeTodo);
  });

  // 할 일 삭제 버튼에 리스너를 추가합니다.
  document.querySelectorAll(".todo-list .delete").forEach(function(deleteButton) {
    deleteButton.addEventListener("click", deleteTodo);
  });
};