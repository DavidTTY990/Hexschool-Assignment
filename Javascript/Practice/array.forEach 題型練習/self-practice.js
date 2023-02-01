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
const saveBtn = document.querySelector(".saveBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const dataList = document.querySelector(".dataList");
const filterAll = document.querySelector(".filterAll");
const filterFree = document.querySelector(".filterFree");
const filterPaid = document.querySelector(".filterPaid");

const selectiveFilter = document.querySelector(".selectiveFilter");

// 初始資料準備（非寫死）並寫成初始化函示
function init() {
  let str = "";
  stationData.forEach(function (item, index) {
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
    stationData.forEach(function (item, index) {
      let content = `<li>${item.name}充電站，${item.charge}</li>`;
      str += content;
      dataList.innerHTML = str;
    });
  });
  // 免費
  filterFree.addEventListener("click", function(e){
    let str = "";
    stationData.forEach(function (item, index) {
      if (e.target.value == item.charge) {
        str += `<li>${item.name}充電站，${item.charge}</li>`;
        dataList.innerHTML = str;
      }
    });
  });

// 付費
filterPaid.addEventListener("click", function(e){
  let str = "";
  stationData.forEach(function (item, index){
    if(e.target.value == item.charge){
      str += `<li>${item.name}充電站，${item.charge}</li>`;
      dataList.innerHTML = str;
    }
  });
});

// 新增資料邏輯
saveBtn.addEventListener("click", function(e){
  // let obj = {};
  // obj.name = stationName.value,
  // obj.charge = stationChare.value
  let newData = {
    name: stationName.value,
    charge: stationCharge.value,
  };
  stationData.push(newData);
  init();
});

// 刪除資料邏輯
deleteBtn.addEventListener("click", function(e){
  stationData.pop();
  init();
});

// 下拉式篩選器資料邏輯
// 自己寫的超長邏輯
// selectiveFilter.addEventListener("change",(event) => {
//   if(event.target.value == "全部"){
//     let str = "";
//     stationData.forEach(function(item, index){
//       let content = `<li>${item.name}充電站，${item.charge}</li>`;
//       str += content;
//       dataList.innerHTML = str;
//     });
//   }else if(event.target.value == "免費"){
//     let str = "";
//     stationData.forEach(function(item, index){
//       if(event.target.value == item.charge){
//         str += `<li>${item.name}充電站，${item.charge}</li>`;
//         dataList.innerHTML = str;
//       }
//     })
//   }else if(event.target.value == "投幣式"){
//     let str = "";
//     stationData.forEach(function(item, index){
//       if(event.target.value == item.charge){
//         str += `<li>${item.name}充電站，${item.charge}</li>`;
//         console.log(str);
//         dataList.innerHTML = str;
//       }
//     })
//   }
// })

// 參考六角版本的簡短邏輯
selectiveFilter.addEventListener("change",(event) => {
  let str = "";
  stationData.forEach(function(item, index) {
    if(event.target.value == "全部"){
      str+= `<li>${item.name}充電站，${item.charge}</li>`
    } else if(event.target.value == item.charge){
      str += `<li>${item.name}充電站，${item.charge}</li>`
    }
  })
  dataList.innerHTML = str;
})