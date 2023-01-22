// 以 querySelector 選取元素
const btn = document.querySelector(".btn");
const bigTitle = document.querySelector("h1");

// 嘗試綁定"監聽"事件
btn.addEventListener("click", function(e) {
   bigTitle.textContent = `新年快樂啦！`;
})