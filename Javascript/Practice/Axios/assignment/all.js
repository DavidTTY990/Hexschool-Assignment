const account = document.querySelector(".account");
const password = document.querySelector(".password");
const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");

// 設計註冊函式
function callSignup() {
  let userInfo = {
    email: account.value,
    password: password.value
  };
  // 簡易輸入內容驗證（是否有輸入值），帳號格式是否正確則由 api 回覆
  if (account.value == "" || password.value == "") {
    alert("請填寫正確資訊！");
    return; //終止下方的函式繼續執行（重要）
  }
  // call axios 六角的範例 api (signup)
  axios
    .post("https://hex-escape-room.herokuapp.com/api/user/signup", userInfo)
    .then(function (response) {
      console.log(response);
      // alert(response.message) //undefined （不知道原因，第 26 行 error 就可以這樣寫？？
      alert(response.data.message);
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message);
    });
}

// 設置「註冊」按鈕的事件監聽
signupBtn.addEventListener("click", function (e) {
  callSignup();
});

// 設計登入函式
function callSignin() {
  let userInfo = {
    email: account.value,
    password: password.value
  };
  
  if (account.value == "" || password.value == "") {
    alert("請填寫正確資訊！");
    return;
  }
  // call axios 六角的範例 api (signin)
  axios
    .post("https://hex-escape-room.herokuapp.com/api/user/signin", userInfo)
    .then(function (response) {
      console.log(response);
      alert(response.data.message);
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message);
    });
};
// 設置「登入」按鈕的事件監聽
signinBtn.addEventListener("click", function (e) {
  callSignin();
});

// 設置「顯示密碼」功能
function showPassword() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

//optimization notes:
//1. 登入/註冊失敗時將輸入框的樣式改為紅邊

// 準備用函式
// function callSignin() {
//     let testSignup1 = {
//       email: "roger911@gmail.com",
//       password: "12345",
//     };

//     axios.post("https://hex-escape-room.herokuapp.com/api/user/signin", testSignup1)
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
