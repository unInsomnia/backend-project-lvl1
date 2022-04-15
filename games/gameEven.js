import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';
import userName from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const gameEven = () => {
  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const thisNumber = randomNumber(1, 100);
    console.log(`Question: ${thisNumber}`);
    const answerOfUser = readlineSync.question('Your answer: ');

    const evenOrNonEven = thisNumber % 2;

    if (evenOrNonEven === 1) {
      if (answerOfUser === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was 'no'.`);
        return `Let's try again, ${userName}!`;
      }
    }

    if (evenOrNonEven === 0) {
      if (answerOfUser === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was 'yes'.`);
        return `Let's try again, ${userName}!`;
      }
    }
  }
  return `Congratulations, ${userName}!`;
};

export default gameEven;
