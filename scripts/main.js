import { getJoke, useJoke } from './JokeProvider.js';
import { Joke, JokePunch } from './Joke.js';

const jokeBtn = document.querySelector('.request-joke-btn');
const punchlineBtn = document.querySelector('.request-punchline-btn');
const jokeSetupTarget = document.querySelector('.joke-setup');
const jokePunchlineTarget = document.querySelector('.joke-punchline');

jokeBtn.addEventListener('click', (e) => {
	console.log('I should be grabbing a joke now...');
	getJoke().then((_) => {
		jokeSetupTarget.innerHTML = Joke(useJoke());
	});
	// TODO: fetch a joke from the Joke API and render it to the DOM
});

punchlineBtn.addEventListener('click', (e) => {
	console.log('I should be displaying the punchline');
	jokePunchlineTarget.innerHTML = JokePunch(useJoke());
});
