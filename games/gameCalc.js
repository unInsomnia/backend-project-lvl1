import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';
import userName from '../src/cli.js';

console.log('What is the result of the expression?');

const gameCalc = () => {
  let correctAnswer;
  let i = 0;

  while (i < 3) {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    const mathSymbols = ['+', '-', '*'];
    const randomSymbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];

    console.log(`Question: ${firstNumber} ${randomSymbol} ${secondNumber}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    if (randomSymbol === '+') {
      correctAnswer = firstNumber + secondNumber;
      if (answerOfUser === `${correctAnswer}`) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        return `Let's try again, ${userName}!`;
      }
    }

    if (randomSymbol === '-') {
      correctAnswer = firstNumber - secondNumber;
      if (answerOfUser === `${correctAnswer}`) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        return `Let's try again, ${userName}!`;
      }
    }

    if (randomSymbol === '*') {
      correctAnswer = firstNumber * secondNumber;
      if (answerOfUser === `${correctAnswer}`) {
        i += 1;
        console.log('Correct!');
      } else {
        console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        return `Let's try again, ${userName}!`;
      }
    }
  }
  return `Congratulation, ${userName}!`;
};

export default gameCalc;
