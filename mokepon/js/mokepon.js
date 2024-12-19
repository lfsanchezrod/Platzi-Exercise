/*
¿Qué es backend?
Clase 71/84 • Curso Gratis de Programación Básica
*/

const sectionAttackSelect = document.getElementById("select-attack")
const sectionReset = document.getElementById("reset")
const spanPetAttackPc = document.getElementById("attack-pc")
const spanLivesPlayer = document.getElementById("player-live")
const spanLivesEnenemy = document.getElementById("pc-live")
const sectionMessage = document.getElementById("message")
const sectionMessagePlayer = document.getElementById("message-attack-player")
const sectionMessagePc = document.getElementById("message-attack-pc")
const buttonPlayerPet = document.getElementById('btn-pet')
const buttonReset = document.getElementById('btn-reset')

const spanPetPlayer = document.getElementById("pet-player")
const spanPetPc = document.getElementById("pet-pc")

const sectionPetPlayer = document.getElementById("select-pet")
const containerCards = document.getElementById("containerCards")

const containerAttacks = document.getElementById("containerAttacks")


const sectionViewMap = document.getElementById("view-map")
const map = document.getElementById("map")


//Se declaran las variables desde un inicio por recomendación
let mokepones = [] //let mokepones = []
let mokeponPlayerSelect //let mascotaJugador
let playerAttackGlobal //let ataquesMokepon Revisar duplicidad
let pcAttackGlobal// = [] //let ataquesMokeponEnemigo
let playerLivesGlobal = 3 //let vidasJugador = 3
let playerPetObject
let pcLivesGlobal = 3 //let vidasEnemigo = 3
let optionOfMokepons //opcionDeMokepones
let inputPikashu //let inputHipodoge
let inputPaladio //let inputCapipepo
let inputNico //let inputRatigueya
let inputCharchar //Nuevo Mokepon
let attacksMokepon //let attacksMokepon
let botones = [] //let botones = []
let playerAttack = [] //let ataqueJugador =[]
let pcAttack = [] //let ataqueEnemigo = []
let btnFire //let botonFuego
let btnGround //let botonTierra
let btnWater  //let botonAgua
let enemyVictories = 0
let playerVictories = 0
let indexPlayerAttack
let indexEnemyAttack

let canvas = map.getContext("2d")
let interval
let mapBackground = new Image()
mapBackground.src = './assets/mokemap.png'

let heightWeSeek
let mapWidth = window.innerWidth - 20
const maximumMapWidth = 350

if (mapWidth > maximumMapWidth) {
    mapWidth = maximumMapWidth - 20
}

heightWeSeek = mapWidth * 600 / 800

map.width = mapWidth
map.height = heightWeSeek

// Se crea un nuevo objeto en el cual se van a agregar las caracteristicas de nuestro Mokepon

class Mokepon {
    constructor(name, photo, life, photoMap) {
        this.name = name
        this.photo = photo
        this.life = life
        this.attacks = []
        this.whidth = 40
        this.high = 40
        this.x = random(0, map.width - this.whidth)
        this.y = random(0, map.height - this.high)
        this.mapPhoto = new Image()
        this.mapPhoto.src = photoMap
        this.speedX = 0
        this.speedY = 0
    }

    paintMokepon() {
        canvas.drawImage(
            this.mapPhoto,
            this.x,
            this.y,
            this.whidth,
            this.high
        )
    }
}


let pikashu = new Mokepon("Pikashu", "./assets/mokepons_mokepon_capipepo_attack.png", 5, './assets/capipepo.png')
let paladio = new Mokepon("Paladio", "./assets/mokepons_mokepon_hipodoge_attack.png", 5, './assets/hipodoge.png')
let nico = new Mokepon("Nico", "./assets/mokepons_mokepon_ratigueya_attack.png", 5, './assets/ratigueya.png')
let charchar = new Mokepon("Charchar", "./assets/mokepons_mokepon_charchar_attack.png", 5, './assets/charchar.png')

let pikashuEnemy = new Mokepon("Pikashu", "./assets/mokepons_mokepon_capipepo_attack.png", 5, './assets/capipepo.png')
let paladioEnemy = new Mokepon("Paladio", "./assets/mokepons_mokepon_hipodoge_attack.png", 5, './assets/hipodoge.png')
let nicoEnemy = new Mokepon("Nico", "./assets/mokepons_mokepon_ratigueya_attack.png", 5, './assets/ratigueya.png')
let charcharEnemy = new Mokepon("Charchar", "./assets/mokepons_mokepon_charchar_attack.png", 5, './assets/charchar.png')


