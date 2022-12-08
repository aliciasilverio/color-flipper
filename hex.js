const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
// loops through the array "hex"
let hexColor = '#';
for(let i = 0; i < 6; i++){
// hexColor -> # hex -> "6 random numbers here"
    hexColor += hex[getRandomNumber()];
}
// replace blank color with new hex color
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}