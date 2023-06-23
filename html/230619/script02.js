const addToChatBtn = document.querySelector(".add-to-chat");
const addToChatList = document.querySelectorAll(".chat-content");

console.log(addToChatBtn);
console.log(addToChatList);

addToChatBtn.forEach((button) => {
  button.addEventListener("click", ()=> {
    const userName = document.getElementById("user").textContent;
    const chatContent = document.getElementById("content").textContent;
    addToChat(userName, chatContent);
  })
})

function addToChat(name, content) {
  const chatContents = document.createElement("h3").document.createElement("p");
  chatContents.textContent = `${name}: ${content}`;
  addToChatList.appendChild(chatContent);
}