pikashu.attacks.push(
    { name: '💧', id: 'btn-water' },
    { name: '💧', id: 'btn-water' },
    { name: '💧', id: 'btn-water' },
    { name: '🪨', id: 'btn-ground' },
    { name: '🔥', id: 'btn-fire' }
)

pikashuEnemy.attacks.push(
    { name: '💧', id: 'btn-water' },
    { name: '💧', id: 'btn-water' },
    { name: '💧', id: 'btn-water' },
    { name: '🪨', id: 'btn-ground' },
    { name: '🔥', id: 'btn-fire' }
)

paladio.attacks.push(
    { name: '🪨', id: 'btn-ground' },
    { name: '🪨', id: 'btn-ground' },
    { name: '💧', id: 'btn-water' },
    { name: '🪨', id: 'btn-ground' },
    { name: '🔥', id: 'btn-fire' }
)

paladioEnemy.attacks.push(
    { name: '🪨', id: 'btn-ground' },
    { name: '🪨', id: 'btn-ground' },
    { name: '💧', id: 'btn-water' },
    { name: '🪨', id: 'btn-ground' },
    { name: '🔥', id: 'btn-fire' }
)

nico.attacks.push(
    { name: '🔥', id: 'btn-fire' },
    { name: '🪨', id: 'btn-ground' },
    { name: '💧', id: 'btn-water' },
    { name: '🪨', id: 'btn-ground' },
    { name: '🔥', id: 'btn-fire' }
)

nicoEnemy.attacks.push(
    { name: '🔥', id: 'btn-fire' },
    { name: '🪨', id: 'btn-ground' },
    { name: '💧', id: 'btn-water' },
    { name: '🪨', id: 'btn-ground' },
    { name: '🔥', id: 'btn-fire' }
)

charchar.attacks.push(
    { name: '🔥', id: 'btn-fire' },
    { name: '🔥', id: 'btn-fire' },
    { name: '💧', id: 'btn-water' },
    { name: '🪨', id: 'btn-water' },
    { name: '🔥', id: 'btn-fire' }
)

charcharEnemy.attacks.push(
    { name: '🔥', id: 'btn-fire' },
    { name: '🔥', id: 'btn-fire' },
    { name: '💧', id: 'btn-water' },
    { name: '🪨', id: 'btn-water' },
    { name: '🔥', id: 'btn-fire' }
)

mokepones.push(pikashu, paladio, nico, charchar)

function playGame() {
    sectionAttackSelect.style.display = "none"
    sectionViewMap.style.display = "none"
    //canvas.fillRect(5,15,20,40)
    //sectionReset.style.display = "none"

    mokepones.forEach((mokepon) => {
        optionOfMokepons = `
        <input type="radio" name="pet" id=${mokepon.name} />
        <label class="mokepon-card" for=${mokepon.name}>
            <p>${mokepon.name}</p>
            <img src=${mokepon.photo} alt=${mokepon.name}/>
        </label>
        `
        containerCards.innerHTML += optionOfMokepons
    })

    inputPikashu = document.getElementById("Pikashu")
    inputPaladio = document.getElementById("Paladio")
    inputNico = document.getElementById("Nico")
    inputCharchar = document.getElementById("Charchar")

    buttonPlayerPet.addEventListener('click', selectPlayerPet)
    buttonReset.addEventListener('click', resetGame)
}

