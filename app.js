const colors = ["Green", "Red", "Yellow", "Blue", "Orange", "Violet"]

const simpleClass = document.querySelector('.simple');
const hexClass = document.querySelector('.hex');

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

function getRandomNumber(){
    // randomizing the amount of items in the "colors" array
    return Math.floor(Math.random() * colors.length);
}

// targeting the body
btn.addEventListener('click', function(){

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});




