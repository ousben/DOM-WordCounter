//first div
const resultWords = document.getElementById("result-words");
const resultCharacters = document.getElementById("result-characters");

//second div
const textArea = document.getElementById("text-area");

//third div
const words = document.getElementById("words");
const uniqueWords = document.getElementById("unique-words");
const characters = document.getElementById("characters");
const sentences = document.getElementById("sentences");
const longuestSentence = document.getElementById("longuest-sentence");
const shortestSentence = document.getElementById("shortest-sentence");
const averageSentenceWords = document.getElementById("average-sentence-words");
const averageSentenceChars = document.getElementById("average-sentence-chars");
const averageWordLength = document.getElementById("average-word-length");

//fourth div
const densityList = document.getElementById("density-list");

textArea.addEventListener("input", function() {
  let counter = textArea.value.length;
  resultCharacters.textContent = counter;

  let splitedWordsCounter = 0;
  let splitedWords = textArea.value.split(" ");
  for(let i = 0; i < splitedWords.length; i++) {
    splitedWordsCounter++
  }
  resultWords.textContent = splitedWordsCounter;
  console.log(splitedWords);
})