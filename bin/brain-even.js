#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line max-len
const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
const askQuestion = (randomNumber) => {
  console.log(`Question: ${randomNumber}`);
  return String(readlineSync.question('Your answer: '));
};
const checkAnswer = (answer, randomNumber) => (answer === 'yes' && randomNumber % 2 === 0) || (answer === 'no' && randomNumber % 2 === 1);
const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = String(readlineSync.question('May I have your name?: '));
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let randomNumber = getRandomArbitrary(1, 20);
  let answer = askQuestion(randomNumber);
  let count = 1;

  while (count <= 2) {
    if (checkAnswer(answer, randomNumber)) {
      count += 1;
      console.log('Correct!');
      randomNumber = getRandomArbitrary(1, 20);
      answer = askQuestion(randomNumber);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randomNumber % 2 === 0 ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
startGame();
