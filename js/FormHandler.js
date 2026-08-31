const rightAnswers = {
	rightType: "tipo_simples",
	rightElement: "elemento_carbono",
	rightSpeed: "velocidade_531",
};
export const handleForm = async () => {
	const form = document.querySelector(".form-box");
	document.querySelector("#form-submit").addEventListener("click", (e) => {
		let howManyRight = 0;
		e.preventDefault();
		const selectedType = document.querySelector(
			"input[name='tipo-fibraC']:checked",
		)?.value;
		const selectedElement = document.querySelector(
			"input[name='elemento-fibraC']:checked",
		)?.value;
		if (selectedType === rightAnswers.rightType) {
			howManyRight++;
		}
		if (selectedElement === rightAnswers.rightElement) {
			howManyRight++;
		}
		const selectedSpeed = document.querySelector(
			"input[name='velocidade-Jesko']:checked",
		)?.value;
		if (selectedSpeed === rightAnswers.rightSpeed) {
			howManyRight++;
		}
		form.querySelector(".form-result").innerHTML =
			`<h4>Você acertou ${howManyRight} de 3 perguntas!</h4><br>
             <ol>
                <li>O tipo de fibra de carbono correto é: <strong>Composto Simples</strong></li>
                <li>O elemento químico correto é: <strong>Carbono</strong></li>
                <li>A velocidade correta do Jesko é: <strong>531 km/h</strong></li>
             </ol>
            `;
	});
};
