const list = document.querySelector(".list");
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");

let data = [];

//待辦事項物件初始化
function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    str += `<li>${item.content}<input type="button" value="刪除待辦" data-num="${index}" class="delete"></li>`;
  });

  list.innerHTML = str;
}

renderData();

// renderData(); //call 資料初始化的函式

// 新增資料的邏輯
save.addEventListener("click", function (e) {
  if (txt.value == "") {
    alert("請輸入待辦內容");
    return;
  }
  let listContent = {};
  listContent.content = txt.value;
  data.push(listContent);
  renderData();
});

// 刪除資料的邏輯
list.addEventListener("click", function(e){
    if(e.target.getAttribute("value") !== "刪除待辦"){
        alert("你點擊到了錯誤的位置")
        return;
    } else {
        let num = e.target.getAttribute("data-num");
        data.splice(num, 1);
    }
    renderData();
})