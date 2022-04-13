import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';
import userName from '../src/cli.js';

const greatestDivisor = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return greatestDivisor(secondNum, firstNum % secondNum);
};

console.log('Find the greatest common divisor of given numbers.');

const gameGcd = () => {
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    console.log(`Question ${firstNumber} ${secondNumber}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    const correctAnswer = greatestDivisor(firstNumber, secondNumber);

    if (answerOfUser === `${correctAnswer}`) {
      console.log('Correct!');
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulation, ${userName}!`;
};

export default gameGcd;
