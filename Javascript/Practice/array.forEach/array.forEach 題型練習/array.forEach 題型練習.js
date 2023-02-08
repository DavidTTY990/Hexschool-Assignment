let chargeStationData = [
    {
      charge: "免費",
      name: "大衛"
    },
    {
      charge: "投幣式",
      name: "維拉"
    },
    {
      charge: "免費",
      name: "大甲"
    }
  ];
  
  // DOM 選擇器宣告區
  const stationList = document.querySelector(".list");
  const stationFilter = document.querySelector(".filter");
  // 新增選擇器
  const stationName = document.querySelector(".stationName");
  const stationCharge = document.querySelector(".stationCharge");
  const addDataButton = document.querySelector(".btn");
  
  // 網頁初始化(預設載入函式)
  function init() {
    // 整合 innerHTML 資料
    let str = "";
    chargeStationData.forEach(function(item, index){
      let content = `<li>${item.name}充電站，${item.charge}</li>`;
      str += content;
      // console.log(str);
      stationList.innerHTML = str;
    });
  }
  init();
  
  // 篩選器邏輯 start
  // 免費與投幣式事件監聽綁定
  // console.log(stationFilter);
  stationFilter.addEventListener("click", function(e){
    if(e.target.value == undefined){
        console.log(e);
      console.log("你點到空白的地方囉");
      return; //終止函式繼續進行
    }
    // 點擊「全部」、「免費」、「投幣式」按鈕後篩選出指定內容
    let str = "";
    chargeStationData.forEach(function(item, index) {
      if (e.target.value == "全部") {
        str += `<li>${item.name}充電站，${item.charge}</li>`;
      } else if (e.target.value == item.charge) {
        str += `<li>${item.name}充電站，${item.charge}</li>`;
      }
    });
    stationList.innerHTML = str;
  });
  // 篩選器邏輯 end
  
  // 新增資料邏輯 start
  addDataButton.addEventListener("click", function(e){
    // console.log(stationName.value);
    // console.log(stationCharge.value);
    let obj = {};
    obj.name = stationName.value;
    obj.charge = stationCharge.value;
    chargeStationData.push(obj);
    init();
  });
  // 新增資料邏輯 end