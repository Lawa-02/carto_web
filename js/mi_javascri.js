document.getElementById('escalaForm').addEventListener('submit', function(e) {
		e.preventDefault();
			let distMapa = parseFloat(document.getElementById('distMapa').value);
			let distReal = parseFloat(document.getElementById('distReal').value);
			let textoResultado = document.getElementById('textoResultado');
			let resultadoDiv = document.getElementById('resultado');

		if (isNaN(distMapa) || isNaN(distReal) || distMapa <= 0 || distReal <= 0) {
		textoResultado.textContent = "Por favor, ingrese valores válidos mayores que cero.";
		} else {
		let escala = distReal / distMapa;
		textoResultado.textContent = `La escala es 1 : ${escala.toFixed(0)}`;
		}

		resultadoDiv.classList.remove('hidden');
		});