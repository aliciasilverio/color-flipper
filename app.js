const colors = ["green", "red", "yellow", "aquamarine"]

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// targeting the body
btn.addEventListener('click', function(){
    // getting random number between 0 and 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    // randomizing the amount of items in the "colors" array
    return Math.floor(Math.random() * colors.length);
}