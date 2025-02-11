const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const words = ["animals", "kingdom", "jurassic", "world", "kingkong"];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function shuffleWord(word) {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

const word = getRandomWord();
const scrambledWord = shuffleWord(word);
const maxAttempts = 5;
let attempts = 0;

console.log(`Scrambled  Word : ${scrambledWord}`);

const askQuestion = () => {
  if (attempts >= maxAttempts) {
    console.log(`Out of Attempts!!! Correct word is  ${word}`);
    rl.close();
    return;
  }
  rl.question(`Your guess (${maxAttempts - attempts} left) : `, (guess) => {
    attempts++;
    if (guess.toLowerCase() === word) {
      console.log("Correct Answer!!!");
      rl.close();
    } else {
      console.log("Incorrect word, Try again");
      if (maxAttempts - attempts == 1) {
        console.log(`Hint : First letter of the word is '${word.charAt(0)}'.`);
      }
      askQuestion();
    }
  });
};

askQuestion();
