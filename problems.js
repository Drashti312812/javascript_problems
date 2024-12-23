// Write a JavaScript function that takes an array of numbers and returns
// the second largest number in the array. If the array contains fewer than
// two numbers, the function should return null

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let first = null;
  let second = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  return second;
}
// console.log(secondLargest([10, 20, 4, 45, 99]));

// You are given an array of n-1 distinct numbers from 1 to n, where the
// numbers are shuffled randomly. There is one number missing from the array.
// Your task is to find and return the missing number.

function missingNum(arr, n) {
  arr.sort();
  let num;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      num = arr[i] + 1;
    }
  }
  return num;
}
// console.log(missingNum([5, 3, 1, 6, 8, 7, 9, 4], 8));

// Write a function isPalindrome that checks whether a given string is a palindrome.
// A palindrome is a word, phrase, number, or other sequence of characters that reads
// the same forward and backward (ignoring spaces, punctuation, and letter case).

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reverse = cleanedStr.split("").reverse().join("");
  if (cleanedStr === reverse) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPalindrome("A man, a plan, a canal, Panama"));

// Write a function isAnagram that checks whether two given strings are anagrams of each other.
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// using all the original letters exactly once.

function isAnagram(str1, str2) {
  const cleanedStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanedStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const sortedStr1 = cleanedStr1.split("").sort().join("");
  const sortedStr2 = cleanedStr2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
// console.log(isAnagram("lamp", "palm"));

// Write a function sumOfTwo that checks if there are two distinct numbers in an array that add up to a given
// target sum. The function should return true if such a pair exists, otherwise return false

function sumOfTwo(arr, target) {
  const set = new Set();
  for (num of arr) {
    const complement = target - num;
    if (set.has(complement)) {
      return true;
    }
    set.add(num);
  }
  return false;
}
// console.log(sumOfTwo([1, 2, 3, 4, 5], 10));

// Write a function that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number,
// and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz"

function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz();

// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.
function countVowel(str) {
  const lowerCaseStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      lowerCaseStr[i] == "a" ||
      lowerCaseStr[i] == "e" ||
      lowerCaseStr[i] == "i" ||
      lowerCaseStr[i] == "o" ||
      lowerCaseStr[i] == "u"
    ) {
      count++;
    }
  }
  console.log("count : ", count);
}
// countVowel("It was raining so i got my umbrella out!");

// Write a function that returns the first non-repeated character from a string.

function firstNonRepeatingChar(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const count = str.split(str[i]).length - 1;
    if (count === 1) {
      arr.push(str[i]);
    }
  }
  console.log(arr[0]);
}
// firstNonRepeatingChar("abacbad");

// Write a function that finds the longest word in a given string and returns its length.

function longestWord(str) {
  const arr = str.split(" ");
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  console.log(longest);
}
// longestWord("It was raining so i got my umbrella out!");

// Write a function that removes all extra spaces from a string
// (i.e., only keep a single space between words and remove leading/trailing spaces).

function removeSpaces(str) {
  let result = str
    .split(" ")
    .filter((word) => word)
    .join(" ");
  console.log("result: ", result);
}
// removeSpaces("      Hello      World    !   ");

// Given two words, start and end, and a dictionary of words, find the shortest transformation sequence
// from start to end, where only one letter can be changed at a time. Each transformed word must exist in the dictionary.

function wordLadder(start, end, wordDict) {
  // Helper function to perform DFS with memoization
  function dfs(word, end, wordDict, memo) {
    // If the word is already visited, return the stored result
    if (memo.has(word)) {
      return memo.get(word);
    }

    // If the word is the end word, return a path length of 0
    if (word === end) {
      return 0;
    }

    // Initialize the shortest path as infinity
    let shortest = Infinity;

    // Try changing each character of the word to every possible letter
    for (let i = 0; i < word.length; i++) {
      for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (word[i] !== char) {
          let newWord = word.slice(0, i) + char + word.slice(i + 1);

          // If the new word is in the dictionary, perform DFS on it
          if (wordDict.has(newWord)) {
            wordDict.delete(newWord); // Remove to avoid revisiting
            let res = dfs(newWord, end, wordDict, memo);
            if (res !== Infinity) {
              shortest = Math.min(shortest, 1 + res);
            }
            wordDict.add(newWord); // Restore for other recursive calls
          }
        }
      }
    }

    // Memoize the result
    memo.set(word, shortest);
    return shortest;
  }

  // Base case: If start and end are the same
  if (start === end) {
    return 0;
  }

  // Convert wordDict to a set for quick lookup
  let wordSet = new Set(wordDict);
  // If the end word is not in the dictionary, no transformation is possible
  if (!wordSet.has(end)) {
    return -1;
  }

  // Memoization map
  let memo = new Map();

  // Call the DFS function
  let result = dfs(start, end, wordSet, memo);

  return result !== Infinity ? result : -1;
}

// Example usage:
let start = "hit";
let end = "cog";
let wordDict = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(wordLadder(start, end, wordDict)); // Output: 5 (hit -> hot -> dot -> dog -> cog)

