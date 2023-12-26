
// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1 = document.querySelector("#number1")
var num2 = document.querySelector("#number2")
var num3 = document.querySelector("#number3")

var random1 = Math.floor(Math.random()*101)
var random2 = Math.floor(Math.random()*101)

// Iteration 3: Creating variables required to make the game functional
var plus = document.querySelector("#plus")
var minus = document.querySelector("#minus")
var multiply = document.querySelector("#mul")
var divide = document.querySelector("#divide")
var modulus = document.querySelector("#modulus")
var timer = document.querySelector("#timer")

var number;
var swap;


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
// Iteration 5: Creating a randomise function to make the game functional
function gameStart(){
    random1 = Math.floor(Math.random()*101)
    random2 = Math.floor(Math.random()*101)
    var random3 = Math.floor(Math.random()*5)

    
    if (random1 < random2){
        
        swap = random1
        random1 = random2
        random2 = swap  
    }
    if (random3 === 1){
        number = random1 + random2
    }else if(random3 === 2){
        number = random1 - random2
    }else if(random3 === 3){
        number = random1 * random2
    }else if(random3 === 4){
        number = Math.floor(random1/random2)
    }else if(random3 === 5){
        number = random1 % random2
    }else{
        gameStart()
    }
    num1.innerHTML = random1
    num2.innerHTML = random2
    num3.innerHTML = number
}
gameStart()

// Iteration 6: Making the Operators (button) functional

var score = 0;
var time = 16;

plus.addEventListener("click",()=>{
    if(random1 + random2 === number){
        score++
        time = 16;
        window.localStorage.setItem("score",score)

        gameStart()


    }
    else{
        window.location.href = "gameover.html"  
    }
})

minus.addEventListener("click",()=>{
    if(random1 - random2 === number){
        score++
        time = 16;
        window.localStorage.setItem("score",score)

        gameStart()
    }
    else{
        window.location.href = "gameover.html"  
    }
})

multiply.addEventListener("click",()=>{
    if(random1 * random2 === number){
        score++
        time = 16;
        window.localStorage.setItem("score",score)

        gameStart()
    }
    else{
        window.location.href = "gameover.html"  
    }
})

divide.addEventListener("click",()=>{
    if(Math.floor(random1 / random2) === number){
        score++
        time = 16;
        window.localStorage.setItem("score",score)

        gameStart()
    }
    else{
        window.location.href = "gameover.html"  
    }
})

modulus.addEventListener("click",()=>{
    if(random1 % random2 === number){
        score++
        time = 16;
        window.localStorage.setItem("score",score)

        gameStart()
    }
    else{
        window.location.href = "gameover.html"  
    }
})

// Iteration 7: Making Timer functional

function updateTime(){
    
    if(time > 0){
        time --;
        timer.innerHTML = time;
    }else{
        window.location.href = "gameover.html"
    }
}

setInterval(updateTime, 2000)
