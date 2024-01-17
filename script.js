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


//title div display
textArea.addEventListener("input", function() {
  let counter = textArea.value.length;
  resultCharacters.textContent = counter;

  let splitedWordsCounter = 0;
  let splitedWords = textArea.value.split(" ");
  for(let i = 0; i < splitedWords.length; i++) {
    if(splitedWords[i] != "") {
      splitedWordsCounter++;
    }
  }
  resultWords.textContent = splitedWordsCounter;
});


//details words display
textArea.addEventListener("input", function() {
  let splitedWordsCounter = 0;
  let splitedWords = textArea.value.split(" ");
  for(let i = 0; i < splitedWords.length; i++) {
    if(splitedWords[i] != "") {
      splitedWordsCounter++;
    }
  }
  words.textContent = splitedWordsCounter;
});

//details unique words display
textArea.addEventListener("input", function() {
  let counter = 0;
  let splitedWords = textArea.value.split(" ");
  let array = splitedWords.map(item => {
    if(item != "") {
      return item.toLowerCase();
    }
  })
  let toDelete = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]) {
        toDelete.push(j);
      }
    }
  }
  for(let i = 0; i < toDelete.length; i++) {
    array.splice(toDelete[i] - i, 1);
  }
  uniqueWords.textContent = array.length;
});

//details characters display
textArea.addEventListener("input", function() {

});

//details sentences display
textArea.addEventListener("input", function() {

});

//details longuest sentence display
textArea.addEventListener("input", function() {

});