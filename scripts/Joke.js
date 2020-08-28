// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string
import { useJoke } from './JokeProvider.js';

export const Joke = (jokeObj) => {
	return `
  <h1>${jokeObj.setup}</h1>
  `;
};

export const JokePunch = (jokeObj) => {
	return `
  <h3>${jokeObj.punchline}</h3>
  `;
};
