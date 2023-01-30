// 陣列宣告區
let data = [30, 23, 43, 55, 60];
let arrayData = [
    {
        name: "David",
        age: 27,
        gender: "male",
        nationality: "Taiwan",
        profession: "F2E Engineer"
    },
    {
        name: "Eric",
        age: 65,
        gender: "male",
        nationality: "USA",
        profession: "English Teacher"
    },
    {
        name: "Vera",
        age: 28,
        gender: "female",
        nationality: "Taiwan",
        profession: "Java Web Application Engineer"
    },
    {
        name: "Debbie",
        age: 30,
        gender: "female",
        nationality: "Taiwan",
        profession: "English Teacher",
    },
    {
        name: "Ashely",
        age: 30,
        gender: "female",
        nationality: "Taiwan",
        profession: "Flight Attendent"
    }
]

let dataSum = 0;
let evenNum = 0;
let newArray = [];
let maleSum = 0;
let femaleSum = 0;

//陣列 item 加總
data.forEach(function(item, index) {
    dataSum += item;
    console.log(dataSum);
})
// 搜尋陣列中 item 為偶數的數量，並塞到新的陣列中
data.forEach(function(item, index) {
    if(item % 2 == 0) {
        evenNum++;
        newArray.push(item);
    }
})
console.log(newArray);
// 取出陣列中物件的所有值
arrayData.forEach(function(item, index) {
    console.log(item.name, item.profession, item.nationality);
})

// 男女人數計算器
arrayData.forEach(function(item, index) {
    if(item.gender == "male") {
        maleSum++;
    } else if(item.gender == "female") {
        femaleSum++
    }
    console.log("男性的人數有"+ maleSum);
    console.log("女性的人數有"+ femaleSum);
})
// 男女人數計算器（使用物件管理變數版本）
let peopleData = {
        male: 0,
        female: 0
    }


arrayData.forEach(function(item, index) {
    if(item.gender == "male") {
        peopleData.male += 1;
    } else if(item.gender == "female") {
        peopleData.female += 1;
    }
    console.log(peopleData);
})


// 複習：取出陣列中單個物件的值
console.log(arrayData[2].name);
console.log(arrayData[1].name);