function selectPlayerPet() {
    /* 
        let imgPikashu = new Image()
    
        imgPikashu.src = pikashu.photo */


    /*     canvas.drawImage(
            pikashu.mapPhoto,
            pikashu.x,
            pikashu.y,
            pikashu.whidth,
            pikashu.high
        )
     */

    if (inputPikashu.checked) {
        sectionPetPlayer.style.display = 'none'
        //sectionAttackSelect.style.display = 'flex'

        mokeponPlayerSelect = inputPikashu.id
        extractAttacks(mokeponPlayerSelect)
        startMap()
        spanPetPlayer.innerHTML = inputPikashu.id
    } else if (inputPaladio.checked) {
        sectionPetPlayer.style.display = 'none'
        //sectionAttackSelect.style.display = 'flex'

        spanPetPlayer.innerHTML = inputPaladio.id
        mokeponPlayerSelect = inputPaladio.id
        extractAttacks(mokeponPlayerSelect)
        startMap()
       
    } else if (inputNico.checked) {
        sectionPetPlayer.style.display = 'none'
        //sectionAttackSelect.style.display = 'flex'

        spanPetPlayer.innerHTML = inputNico.id
        mokeponPlayerSelect = inputNico.id
        extractAttacks(mokeponPlayerSelect)
        startMap()
       
    } else if (inputCharchar.checked) {
        sectionPetPlayer.style.display = 'none'
        //sectionAttackSelect.style.display = 'flex'

        spanPetPlayer.innerHTML = inputCharchar.id
        mokeponPlayerSelect = inputCharchar.id
        extractAttacks(mokeponPlayerSelect)
        startMap()
       
    } else {
        alert("Select pet")
    }
}

function extractAttacks(petPlayer) {
    let attacks
    for (let i = 0; i < mokepones.length; i++) {
        if (petPlayer === mokepones[i].name) {
            attacks = mokepones[i].attacks
        }

    }
    showAttacks(attacks)
}

function showAttacks(attacks) {
    attacks.forEach((ataque) => {
        attacksMokepon = `
        <button class="btn-select-attack ${ataque.id}">${ataque.name}</button>
        `
        containerAttacks.innerHTML += attacksMokepon
    })

    btnWater = document.getElementsByClassName("btn-water")
    btnGround = document.getElementsByClassName("btn-ground")
    btnFire = document.getElementsByClassName("btn-fire")
    botones = document.querySelectorAll(".btn-select-attack")
}

function attackSequence() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === "🔥") {
                playerAttack.push("Fire")
                boton.style.background = "#112f58"
                console.log(playerAttack);
                boton.disabled = true

            } else if (e.target.textContent === "💧") {
                playerAttack.push("Water")
                boton.style.background = "#112f58"
                console.log(playerAttack);
                boton.disabled = true

            } else {
                playerAttack.push("Ground")
                boton.style.background = "#112f58"
                console.log(playerAttack);
                boton.disabled = true
            }
            attackPc()
            console.log("Número de ataques enemigos: " + playerAttack.length);
        })
    })
}

function selectPcPet(enemy) {
    //let randomPcPet = random(0, mokepones.length - 1)

    spanPetPc.innerHTML = enemy.name
    pcAttackGlobal = enemy.attacks
    //console.log("Es el ataque enemigo = " + pcAttackGlobal);

    //clearInterval(paintCanvas)
    attackSequence()
}

function attackPc() {
    //console.log(pcAttackGlobal.length);
    let randomAttack = random(0, pcAttackGlobal.length - 1)
    //RETO: OPTIMIZAR EL CODIGO PARA USAR EL ARREGLO pcAttackGlobal
    if (randomAttack == 0 || randomAttack == 1) {
        pcAttack.push('Fire')
    } else if (randomAttack == 2 || randomAttack == 3) {
        pcAttack.push('Water')
    } else {
        pcAttack.push('Ground')
    }
    console.log("Esté es el ataque enemigo: " + pcAttack)
    startFight()
}

function startFight() {
    if (playerAttack.length === 5) {
        battle()
    }
}

function indexBothOpponents(player, enemy) {
    indexPlayerAttack = playerAttack[player]
    indexEnemyAttack = pcAttack[enemy]
}

function battle() {
    for (let index = 0; index < playerAttack.length; index++) {
        if (playerAttack[index] === pcAttack[index]) {
            indexBothOpponents(index, index)
            createMessage("TIE")
            //playerVictories++
            spanLivesPlayer.innerHTML = playerVictories
        } else if (playerAttack[index] === 'Fire' && pcAttack[index] === 'Ground') {
            indexBothOpponents(index, index)
            createMessage("WIN")
            playerVictories++
            spanLivesPlayer.innerHTML = playerVictories
        } else if (playerAttack[index] === 'Water' && pcAttack[index] === 'Fire') {
            indexBothOpponents(index, index)
            createMessage("WIN")
            playerVictories++
            spanLivesPlayer.innerHTML = playerVictories
        } else if (playerAttack[index] === 'Ground' && pcAttack[index] === 'Water') {
            indexBothOpponents(index, index)
            createMessage("WIN")
            playerVictories++
            spanLivesPlayer.innerHTML = playerVictories
        } else {
            indexBothOpponents(index, index)
            createMessage("LOSE")
            enemyVictories++
            spanLivesEnenemy.innerHTML = enemyVictories
        }
    }

    checkLife()
}

