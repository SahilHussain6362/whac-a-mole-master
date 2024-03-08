let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;
let clicked = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for(let i=0; i<9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}
function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}
function setMole(){
    if(gameOver) {
        return;
    }
    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./img/monty-mole.png";

    let num = getRandomTile();
    if(currentPlantTile && currentPlantTile.id == num) {
        return;
    }
    clicked = false;
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}
function setPlant(){
    if(gameOver) {
        return;
    }
    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "/img/piranha-plant.png";

    let num = getRandomTile();
    if(currentMoleTile && currentMoleTile.id == num) {
        return;
    }

    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}
function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currentMoleTile && clicked == false){
        score += 10;
        document.getElementById("score").innerText = score.toString();
        clicked = true;
    }
    else if(this == currentPlantTile){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}
function getDiv(pressed){
    let toInt = parseInt(pressed);
    if(toInt == NaN) return "a";
    toInt--;
    return toInt.toString(); 
}
addEventListener("keypress", function(event){
    var pressed = event.key;
    pressed = getDiv(pressed);
    console.log(currentMoleTile.id);
    if(pressed == currentMoleTile.id && clicked == false){
        score += 10;
        document.getElementById("score").innerText = score.toString();
        clicked = true;
    }
    else if (pressed == currentPlantTile.id){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
})