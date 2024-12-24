//Es un codigo de caracter educativo, va a tener comentarios en algunas funcionalidades
//pero no se recomienda en un proyecto real

const sectionAttackSelect = document.getElementById('select-attack')
const sectionReset = document.getElementById('reset')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🪨', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🪨', id: 'boton-tierra' },
    { nombre: '🪨', id: 'boton-tierra' },
    { nombre: '🪨', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🪨', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')

    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    
    

    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
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
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)


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

//Funcion para generar eventos de boton
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