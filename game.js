const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d');


const fireImage = new Image()
fireImage.onload = function(){
    requestAnimationFrame(update)
}
fireImage.src = './fire.png'

const tank = {
    x:50,
    y: 50,
    width: 30,
    height: 30,
    color: "green",
    speed: 4,
    direction: "right",
}





function drawFire(){
    if(fire.visible){
        ctx.drawFire()
    }
}

function drawGameOver(){
    ctx.font="18px Arial";
    ctx.fillStyle =  "red"
 ctx.fillText("game Over", canvas.width /2 - 100, canvas.height/2 )
}

const gameOver = false




function drawTank(){
    ctx.fillStyle = tank.color
    ctx.fillRect(tank.x, tank.y, tank.width, tank.height, )
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function update(){
    clearCanvas()

        drawTank()
        moveTank()
}



function moveTank(){
    switch(tank.direction){
        case "up":
            tank.y  -= tank.speed
            break
            case "down" :
                tank.y += tank.speed
                break
                case "left":
                    tank.x -= tank.speed
                    break
                    case "right":
                        tank.x += tank.speed
                        break
    }
    if(tank.x < 0) tank.x = 0
if(tank.y  < 0) tank.y = 0
if(tank.x + tank.width > canvas.width) tank.x = canvas.width - tank.width
if(tank.y + tank.height > canvas.height) tank.y = canvas.height - tank.height

if(tank.x > canvas.height){
    
}
}




window.addEventListener("keydown", (e) => {
    switch(e.key){
        case 'ArrowUp':
            tank.direction = "up"
            break
            case "ArrowDown":
                tank.direction = "down"
                break
                case "ArrowLeft":
                    tank.direction = "left"
                    break
                    case "ArrowRight":
                        tank.direction = "right"
                        break
                        case "Enter" :

    }
})

function gameLoop(){
    moveTank()
    update()
}


setInterval(gameLoop, 1000/60)