function checkLife() {
    if (playerVictories === enemyVictories) {
        createFinalMessage("Esto fue un empate")
    } else if (playerVictories > enemyVictories) {
        createFinalMessage("FELICITACIONES!! Ganaste")
    } else {
        createFinalMessage("Lo siento, perdiste")
    }
}

function createMessage(resultBattle) {
    let newAttackPlayer = document.createElement("p")
    let newAttackPc = document.createElement("p")
    sectionMessage.innerHTML = resultBattle
    newAttackPlayer.innerHTML = indexPlayerAttack
    newAttackPc.innerHTML = indexEnemyAttack

    sectionMessagePlayer.appendChild(newAttackPlayer)
    sectionMessagePc.appendChild(newAttackPc)
}

function createFinalMessage(finalResult) {
    sectionMessage.innerHTML = finalResult

    sectionReset.style.display = "block"
}

function resetGame() {
    location.reload()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function paintCanvas() {
    //console.log(playerPetObject);

    playerPetObject.x = playerPetObject.x + playerPetObject.speedX
    playerPetObject.y = playerPetObject.y + playerPetObject.speedY
    canvas.clearRect(0, 0, map.width, map.height)
    canvas.drawImage(mapBackground, 0, 0, map.width, map.height)


    playerPetObject.paintMokepon()
    paladioEnemy.paintMokepon()
    pikashuEnemy.paintMokepon()
    charcharEnemy.paintMokepon()
    nicoEnemy.paintMokepon()
    //canvas.clearReact(0,0,map.whidth,map.height)
    if (playerPetObject.speedX !== 0 || playerPetObject.speedY !== 0) {
        checkCollision(pikashuEnemy)
        checkCollision(paladioEnemy)
        checkCollision(charcharEnemy)
        checkCollision(nicoEnemy)
    }
}

function moveRight() {
    playerPetObject.speedX = 5
    //paintCanvas()
}

function moveLeft() {
    playerPetObject.speedX = -5
    //paintCanvas()
}

function moveDown() {
    playerPetObject.speedY = 5
    //paintCanvas()
}

function moveUp() {
    playerPetObject.speedY = -5
    //paintCanvas()
}

function stopMove() {
    const myMokepon = obtainPetObject()
    playerPetObject.speedX = 0
    playerPetObject.speedY = 0
}

function aKeyIsPressed(event) {
    //console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
            moveUp()
            break;

        case 'ArrowDown':
            moveDown()
            break;

        case 'ArrowLeft':
            moveLeft()
            break;

        case 'ArrowRight':
            moveRight()
            break;

        default:
            break;
    }
}


function startMap() {
/*     map.width = 320
    map.height = 240 */
    playerPetObject = obtainPetObject(mokeponPlayerSelect)
    console.log(playerPetObject, mokeponPlayerSelect);

    sectionViewMap.style.display = 'flex'
    interval = setInterval(paintCanvas, 50)
    window.addEventListener('keydown', aKeyIsPressed)
    window.addEventListener('keyup', stopMove)
}

function obtainPetObject() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mokeponPlayerSelect === mokepones[i].name) {
            return mokepones[i]
        }
    }
}

function checkCollision(enemy) {
    const upEnemy = enemy.y
    const downEnemy = enemy.y + enemy.high
    const rightEnemy = enemy.x + enemy.whidth
    const leftEnemy = enemy.x

    const upPet =
        playerPetObject.y
    const downPet =
        playerPetObject.y + playerPetObject.high
    const rightPet =
        playerPetObject.x + playerPetObject.whidth
    const leftPet =
        playerPetObject.x

    if (downPet < upEnemy || upPet > downEnemy || rightPet < leftEnemy || leftPet > rightEnemy
    ) {
        return
    }
    console.log("Colisión");
    
    stopMove()
    clearInterval(interval)
    sectionAttackSelect.style.display = 'flex'
    sectionViewMap.style.display = 'none'
    selectPcPet(enemy)
}

window.addEventListener("load", playGame)