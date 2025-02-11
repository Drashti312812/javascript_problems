const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;
const askQuestion = () => {
  if (attempts >= maxAttempts) {
    console.log(
      `You have used all ${maxAttempts} attempts. The correct number was ${num}.`
    );
    rl.close();
    return
  }
  rl.question("Guess a number between 1-100 : ", (answer) => {
    const guess = Number(answer);
    attempts++;
    if (guess > num) {
      console.log("Your Guess was too high, guess a bit lower.");
      askQuestion();
    } else if (guess < num) {
      console.log("Your Guess was too low, guess a bit higher.");
      askQuestion();
    } else if (guess == num) {
      console.log("Correct guess!!!");
      rl.close();
    } else {
      console.log("Invalid Number. Guess a number between 1-100 : ");
      askQuestion();
    }

    if (maxAttempts - attempts === 3) {
      console.log("Warning: Only 3 guesses left!");
    }
  });
};
askQuestion();
