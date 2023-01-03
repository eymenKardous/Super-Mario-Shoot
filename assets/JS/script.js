let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');
let startButton = document.querySelector('#play')

let marioX = 30;
let marioY = 117;
let marioHeight = 8;
let marioWidth = 12;

let ennemieX = (canvas.width - 40);
let ennemieY = random(-20, -100)

let pxMove = 2;

let doorX = canvas.width - 15
let doorY = 111
let doorHeight = 15;
let doorWidth = 20

function movePlayer(e) {
    document.addEventListener('keydown', (e) => {
        let keyCode = e.keyCode
        switch (keyCode) {
            case 37:
                marioX -= 1
                break;
            case 39:
                marioX += 1
                if (marioX == canvas.width-20) {
                    alert('Victoire !!')
                    canvas.setAttribute('style', 'display:none')
                }
                break;
            case 38:
                marioY -= 7
                break
            case 40:
                marioY += 7
            default:
                break;
        }
    })
}

function drawPlayer() {
    ctx.beginPath()
    let mario = new Image();
    mario.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(mario, marioX, marioY, marioHeight, marioWidth)
    }
    mario.src = './assets/IMG/mario.gif'
    ctx.closePath();
} drawPlayer()


function random(min, max) {
    return Math.floor(Math.random() * (canvas.height - 30));
}


function moveEnnemie() {
    ennemieX -= pxMove
    if (ennemieX == canvas.width - canvas.width) {
        ennemieX = canvas.width
        ennemieY = random(-20, -100)
    }
}

function drawEnnemie() {
    ctx.beginPath();
    ctx.rect(ennemieX, ennemieY, 15, 6);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawDoor() {
    ctx.beginPath()
    let door = new Image();
    door.onload = () => {
        ctx.drawImage(door, doorX, doorY, doorHeight, doorWidth)
    }
    door.src = './assets/IMG/tuyau.png'
    ctx.closePath();  
}

function loose() {
    if (condition) {
        
    }
}

function play() {
    startButton.disabled = true;
    drawPlayer()
    drawEnnemie()
    moveEnnemie()
    drawDoor()
    window.requestAnimationFrame(play);
}
movePlayer()
