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


//Se declaran las variables desde un inicio por recomendación
let mokepones = [] //let mokepones = []
let mokeponPlayerSelect //let mascotaJugador
let playerAttackGlobal //let ataquesMokepon Revisar duplicidad
let pcAttackGlobal = [] //let ataquesMokeponEnemigo
let playerLivesGlobal = 3 //let vidasJugador = 3
let pcLivesGlobal = 3 //let vidasEnemigo = 3
let opcionDeMokepones //opcionDeMokepones
let inputPikashu //let inputHipodoge
let inputPaladio //let inputCapipepo
let inputNico //let inputRatigueya
let inputCharchar //Nuevo Mokepon
let ataquesMokepon //let ataquesMokepon
let botones = [] //let botones = []
let ataqueJugador = [] //let ataqueJugador =[]
let ataqueEnemigo = [] //let ataqueEnemigo = []
let btnFire //let botonFuego
let btnGround //let botonTierra
let btnWater  //let botonAgua

// Se crea un nuevo objeto en el cual se van a agregar las caracteristicas de nuestro Mokepon

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

function setAttack(attackType) {
    playerAttackGlobal = attackType
}

// function attackFire() {
//     playerAttackGlobal = "Fire"
//     //attackPc()
// }

// function attackWater() {
//     playerAttackGlobal = "Water"
//     // attackPc()
// }

// function attackGround() {
//     playerAttackGlobal = "Ground"
//     //attackPc()
// }

function attackPc() {
    //console.log(pcAttackGlobal);

    let randomAttack = random(0, pcAttackGlobal.length)
    if (randomAttack == 0 || randomAttack == 1) {
        pcAttackGlobal = "Fire"
    } else if (randomAttack == 2 || randomAttack == 3) {
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
        <button class="btn-select-attack ${ataque.id}">${ataque.nombre}</button>
        `
        // console.log(mokepon.nombre)
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    btnWater = document.getElementsByClassName("btn-water")
    btnGround = document.getElementsByClassName("btn-ground")
    btnFire = document.getElementsByClassName("btn-fire")
    botones = document.querySelectorAll(".btn-select-attack")

    for (const button of btnWater) {
        button.addEventListener("click", () => setAttack('Water'))
    }
    for (const button of btnGround) {
        button.addEventListener("click", () => setAttack('Ground'))

    } for (const button of btnFire) {
        button.addEventListener("click", () => setAttack('Fire'))

    }
    // btnWater.forEach(button => {
    //     button.addEventListener("click", () => setAttack('Ground'))
    // });

    // btnWater.forEach((item)=>{
    //     item.addEventListener("click", () => setAttack('Water'))
    // }) 
    // btnGround.addEventListener("click", () => setAttack('Ground'))
    // btnFire.addEventListener("click", () => setAttack('Fire'))
    secuenciaAtaques()
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("Fire")
                //console.log(ataqueJugador)
                boton.style.background = "#112f58"
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("Water")
                //console.log(ataqueJugador)
                boton.style.background = "#112f58"

            } else {
                ataqueJugador.push("Ground")
                //console.log(ataqueJugador)
                boton.style.background = "#112f58"
            }
            attackPc()
            console.log(playerAttackGlobal.length);
            /*
        if(playerAttackGlobal.length >= 5){
            btnFire.disabled = true
            btnWater.disabled = true
            btnGround.disabled = true
        }*/
        })
    })
}

function selectPcPet() {
    let randomPcPet = random(0, mokepones.length - 1)
    spanPetPc.innerHTML = mokepones[randomPcPet].nombre
    pcAttackGlobal = mokepones[randomPcPet].ataques
    //console.log(pcAttackGlobal);

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
    for (const button of botones) {
        button.disabled = true
    }
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
    console.log(playerAttackGlobal);

    sectionMessagePlayer.appendChild(newAttackPlayer)
    sectionMessagePc.appendChild(newAttackPc)
}

window.addEventListener("load", playGame)