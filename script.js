//! SCORES
const playerOneScore = document.querySelector(".person1");
const playerTwoScore = document.querySelector(".person2");
const gameScore = document.querySelector("#scoreValue");

//! BUTTONS
const playerOneBtn = document.querySelector("#playerOneBtn");
const playerTwoBtn = document.querySelector("#playerTwoBtn");
const resetBtn = document.querySelector("#resetBtn");

const body = document.querySelector("body");

gameScore.value = localStorage.getItem("gameScore") || 0;

playerOneBtn.addEventListener("click", ()=>{
    playerOneScore.textContent++
    if(playerOneScore.textContent==gameScore.value){
        playerOneBtn.classList.add("invisible");
        playerTwoBtn.classList.add("invisible");
        playerOneScore.classList.add("text-success");
        playerTwoScore.classList.add("text-danger");
    }
});

playerTwoBtn.addEventListener("click", ()=>{
    playerTwoScore.textContent++
    if(playerTwoScore.textContent==gameScore.value){
        playerOneBtn.classList.add("invisible");
        playerTwoBtn.classList.add("invisible");
        playerTwoScore.classList.add("text-success");
        playerOneScore.classList.add("text-danger");
    }
});

resetBtn.addEventListener("click", ()=>{
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneScore.classList.remove("text-danger","text-success");
    playerTwoScore.classList.remove("text-danger","text-success");
    playerOneBtn.classList.remove("invisible");
    playerTwoBtn.classList.remove("invisible");
});

gameScore.addEventListener("click", () => {
    if (gameScore.value.trim() !== ""){
        localStorage.setItem("gameScore",gameScore.value);
    }
})