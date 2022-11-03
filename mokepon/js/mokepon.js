let playerAttackGlobal
let pcAttackGlobal
let playerLivesGlobal = 3
let pcLivesGlobal = 3


function playGame() {
   let sectionAttackSelect = document.getElementById("select-attack")
   sectionAttackSelect.style.display = "none"

   let sectionReset = document.getElementById("reset")
   sectionReset.style.display = "none"

    let btnPet=document.getElementById("btn-pet")
    btnPet.addEventListener("click",selectPlayerPet) 
    
    let btnFire=document.getElementById("btn-fire")
    btnFire.addEventListener("click",attackFire) 
    let btnWater=document.getElementById("btn-water")
    btnWater.addEventListener("click",attackWater) 
    let btnGround=document.getElementById("btn-ground")
    btnGround.addEventListener("click",attackGround)
    
    let btnReset=document.getElementById("btn-reset")
    btnReset.addEventListener("click",resetGame)
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
    let randomAttack = random(1,3)
    let spanPetAttackPc = document.getElementById("attack-pc")

    if (randomAttack == 1) {
        pcAttackGlobal = "Fire"
    } else if (randomAttack == 2) {
        pcAttackGlobal = "Water"
    } else {
        pcAttackGlobal = "Ground"
    }
    battle()
}

function battle() {
    let spanLivesPlayer = document.getElementById("player-live")
    let spanLivesEnenemy = document.getElementById("pc-live")

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
    let sectionMessage = document.getElementById("message")
    let sectionMessagePlayer = document.getElementById("message-attack-player")
    let sectionMessagePc = document.getElementById("message-attack-pc")
    

    let newAttackPlayer = document.createElement("p")
    let newAttackPc = document.createElement("p")

    sectionMessage.innerHTML = resultBattle
    newAttackPlayer.innerHTML = playerAttackGlobal
    newAttackPc.innerHTML = pcAttackGlobal

    // let sectionMessage = document.getElementById("message")
    // let paragraph = document.createElement("p")
    // paragraph.innerHTML = "Your pet attack with " + playerAttackGlobal +
    //  ", la mascota del enemigo ataco con " + pcAttackGlobal + " " +
    //    resultBattle
    sectionMessagePlayer.appendChild(newAttackPlayer)
    sectionMessagePc.appendChild(newAttackPc)
}

function selectPlayerPet() {
   let inputPitochu = document.getElementById("pitochu")
   let inputPaladio = document.getElementById("paladio")
   let inputNico = document.getElementById("nico")
   let inputCharchar = document.getElementById("charchar")
   let spanPetPlayer = document.getElementById("pet-player")

   if (inputPitochu.checked) {
        spanPetPlayer.innerHTML = "Pitochu"
        selectPcPet()
    //    alert("You Select a Pitochu")
    } else if (inputPaladio.checked) {
        spanPetPlayer.innerHTML = "Paladio"
        selectPcPet()
    //    alert("You Select a Paladio")
    } else if (inputNico.checked) {
        spanPetPlayer.innerHTML = "Nico"
        selectPcPet()
    //    alert("You Select a Nico")
    } else if (inputCharchar.checked) {
        spanPetPlayer.innerHTML = "Charchar"
        selectPcPet()
    //    alert("You Select Charchar")
    } else {
    //    alert("Select pet")
    }

}

function selectPcPet() {
    let randomPcPet = random(1,4)
    let spanPetPc = document.getElementById("pet-pc")

    if (randomPcPet == 1) {
        spanPetPc.innerHTML = "Pitochu"
    } else if (randomPcPet == 2) {
        spanPetPc.innerHTML = "Paladio"
    } else if (randomPcPet == 3) {
        spanPetPc.innerHTML = "Nico"
    } else {
        spanPetPc.innerHTML = "Charchar"
    }
   let sectionAttackSelect = document.getElementById("select-attack")
   sectionAttackSelect.style.display = "flex"

   let sectionPetPlayer = document.getElementById("select-pet")
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
    let sectionMessage = document.getElementById("message")
    // let paragraph = document.createElement("p")
    sectionMessage.innerHTML = finalResult
    //sectionMessage.appendChild(paragraph)

    let btnFire=document.getElementById("btn-fire")
    btnFire.disabled = true
    let btnWater=document.getElementById("btn-water")
    btnWater.disabled = true
    let btnGround=document.getElementById("btn-ground")
    btnGround.disabled = true

   let sectionReset = document.getElementById("reset")
   sectionReset.style.display = "block"
}

function resetGame() {
    location.reload()
}
window.addEventListener("load", playGame)