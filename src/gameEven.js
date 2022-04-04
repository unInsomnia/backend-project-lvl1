import readlineSync from 'readline-sync';
import randomNumber from './numberFunctions.js';
import userName from './cli.js';

const gameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;

  while (i < 3) { // 3 - это количество раундов
    const thisNumber = randomNumber(1, 100);
    console.log(`Question: ${thisNumber}`);
    const questionEven = readlineSync.question('Your answer: ');

    const evenOrNonEven = thisNumber % 2;

    if (evenOrNonEven === 1) {
      if (questionEven === 'no') {
        i += 1;
        console.log('Correct!');
      } else {
        return `'${questionEven}' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${userName}!`;
      }
    }

    if (evenOrNonEven === 0) {
      if (questionEven === 'yes') {
        i += 1;
        console.log('Correct!');
      } else {
        return `'${questionEven}' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${userName}!`;
      }
    }
  }
  return `Congratulations, ${userName}!`;
};

export default gameEven;
