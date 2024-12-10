const sectionAttackSelect = document.getElementById("select-attack")
const sectionReset = document.getElementById("reset")
const spanPetAttackPc = document.getElementById("attack-pc")
const spanLivesPlayer = document.getElementById("player-live")
const spanLivesEnenemy = document.getElementById("pc-live")
const sectionMessage = document.getElementById("message")
const sectionMessagePlayer = document.getElementById("message-attack-player")
const sectionMessagePc = document.getElementById("message-attack-pc")

const spanPetPlayer = document.getElementById("pet-player")
const spanPetPc = document.getElementById("pet-pc")

const sectionPetPlayer = document.getElementById("select-pet")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []
let mokeponPlayerSelect
let playerAttackGlobal
let pcAttackGlobal
let playerLivesGlobal = 3
let pcLivesGlobal = 3
let opcionDeMokepones
let inputPikashu
let inputPaladio
let inputNico
let inputCharchar
let ataquesMokepon
let botones = []
let ataqueJugador = []
let btnFire
let btnGround
let btnWater

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}


let pikashu = new Mokepon("Pikashu", "./assets/mokepons_mokepon_capipepo_attack.png", 5)

let paladio = new Mokepon("Paladio", "./assets/mokepons_mokepon_hipodoge_attack.png", 5)

let nico = new Mokepon("Nico", "./assets/mokepons_mokepon_ratigueya_attack.png", 5)

let charchar = new Mokepon("Charchar", "./assets/mokepons_mokepon_charchar_attack.png", 5)


pikashu.ataques.push(
    { nombre: '💧', id: 'btn-water' },
    { nombre: '💧', id: 'btn-water' },
    { nombre: '💧', id: 'btn-water' },
    { nombre: '🪨', id: 'btn-ground' },
    { nombre: '🔥', id: 'btn-fire' }
)

paladio.ataques.push(
    { nombre: '🪨', id: 'btn-ground' },
    { nombre: '🪨', id: 'btn-ground' },
    { nombre: '💧', id: 'btn-water' },
    { nombre: '🪨', id: 'btn-ground' },
    { nombre: '🔥', id: 'btn-fire' }
)

nico.ataques.push(
    { nombre: '🔥', id: 'btn-fire' },
    { nombre: '🪨', id: 'btn-ground' },
    { nombre: '💧', id: 'btn-water' },
    { nombre: '🪨', id: 'btn-ground' },
    { nombre: '🔥', id: 'btn-fire' }
)

charchar.ataques.push(
    { nombre: '🔥', id: 'btn-fire' },
    { nombre: '🔥', id: 'btn-fire' },
    { nombre: '💧', id: 'btn-water' },
    { nombre: '🪨', id: 'btn-water' },
    { nombre: '🔥', id: 'btn-fire' }
)

mokepones.push(pikashu, paladio, nico, charchar)

function btnGnr(element, funcionespecial) {
    let btnGeneral = document.getElementById(element)
    btnGeneral.addEventListener("click", funcionespecial)
}

function playGame() {
    sectionAttackSelect.style.display = "none"
    sectionReset.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="pet" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}/>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })


    inputPikashu = document.getElementById("Pikashu")
    inputPaladio = document.getElementById("Paladio")
    inputNico = document.getElementById("Nico")
    inputCharchar = document.getElementById("Charchar")


    btnGnr("btn-pet", selectPlayerPet)
    btnGnr("btn-reset", resetGame)
}

function attackFire() {
    playerAttackGlobal = "Fire"
    //attackPc()
}

function attackWater() {
    playerAttackGlobal = "Water"
   // attackPc()
}

function attackGround() {
    playerAttackGlobal = "Ground"
    //attackPc()
}

function attackPc() {
    let randomAttack = random(0, 2)
    if (randomAttack == 0) {
        pcAttackGlobal = "Fire"
    } else if (randomAttack == 1) {
        pcAttackGlobal = "Water"
    } else {
        pcAttackGlobal = "Ground"
    }
    battle()
}

function battle() {
    if (playerAttackGlobal == pcAttackGlobal) {
        createMessage("TIE")
    } else if ((playerAttackGlobal == "Fire" && pcAttackGlobal == "Ground") || (playerAttackGlobal == "Water" && pcAttackGlobal == "Fire") || (playerAttackGlobal == "Ground" && pcAttackGlobal == "Water")) {
        createMessage("You win")
        pcLivesGlobal--
        spanLivesEnenemy.innerHTML = pcLivesGlobal
    } else {
        createMessage("You lose")
        playerLivesGlobal--
        spanLivesPlayer.innerHTML = playerLivesGlobal
    }
    lives()
}

function selectPlayerPet() {
    if (inputPikashu.checked) {
        spanPetPlayer.innerHTML = inputPikashu.id
        mokeponPlayerSelect = inputPikashu.id
        selectPcPet()
        //    alert("You Select a Pikashu")
    } else if (inputPaladio.checked) {
        spanPetPlayer.innerHTML = inputPaladio.id
        mokeponPlayerSelect = inputPaladio.id
        selectPcPet()
        //    alert("You Select a Paladio")
    } else if (inputNico.checked) {
        spanPetPlayer.innerHTML = inputNico.id
        mokeponPlayerSelect = inputNico.id
        selectPcPet()
        //    alert("You Select a Nico")
    } else if (inputCharchar.checked) {
        spanPetPlayer.innerHTML = inputCharchar.id
        mokeponPlayerSelect = inputCharchar.id
        selectPcPet()
        //    alert("You Select Charchar")
    } else {
        //    alert("Select pet")
    }
    extraerAtaques(mokeponPlayerSelect)
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }

    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="btn-select-attack">${ataque.nombre}</button>
        `
        // console.log(mokepon.nombre)
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    btnWater = document.getElementById("btn-water")
    btnGround = document.getElementById("btn-ground")
    btnFire = document.getElementById("btn-fire")
    botones = document.querySelectorAll(".btn-select-attack")

    btnWater.addEventListener("click", attackWater)
    btnGround.addEventListener("click", attackGround)
    btnFire.addEventListener("click", attackFire)
    secuenciaAtaques()
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("Fire")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("Water")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            } else {
                ataqueJugador.push("Ground")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            }
            attackPc()
        })
    })
}

function selectPcPet() {
    let randomPcPet = random(0, mokepones.length - 1)

    spanPetPc.innerHTML = mokepones[randomPcPet].nombre

    sectionAttackSelect.style.display = "flex"
    sectionPetPlayer.style.display = "none"
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function lives(params) {
    if (pcLivesGlobal == 0) {
        createFinalMessage("Felicitaciones, ganaste")
    } else if (playerLivesGlobal == 0) {
        createFinalMessage("Buen intento, suerte para la próxima")
    }
}

function createFinalMessage(finalResult) {
    sectionMessage.innerHTML = finalResult
    btnFire.disabled = true
    btnWater.disabled = true
    btnGround.disabled = true
    sectionReset.style.display = "block"
}

function resetGame() {
    location.reload()
}

function createMessage(resultBattle) {
    let newAttackPlayer = document.createElement("p")
    let newAttackPc = document.createElement("p")
    sectionMessage.innerHTML = resultBattle
    newAttackPlayer.innerHTML = playerAttackGlobal
    newAttackPc.innerHTML = pcAttackGlobal
    sectionMessagePlayer.appendChild(newAttackPlayer)
    sectionMessagePc.appendChild(newAttackPc)
}

window.addEventListener("load", playGame)