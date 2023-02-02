//https://hexschool.github.io/ajaxHomework/data.json

let ary = [];

axios.get('https://hexschool.github.io/ajaxHomework/data.json')
    .then(function(response) {
        console.log(response);
        ary = response.data;
        console.log(response.data);
        console.log("資料已回傳");
        renderData();
    })
    .catch(function(error) {
        alert(error.message);
    });


function renderData(){
    console.log(ary);
    const title = document.querySelector(".title");
    title.textContent = ary[0].name;
}
console.log(ary);