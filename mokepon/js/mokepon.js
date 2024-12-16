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


//Se declaran las variables desde un inicio por recomendación
let mokepones = [] //let mokepones = []
let mokeponPlayerSelect //let mascotaJugador
let playerAttackGlobal //let ataquesMokepon Revisar duplicidad
let pcAttackGlobal// = [] //let ataquesMokeponEnemigo
let playerLivesGlobal = 3 //let vidasJugador = 3
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

// Se crea un nuevo objeto en el cual se van a agregar las caracteristicas de nuestro Mokepon

class Mokepon {
    constructor(name, photo, life) {
        this.name = name
        this.photo = photo
        this.life = life
        this.attacks = []
    }
}


let pikashu = new Mokepon("Pikashu", "./assets/mokepons_mokepon_capipepo_attack.png", 5)
let paladio = new Mokepon("Paladio", "./assets/mokepons_mokepon_hipodoge_attack.png", 5)
let nico = new Mokepon("Nico", "./assets/mokepons_mokepon_ratigueya_attack.png", 5)
let charchar = new Mokepon("Charchar", "./assets/mokepons_mokepon_charchar_attack.png", 5)


pikashu.attacks.push(
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

nico.attacks.push(
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

mokepones.push(pikashu, paladio, nico, charchar)

function playGame() {
    sectionAttackSelect.style.display = "none"
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


    if (inputPikashu.checked) {
        sectionPetPlayer.style.display = 'none'
        sectionAttackSelect.style.display = 'flex'
        spanPetPlayer.innerHTML = inputPikashu.id
        mokeponPlayerSelect = inputPikashu.id
        extractAttacks(mokeponPlayerSelect)
        selectPcPet()
    } else if (inputPaladio.checked) {
        sectionPetPlayer.style.display = 'none'
        sectionAttackSelect.style.display = 'flex'
        spanPetPlayer.innerHTML = inputPaladio.id
        mokeponPlayerSelect = inputPaladio.id
        extractAttacks(mokeponPlayerSelect)
        selectPcPet()
    } else if (inputNico.checked) {
        sectionPetPlayer.style.display = 'none'
        sectionAttackSelect.style.display = 'flex'
        spanPetPlayer.innerHTML = inputNico.id
        mokeponPlayerSelect = inputNico.id
        extractAttacks(mokeponPlayerSelect)
        selectPcPet()
    } else if (inputCharchar.checked) {
        sectionPetPlayer.style.display = 'none'
        sectionAttackSelect.style.display = 'flex'
        spanPetPlayer.innerHTML = inputCharchar.id
        mokeponPlayerSelect = inputCharchar.id
        extractAttacks(mokeponPlayerSelect)
        selectPcPet()
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
                
            } else if (e.target.textContent === "💧") {
                playerAttack.push("Water")
                boton.style.background = "#112f58"
                console.log(playerAttack);

            } else {
                playerAttack.push("Ground")
                boton.style.background = "#112f58"
                console.log(playerAttack);
            }
            attackPc()
            console.log(playerAttack.length);
        })
    })
}

function selectPcPet() {
    let randomPcPet = random(0, mokepones.length - 1)
    
    spanPetPc.innerHTML = mokepones[randomPcPet].name
    pcAttackGlobal = mokepones[randomPcPet].attacks
    console.log("Es el ataque enemigo = " + pcAttackGlobal);
    

    attackSequence()
}

function attackPc() {
    console.log(pcAttackGlobal.length);
        let randomAttack = random(0, pcAttackGlobal.length -1)
        
        if (randomAttack == 0 || randomAttack == 1) {
            pcAttack.push('Fire')
        } else if (randomAttack == 2 || randomAttack == 3) {
            pcAttack.push('Water')
        } else {
            pcAttack.push('Ground')
        }
        console.log(pcAttack)
        startFight()
    }

function startFight(){
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
        if(playerAttack[index] === pcAttack[index]) {
            indexBothOpponents(index, index)
            createMessage("TIE")
            //playerVictories++
            spanLivesPlayer.innerHTML = playerVictories
        } else if (playerAttack[index] === 'Fire' && pcAttack[index] === 'Ground') {
            indexBothOpponents(index, index)
            createMessage("WIN")
            playerVictories++
            spanLivesPlayer.innerHTML = playerVictories
        } else if (playerAttack[index] ==='Water' && pcAttack[index] === 'Fire') {
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

function checkLife(){
    if(playerVictories === enemyVictories){
        createFinalMessage("Esto fue un empate")
    }else if(playerVictories > enemyVictories ){
        createFinalMessage("FELICITACIONES!! Ganaste")
    }else{
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
    
    for (const button of botones) {
        button.disabled = true
    }
    sectionReset.style.display = "block"
}

function resetGame() {
    location.reload()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", playGame)