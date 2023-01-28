// 以 querySelector 選取元素
const btn = document.querySelector(".btn");
const title = document.querySelector("h1");
const addBtn = document.querySelector(".add-btn");
const minusBtn = document.querySelector(".minus-btn");
const result = document.querySelector(".result");

// 嘗試綁定"監聽"事件
btn.addEventListener("click", function(e) {
   console.log("You have been clicked");
   title.innerHTML = `<h1>新年快樂！心想事成！</h1>`;
})

// 加法器JS
let count = 0
addBtn.addEventListener("click", function(e) {
   count += 1;
   result.innerHTML = count;
   // event　物件 -> 告訴你當下的元素資訊
   console.log(e);
   console.log(e.clientX);
})

// 減法器JS
minusBtn.addEventListener("click", function(e) {
   if(count > 0) {
      count -= 1;
   } else {
      alert("Count 不能為負數！")
   }
   result.innerHTML = count; 
})



// 試著用 JS 直接實作地址輸入器 START
// const cityList = document.querySelectorAll(".cityList");
// const districtList = document.querySelector(".districtList");

// console.log(cityList);


// if(cityList[0].value = "請選擇縣市") {
//    districtList.value = "請選擇區域";
// }
// 試著用 JS 直接實作地址輸入器 END