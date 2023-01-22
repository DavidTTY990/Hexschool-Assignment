// 以 querySelector 選取元素
const btn = document.querySelector(".btn");
const bigTitle = document.querySelector("h1");

// 嘗試綁定"監聽"事件
btn.addEventListener("click", function(e) {
   bigTitle.textContent = `新年快樂啦！`;
})

// 試著用 JS 直接實作地址輸入器 START
const cityList = document.querySelectorAll(".cityList");
const districtList = document.querySelector(".districtList");

console.log(cityList);



if(cityList[0].value = "請選擇縣市") {
   districtList.value = "請選擇區域";
}
// 試著用 JS 直接實作地址輸入器 END