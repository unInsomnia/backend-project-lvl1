import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';
import userName from '../src/cli.js';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num === 1) {
    return true;
  }

  for (let x = 2; x < num; x += 1) {
    if (num % x === 0) {
      return false;
    }
  }
  return true;
};

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const gamePrime = () => {
  let correctAnswer;
  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const thisNumber = randomNumber(1, 201);

    if (isPrime(thisNumber) === true) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    console.log(`Question: ${thisNumber}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    if (answerOfUser === `${correctAnswer}`) {
      console.log('Correct!');
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

export default gamePrime;
