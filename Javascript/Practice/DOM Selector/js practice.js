// 使用 innerHTML 插入新的 HTML 元素（包含架構）
const headLink = document.querySelector(".testHeadline");
headLink.innerHTML = `<h3>我是修改後的內容，不再是標題囉！</h3>`;

// 使用 innerHTML 插入變數，並運用 template literal 應用變數
let myLink = "https://www.facebook.com";
let myName = "david";
let catName = "crema";
let aboutMe = document.querySelector(".myProfile");
aboutMe.innerHTML = `<p>我是 ${myName}，我養了一隻貓咪叫做 ${catName}，這是我的<a href=${myLink}>個人網站</a></p>`;

// 使用 setAttribute 新增 HTML 標籤屬性
const myLink1 = document.querySelector(".akai");
myLink1.setAttribute("href", "https://www.yahoo.com");
myLink1.setAttribute("class", "red");

const myLink2 = document.querySelector(".midori");
myLink2.setAttribute("href", "https://www.facebook.com");

// 使用 querySelectorAll 選取多個 HTML 元素並修改內容/樣式
const multiSelector = document.querySelectorAll(".testtest");
const multiSelector2 = document.querySelectorAll(".testtest2");
multiSelector[1].innerHTML = `<h5>我把它改掉囉！</h5>`;
multiSelector2[0].innerHTML = `<h1>測試看看分成兩個選取器！</h1>`;
multiSelector2[1].innerHTML = `<p>測試一下內容囉</p>`;

// 以下此行無效，需確認 setAttribute method 是否可以用於選取多個 element
// 或是要新增 href 屬性時，原本的元素必須已具備 <a> 的屬性？
multiSelector[0].innerHTML = `<a href="https://www.facebook.com">肚子餓了，突然好想吃燒烤a</a>`;
multiSelector[0].setAttribute("href", "https://www.google.com");

// 運用 .innerHTML、.textContent、.getAttribute 取值方法
console.log(multiSelector[0].innerHTML);
console.log(myLink2.getAttribute("href"));
console.log(aboutMe.textContnet);
console.log(multiSelector[0].textContent);

// list 表單元素取值/賦值練習
const engText = document.querySelector(".txt");
engText.value = "Please input your post code here.";
console.log(engText.value);

const districtListStart = document.querySelector(".districtList");
districtListStart.value = "文山區";
console.log(districtListStart.value);

const valueSelector = document.querySelectorAll(".districtList .value");
console.log(valueSelector);