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
const btnFire=document.getElementById("btn-fire")
const btnGround=document.getElementById("btn-ground")
const btnWater=document.getElementById("btn-water")
const contenedorTarjetas=document.getElementById("contenedorTarjetas")

let mokepones = []
let playerAttackGlobal
let pcAttackGlobal
let playerLivesGlobal = 3
let pcLivesGlobal = 3
let opcionDeMokepones
let inputPitochu
let inputPaladio
let inputNico
let inputCharchar

class Mokepon{
    constructor(nombre, foto,vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques =[]
    }
}


let pitochu = new Mokepon("Pitochu","./assets/mokepons_mokepon_capipepo_attack.png",5)

let paladio = new Mokepon("Paladio","./assets/mokepons_mokepon_hipodoge_attack.png",5)

let nico = new Mokepon("Nico","./assets/mokepons_mokepon_ratigueya_attack.png",5)

let charchar = new Mokepon("Charchar","./assets/mokepons_mokepon_charchar_attack.png" ,5)


pitochu.ataques.push(
    {nombre:'💧',id:'btn-water'},
    {nombre:'💧',id:'btn-water'},
    {nombre:'💧',id:'btn-water'},
    {nombre:'🪨',id:'btn-ground'},
    {nombre:'🔥',id:'btn-fire'}
)

paladio.ataques.push(
    {nombre:'🪨',id:'btn-ground'},
    {nombre:'🪨',id:'btn-ground'},
    {nombre:'💧',id:'btn-water'},
    {nombre:'🪨',id:'btn-ground'},
    {nombre:'🔥',id:'btn-fire'}
)

nico.ataques.push(
    {nombre:'🔥',id:'btn-fire'},
    {nombre:'🪨',id:'btn-ground'},
    {nombre:'💧',id:'btn-water'},
    {nombre:'🪨',id:'btn-ground'},
    {nombre:'🔥',id:'btn-fire'}
)

charchar.ataques.push(
    {nombre:'🔥',id:'btn-fire'},
    {nombre:'🔥',id:'btn-fire'},
    {nombre:'💧',id:'btn-water'},
    {nombre:'🪨',id:'btn-water'},
    {nombre:'🔥',id:'btn-fire'}
)

mokepones.push(pitochu,paladio,nico,charchar)

function btnGnr(element,funcionespecial) {
    let btnGeneral=document.getElementById(element)
    btnGeneral.addEventListener("click",funcionespecial) 
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
        console.log(mokepon.nombre)
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })
    
    inputPitochu = document.getElementById("Pitochu")
    inputPaladio = document.getElementById("Paladio")
    inputNico = document.getElementById("Nico")
    inputCharchar = document.getElementById("Charchar")
    

   btnGnr("btn-pet",selectPlayerPet)
   btnGnr("btn-water",attackWater)
   btnGnr("btn-ground",attackGround)
   btnGnr("btn-fire",attackFire)
   btnGnr("btn-reset",resetGame)
}

function attackFire() {
    playerAttackGlobal = "Fire"
    attackPc()
}

function attackWater() {
    playerAttackGlobal = "Water"
    attackPc()
}

function attackGround() {
    playerAttackGlobal = "Ground"
    attackPc()
}

function attackPc() {
    let randomAttack = random(0,mokepones.ataques.length-1)
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
       } else if ((playerAttackGlobal == "Fire" && pcAttackGlobal == "Ground")||(playerAttackGlobal == "Water" && pcAttackGlobal == "Fire") || (playerAttackGlobal == "Ground" && pcAttackGlobal == "Water")) {
            createMessage("You win")
            pcLivesGlobal --
            spanLivesEnenemy.innerHTML = pcLivesGlobal
        } else {
            createMessage("You lose")
            playerLivesGlobal --
            spanLivesPlayer.innerHTML = playerLivesGlobal
        }
    lives()
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

function selectPlayerPet() {
   if (inputPitochu.checked) {
        spanPetPlayer.innerHTML = inputPitochu.id
        selectPcPet()
    //    alert("You Select a Pitochu")
    } else if (inputPaladio.checked) {
        spanPetPlayer.innerHTML = inputPaladio.id
        selectPcPet()
    //    alert("You Select a Paladio")
    } else if (inputNico.checked) {
        spanPetPlayer.innerHTML = inputNico.id
        selectPcPet()
    //    alert("You Select a Nico")
    } else if (inputCharchar.checked) {
        spanPetPlayer.innerHTML = inputCharchar.id
        selectPcPet()
    //    alert("You Select Charchar")
    } else {
    //    alert("Select pet")
    }
}

function selectPcPet() {
    let randomPcPet = random(0,mokepones.length-1)

    spanPetPc.innerHTML = mokepones[randomPcPet].nombre
    
   sectionPetPlayer.style.display = "none"
}

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function lives(params) {
    if (pcLivesGlobal == 0) {
        createFinalMessage("Felicitaciones, ganaste")
    } else if (playerLivesGlobal == 0) {
        createFinalMessage("Felicitaciones, ganaste")
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
window.addEventListener("load", playGame)