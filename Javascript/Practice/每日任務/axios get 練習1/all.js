//將目標 URL 丟到變數中
const url = "https://soweb.kcg.gov.tw/webapi/api/Category/";
//選擇 "list" 節點
const list = document.querySelector(".list");
//設定一個空陣列（將 request 來的資料丟進去用)
let data = [];

axios.get(url)
    .then(function(response) {
        // 印出回傳的完整內容
        console.log(response)
        // 印出回傳內容的「狀態」
        console.log(response.status)
        // 印出回傳內容的「資料內容」
        console.log(response.data);
        // 將回傳的 response.data 丟入上方全域設定的空陣列 data 中
        data = response.data
        // 設定一個空字串（會在下方 forEach 迴圈中將新的 HTML 丟入
        let str = "";
        data.forEach(function(item) {
            str += `<li>${item.kind_name}</li>`
        })
        // 印出 str 內容，確認 forEach 有丟成功
        console.log(str)
        list.innerHTML = str;
    })