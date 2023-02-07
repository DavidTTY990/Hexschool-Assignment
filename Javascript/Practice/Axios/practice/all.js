//https://hexschool.github.io/ajaxHomework/data.json

let ary = [];

axios
  .get("https://hexschool.github.io/ajaxHomework/data.json") //以 get 方法載入目標 JSON 檔案，成功收到 response 後執行下方函式
  .then(function (response) {
    console.log(response);
    ary = response.data; //將 response.data 放進上方的 ary 空陣列
    console.log(response.data);
    console.log("資料已回傳");
    renderData();
  })
  .catch(function (error) {
    //如果 get 的 request 如果收到的 response 為 false ，則執行 catch 的動作
    console.log(error);
    alert(error.message);
  });

function renderData() {
  console.log(ary);
  const title = document.querySelector(".title");
  title.textContent = ary[0].name;
}

console.log(ary); //[] <- 因為 AJAX 的非同步特性，在第 6 行 Axios 執行的 request 會需要較多時間才能完成 response，才會執行 8~12 行的函示，但 25 行的執行速度較快，因此會發生 Axios 的資料還沒回傳，優先執行 27 行的結果即是印出空陣列。解決方式：將要執行的動作寫成函式，並放到 Axios 的函式中（見第 12 行），可確保一收到 response 後隨即執行。

// axios.post("https://hex-escape-room.herokuapp.com/api/user/signup")
//     .then(function(response) {
//         email: 'lovef2e@hexschool.com',
//         password: '12345678'
//     })

// 以 axios 發出 post 請求申請帳號密碼
// 測試註冊 (六角 api 每 12 小時會清除一次帳密紀錄)
let obj = {
  email: "js850688@gmail.com",
  password: "12345678"
};

axios.post("https://hex-escape-room.herokuapp.com/api/user/signup", obj)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
    alert(error.message);
  });

  //測試登入
  let objSignin = {
    email: "js850688@gmail.com",
    password: "12345678"
  }

  axios.post("https://hex-escape-room.herokuapp.com/api/user/signin", objSignin)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
      alert(error.message)
    })

  //測試登入失敗的情況
  axios.post("https://hex-escape-room.herokuapp.com/api/user/signin", {
    email: "etrac8688@gmail.com",
    password: "123445"
  })
   .then(function(response) {
     console.log(response);
   })
   .catch(function(error) {
    console.log(error);
    alert(error.message)
   })
