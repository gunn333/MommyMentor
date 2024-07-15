document.getElementById('quiz-form').addEventListener('submit', function (e) {
	e.preventDefault();

	const answers = {
		question1: document.querySelector('input[name="question1"]:checked')
			.value,
		question2: document.querySelector('input[name="question2"]:checked')
			.value,
		question3: document.querySelector('input[name="question3"]:checked')
			.value,
		question4: document.querySelector('input[name="question4"]:checked')
			.value,
		question5: document.querySelector('input[name="question5"]:checked')
			.value,
		question6: document.querySelector('input[name="question6"]:checked')
			.value,
		question7: document.querySelector('input[name="question7"]:checked')
			.value,
		question8: document.querySelector('input[name="question8"]:checked')
			.value
	};

	let score = 0;
	const points = {
		question1: { a: 10, b: 5, c: 2, d: 0 },
		question2: { a: 5, b: 10, c: 2, d: 0 },
		question3: { a: 10, b: 5, c: 2, d: 0 },
		question4: { a: 10, b: 5, c: 2, d: 0 },
		question5: { a: 10, b: 5, c: 2, d: 0 },
		question6: { a: 10, b: 5, c: 2, d: 0 },
		question7: { a: 10, b: 5, c: 2, d: 0 },
		question8: { a: 10, b: 5, c: 2, d: 0 }
	};

	score += points.question1[answers.question1];
	score += points.question2[answers.question2];
	score += points.question3[answers.question3];
	score += points.question4[answers.question4];
	score += points.question5[answers.question5];
	score += points.question6[answers.question6];
	score += points.question7[answers.question7];
	score += points.question8[answers.question8];

	const resultContainer = document.getElementById('result');
	resultContainer.innerHTML = `Your score is: ${score}`;
});
