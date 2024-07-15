document.addEventListener('DOMContentLoaded', function () {
	// Greeting based on time of day
	const hour = new Date().getHours();
	let greeting = '';
	if (hour >= 5 && hour < 12) {
		greeting = 'Good Morning!';
	} else if (hour >= 12 && hour < 18) {
		greeting = 'Good Afternoon!';
	} else {
		greeting = 'Good Evening!';
	}
	document.getElementById('greeting').textContent = greeting;

	// Toggle sidebar
	document
		.getElementById('nav-toggle')
		.addEventListener('click', function () {
			document.getElementById('sidebar').classList.toggle('open');
		});

	// Milestones range slider
	const milestonesRange = document.getElementById('milestonesRange');
	const milestonesLabel = document.getElementById('milestonesLabel');
	const milestonesInfo = document.getElementById('milestonesInfo');

	milestonesRange.addEventListener('input', function () {
		const value = parseInt(milestonesRange.value);
		let label = '';
		let info = '';
		switch (value) {
			case 0:
				label = '0-12 months';
				info = `
                    <h3>Infants (0-12 months)</h3>
                    <ul>
                        <li>Babies learn to grasp objects and babble.</li>
                        <li>They start responding to their name and sitting without support.</li>
                        <li>By around 12 months, they may begin saying their first words and taking their first steps.</li>
                    </ul>
                `;
				break;
			case 1:
				label = '1-3 years';
				info = `
                    <h3>Toddlers (1-3 years)</h3>
                    <ul>
                        <li>Toddlers become more mobile and curious about their surroundings.</li>
                        <li>They start using simple sentences and imitating adults.</li>
                        <li>By around 3 years, they may begin potty training and showing more independence.</li>
                    </ul>
                `;
				break;
			case 2:
				label = '3-5 years';
				info = `
                    <h3>Preschoolers (3-5 years)</h3>
                    <ul>
                        <li>Preschoolers develop more social skills and enjoy playing with peers.</li>
                        <li>They become more imaginative and start learning letters and numbers.</li>
                        <li>By around 5 years, they may begin understanding more complex instructions and preparing for school.</li>
                    </ul>
                `;
				break;
			case 3:
				label = '5-8 years';
				info = `
                    <h3>School Age (5-8 years)</h3>
                    <ul>
                        <li>Children refine their motor skills and become more involved in sports and hobbies.</li>
                        <li>They develop friendships and begin reading and writing more independently.</li>
                        <li>By around 8 years, they may show interests in specific subjects and have more structured routines.</li>
                    </ul>
                `;
				break;
			default:
				label = '';
				info = '';
				break;
		}
		milestonesLabel.textContent = label;
		milestonesInfo.innerHTML = info;
	});

	// Read-aloud buttons
	const readAloudButtons = document.querySelectorAll('.read-aloud');
	const stopButtons = document.querySelectorAll('.stop');

	readAloudButtons.forEach(button => {
		button.addEventListener('click', function () {
			const story = button.parentNode.querySelector('p');
			const text = story.textContent;
			speak(text);
		});
	});

	stopButtons.forEach(button => {
		button.addEventListener('click', function () {
			stopSpeaking();
		});
	});

	let synth = window.speechSynthesis;
	let speaking = false;

	function speak(text) {
		if (synth.speaking) {
			return;
		}
		speaking = true;
		let utterThis = new SpeechSynthesisUtterance(text);
		synth.speak(utterThis);
	}

	function stopSpeaking() {
		if (synth.speaking) {
			synth.cancel();
			speaking = false;
		}
	}

	// FAQ Accordion
	const accordionItems = document.querySelectorAll('.accordion-item');

	accordionItems.forEach(item => {
		const accordionHeader = item.querySelector('h3');
		const accordionContent = item.querySelector('.accordion-content');

		accordionHeader.addEventListener('click', function () {
			item.classList.toggle('active');

			if (item.classList.contains('active')) {
				accordionContent.style.display = 'block';
			} else {
				accordionContent.style.display = 'none';
			}
		});
	});
});

// Community forum
document.addEventListener('DOMContentLoaded', function () {
	const joinButton = document.getElementById('join-now');
	if (joinButton) {
		joinButton.addEventListener('click', function (event) {
			event.preventDefault();
			alert('Redirecting to the join page...');
			window.location.href = 'index.html';
		});
	}
});
