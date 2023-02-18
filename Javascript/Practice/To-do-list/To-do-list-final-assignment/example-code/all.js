// 設置一個陣列，存放使用者todolist資料
let todoData = [];

const btn = document.querySelector(".btn_add"); //新增待辦事項按鈕
const inputBtn = document.querySelector(".inputBtn"); //input欄位
const list = document.querySelector(".list"); //list


//新增todolist
btn.addEventListener("click", function (e) {
  // 取消瀏覽器預設行為(跳轉頁面)
  e.preventDefault();
  //過濾 input 值，若值為空白則無法進行下一步
  if (inputBtn.value.trim() === "") {
    alert("欄位不能空白！");
    return;
  }
  //若input 有值，則組todoObj的物件
  let todoTask = {}; //空物件
  todoTask.content = inputBtn.value; //input 的值
  todoTask.id = new Date().getTime(); //id值賦予時間戳s
  todoTask.checked = ""; //紀錄 ckeckbox 是否有打勾
  todoData.unshift(todoTask); //要塞在第一筆資料，用 unshift 把組好的 todo 物件賦予到外層的 todoData
  updateList(); // 每次更新資料都重新渲染畫面
  inputBtn.value = ""; //把 input 欄位清空
  //console.log(todoData); 檢查物件是否組合成功
});


//刪除todolist、切換checkbox狀態
list.addEventListener("click", function (e) {
  //如果點擊到刪除按鈕，就刪除該筆資料
  if (e.target.getAttribute("class") === "delete") {
    //取消瀏覽器預設行為(跳轉頁面)
    e.preventDefault();
    //取出todoData陣列中第n筆資料
    let num = e.target.getAttribute("data-num");
    //刪除該筆資料
    todoData.splice(num, 1);
  } else {
    //取出id後，並將 id 的字串型別轉為數字型別
    let id = parseInt(e.target.closest("li").getAttribute("data-id"));
    //用 forEach 可將資料撈出來比對
    todoData.forEach(function (item) {
      //判斷 todoData 內的 id 是否等於點擊到某事項的 id
      if (item.id === id) {
        // 若該筆資料checked屬性質為""，切換成"checked"
        if (item.checked === "") {
          item.checked = "checked";
          // 若該筆資料checked屬性質不為""，則切換""未打勾
        } else {
          item.checked = "";
        }
      }
    })
  }
  // 每次更新資料都重新渲染畫面
  updateList();
});


//畫面渲染
function render(todoData) {
  //先設定一個空字串
  let str = "";
  // 用forEach 將 todoData 中的資料取出來 （forEach特性可重複取資料）
  todoData.forEach(function (item, index) {
    //字串格式
    let content = `<li  data-id=${item.id}>
          <label class="checkbox">
            <input type="checkbox" ${item.checked}/>
            <span>${item.content}</span>
          </label>
          <a href="#" class="delete" data-num=${index}></a>
        </li>`;
    //空字串和要顯示的內容合併
    str += content;
  })
  //將完整字串插入 list 
  list.innerHTML = str;
}

//切換 tab (看助教範例做的)、修改完成狀態
//透過 querySelector 選取外層 tab
const tabs = document.querySelector(".tab");
//透過 querySelectorAll 選取所有 tab li
const tabList = document.querySelectorAll(".tab li");
//預設顯示狀態為全部
let tabStatus = "all";

tabs.addEventListener('click',function(e){
   tabList.forEach(function(item){
     //透過 classList.remove 的方式先移除全部的 class active 樣式
     item.classList.remove('active');
   })
  // 給點擊到的 tab 增加 active
  e.target.classList.add('active');
  // 透過 e.target 將埋入的 tab 狀態取出
  tabStatus = e.target.getAttribute('data-tab');
  updateList(); // 每次更新資料都重新渲染畫面
})


// 刪除所有完成的項目
const deleteBtn = document.querySelector(".clear_btn"); //選取刪除按鈕

deleteBtn.addEventListener('click',function(e){
  //取消瀏覽器預設行為(跳轉頁面)
  e.preventDefault();
  //刪除已打勾，並將 todoData 裡未打勾的值篩選出來
  todoData = todoData.filter(function (item){
    return item.checked !== "checked"; 
  });
updateList();
});


//更新代辦清單
function renderList() {
  let showData = [];
  
  if(tabStatus === "all"){
    //狀態為全部 "all" 時就全部顯示
    showData = todoData;
    //狀態為待完成 "work" 時
  }else if (tabStatus === "work"){
    //篩選出 checked 為 ''＝ 尚未打勾的
    showData = todoData.filter((item)=> item.checked === "");
  }else{
    //篩選出 checked 狀態 ＝已打勾的
    showData = todoData.filter((item) => item.checked === "checked");
  }
  
  
  //計算幾個待完成項目
  const workNum = document.querySelector("#workNum"); //選取dom
  //將待完成項目賦予至變數上，並計算陣列中未打勾狀態的長度
  let todoLength = todoData.filter((item)=> item.checked === "");
  //將筆數(變數長度）賦予到 DOM 節點上
  workNum.textContent = todoLength.length;
  render(showData);
}

renderList(); //初始化頁面