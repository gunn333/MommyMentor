document.addEventListener('DOMContentLoaded', function () {
	const greetings = ['Good morning!', 'Good afternoon!', 'Good evening!'];
	const hours = new Date().getHours();
	let greeting;

	if (hours < 12) {
		greeting = greetings[0];
	} else if (hours < 18) {
		greeting = greetings[1];
	} else {
		greeting = greetings[2];
	}

	const titleElement = document.querySelector('.title-top p');
	titleElement.textContent = `${greeting} Welcome to`;

	// Expandable tips
	const missions = document.querySelectorAll('.mission');
	missions.forEach(mission => {
		mission.querySelector('h3').addEventListener('click', () => {
			mission.classList.toggle('expanded');
		});

		// Voting system
		const likeButton = mission.querySelector('.like');
		const dislikeButton = mission.querySelector('.dislike');
		const likeCount = mission.querySelector('.like-count');
		const dislikeCount = mission.querySelector('.dislike-count');

		// Initialize likes and dislikes from localStorage or default to 0
		let likes = parseInt(localStorage.getItem(`likes-${mission.id}`)) || 0;
		let dislikes =
			parseInt(localStorage.getItem(`dislikes-${mission.id}`)) || 0;

		likeCount.textContent = likes;
		dislikeCount.textContent = dislikes;

		likeButton.addEventListener('click', () => {
			likes++;
			localStorage.setItem(`likes-${mission.id}`, likes);
			likeCount.textContent = likes;
		});

		dislikeButton.addEventListener('click', () => {
			dislikes++;
			localStorage.setItem(`dislikes-${mission.id}`, dislikes);
			dislikeCount.textContent = dislikes;
		});
	});

	// Scroll animations
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in');
				} else {
					entry.target.classList.remove('fade-in');
				}
			});
		},
		{ threshold: 0.1 }
	);

	const fadeElements = document.querySelectorAll('.mission, .title');
	fadeElements.forEach(element => {
		observer.observe(element);
	});
});
