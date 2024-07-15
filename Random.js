const generateQuoteBtn = document.getElementById('quoteBtn');
const quoteOutput = document.getElementById('quoteOutput');
const quoteCard = document.getElementById('quoteCard');

const arrayOfQuotes = [
	{ quote: 'You are doing an amazing job, even on the tough days.' },
	{ quote: 'Your hugs and kisses are like magic to your child.' },
	{
		quote: 'You are a superhero in disguise, wearing your cape of love and kindness.'
	},
	{ quote: "Take a moment to breathe. You're doing great." },
	{ quote: 'You are a wonderful parent. Your child is lucky to have you.' },
	{
		quote: 'Your love has the power to heal, comfort, and inspire. Keep shining bright!'
	},
	{ quote: "Trust your instincts; you know what's best for your child." },
	{ quote: 'You are a role model of strength, resilience, and love.' },
	{
		quote: 'You are a parent who is always there for your child, no matter what.'
	},
	{
		quote: 'Your efforts may sometimes go unnoticed, but they are never in vain.'
	}
];

function generateQuote() {
	let random = Math.floor(Math.random() * arrayOfQuotes.length);
	quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;

	updateShareLinks(arrayOfQuotes[random].quote);
}

function updateShareLinks(quote) {
	// Facebook share link
	let facebookShare = document.getElementById('facebook-share');
	facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(quote)}`;

	// Twitter share link
	let twitterShare = document.getElementById('twitter-share');
	twitterShare.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}&url=${encodeURIComponent(window.location.href)}`;
}

generateQuoteBtn.addEventListener('click', generateQuote);

generateQuote();
