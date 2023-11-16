// Iteration 8: Making scoreboard functional
var scoreBoard = document.querySelector("#score-board")
var againPlay = document.querySelector("#play-again-button")

let mark = window.localStorage.getItem("score")

scoreBoard.innerHTML = mark

againPlay.addEventListener("click",()=>{
    window.location.href = "./game.html"
})
