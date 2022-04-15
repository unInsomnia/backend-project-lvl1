import readlineSync from 'readline-sync';
import randomNumber from '../src/index.js';
import userName from '../src/cli.js';

console.log('What number is missing in the progression?');

const gameProgression = () => {
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    let startNumber = randomNumber(1, 20);
    const growthPoint = randomNumber(1, 9);
    const progressionArr = [];
    progressionArr.push(startNumber);

    for (let ind = 0; ind <= randomNumber(5, 10); ind += 1) {
      startNumber += growthPoint;
      progressionArr.push(startNumber);
    }
    const positionOFCorrectAnswer = randomNumber(0, progressionArr.length - 1);
    const correctAnswer = progressionArr[positionOFCorrectAnswer];
    progressionArr[positionOFCorrectAnswer] = '..';
    const questionArr = progressionArr.join(' ');

    console.log(`Question ${questionArr}`);
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

export default gameProgression;
