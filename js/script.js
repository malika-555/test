
const columnPercent = document.querySelectorAll(".column__percent");

columnPercent.forEach((item,index) => {
 if (item.innerHTML.replace('%', '') < 0) { // вытаскиваем число без %
    item.classList.add("_down");
 }  
})

const progressPercent = document.querySelectorAll(".progress__percent");

progressPercent.forEach((item,index) => {
 if (item.innerHTML.substring(0, 1) == "-") { // вытаскиваем первый символ в строке со значением
    item.classList.add("_down");
 }  
})


const circle = document.querySelectorAll(".circle");

circle.forEach((item,index) => {
 if (item.innerHTML.substring(0, 1) == "0") {
   item.classList.add("_empty");
 }  
})
