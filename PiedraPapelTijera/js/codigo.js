		function aleatorio(min,max){
			return Math.floor(Math.random() * (max - min + 1) + min)
		}
		function eleccion(jugada) {
			let resultado = ""
			if (jugada == 1) {
				resultado = "Rock🪨"
			} else if (jugada == 2) {
				resultado = "Paper📄"
			} else if(jugada == 3) {
				resultado = "Scissors ✂️"
			} else {
				resultado = "BAD CHOICE"
			}
			return resultado
		}
		// 1 es piedra, 2 es papel, 3 es tijera
		let	jugador = 0
		let winner = 0
		let	lost = 0
		while (winner < 3 && lost < 3) {
			let	pc = aleatorio(1,3)
			jugador = prompt("To choose: 1 for rock, 2 for paper, 3 for scissors")
		
			alert("PC choose: " + eleccion(pc))
			alert("You choose: " + eleccion(jugador))
			if (pc == jugador) {
				alert("TIE")
			} else if ((jugador == 1 && pc == 3)||(jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
				alert("You win")
				winner = winner + 1
			} else {
				alert("You lose")
				lost = lost + 1
			}
		}

		alert("You won " + winner + " times and lost " + lost + " times.")