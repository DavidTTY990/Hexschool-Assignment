let stationData = [
  {
    name: "David",
    charge: "免費",
  },
  {
    name: "Vera",
    charge: "免費",
  },
  {
    name: "Eric",
    charge: "投幣式",
  },
  {
    name: "中國科大北",
    charge: "投幣式",
  },
];

// 選擇器宣告區
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const dataList = document.querySelector(".dataList");
const filterAll = document.querySelector(".filterAll");
const filterFree = document.querySelector(".filterFree");
const filterPaid = document.querySelector(".filterPaid");

// 初始資料準備（非寫死）並寫成初始化函示
function init() {
  let str = "";
  stationData.forEach(function(item, index){
    let content = `<li>${item.name}充電站，${item.charge}</li>`;
    str += content;
    dataList.innerHTML = str;
  });
}
init();

// 資料篩選器邏輯
// 全部
filterAll.addEventListener("click", function(e){
    let str = "";
    stationData.forEach(function(item, index){
        let content = `<li>${item.name}充電站，${item.charge}</li>`;
        str += content;
        dataList.innerHTML = str;
    });
});
// 免費
filterFree.addEventListener("click", function(e){
    let str = "";
    stationData.forEach(function(item, index){
        if(e.target.value == item.charge){
            str += `<li>${item.name}充電站，${item.charge}</li>`
            dataList.innerHTML = str;
        }
    })
})

// 付費 尚未完成」