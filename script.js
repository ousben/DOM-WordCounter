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
    return item.toLowerCase()
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
  let counter = textArea.value.length;
  characters.textContent = counter;
});

//details sentences display
textArea.addEventListener("input", function() {
  let counter = 0;
  let splitedSentence = textArea.value.split(".");
  for(let i = 0; i < splitedSentence.length; i++) {
    if(splitedSentence[i] != "") {
      counter++
    }
  }
  sentences.textContent = counter;
});

//details longuest sentence display
textArea.addEventListener("input", function() {
  let mainCounter = 0;
  let splitedSentence = textArea.value.split(".");
  let splitedWords = splitedSentence.map(item => {
    return item.split(" ");
  })
  for(let i = 0; i < splitedWords.length; i++) {
    let innerCounter = 0;
    for(let j = 0; j < splitedWords[i].length; j++) {
      if(splitedWords[i][j] != "") {
        innerCounter++;
      }
    }
    if(innerCounter > mainCounter) {
      mainCounter = innerCounter;
    }
  }
  longuestSentence.textContent = mainCounter;
});

//details shortest sentence display
textArea.addEventListener("input", function() {
  let mainCounter = 0;
  let splitSentence = textArea.value.split(".");
  let splitWords = splitSentence.map(item => {
    return item.split(" ");
  })
  for(let i = 0; i < splitWords.length; i++) {
    let innerCounter = 0;
    for(let j = 0; j < splitWords[i].length; j++) {
      if(splitWords[i][j] != "") {
        innerCounter++;
      }
    }
    if(innerCounter < mainCounter) {
      mainCounter = innerCounter;
    }
    if(i === 0) {
      mainCounter = innerCounter;
    }
  }
  shortestSentence.textContent = mainCounter;
});

//details average sentence by words display
textArea.addEventListener("input", function() {
  let mainCounter = [];
  let sum = 0;
  let splitedSentence = textArea.value.split(".");
  let splitedWords = splitedSentence.map(item => {
    return item.split(" ");
  })
  for(let i = 0; i < splitedWords.length; i++) {
    let innerCounter = 0;
    for(let j = 0; j < splitedWords[i].length; j++) {
      if(splitedWords[i][j] != "") {
        innerCounter++;
      }
    }
    mainCounter.push(innerCounter);
  }
  mainCounter.forEach(num => {
    sum += num;
  })
  let result = sum / mainCounter.length;
  averageSentenceWords.textContent = result.toFixed(2);
})

//details average sentence by characters display
textArea.addEventListener("input", function() {
  let mainCounter = 0;
  let splitedSentence = textArea.value.split(".");
  for(let i = 0; i < splitedSentence.length; i++) {
    mainCounter += splitedSentence[i].length;
  }
  let result = mainCounter / splitedSentence.length;
  averageSentenceChars.textContent = result.toFixed(1);
})

//average word length display
textArea.addEventListener("input", function() {
  let result = [];
  let sum = 0;
  let splitedSentence = textArea.value.split(" ");
  for(let i = 0; i < splitedSentence.length; i++) {
    if(splitedSentence[i].includes(".")) {
      let splitedWords = splitedSentence[i].split(".");
      for(let j = 0; j < splitedWords.length; j++) {
        if(splitedWords[j] != "") {
          result.push(splitedWords[j]);
        }
      }
    } else {
      if(splitedSentence[i] != "") {
        result.push(splitedSentence[i]);
      }
    }
  }
  result.forEach(item => {
    sum += item.length;
  })
  let finalResult = sum / result.length;
  if(result.length === 0) {
    averageWordLength.textContent = 0.00;
  } else {
    averageWordLength.textContent = finalResult.toFixed(2);
  }
})

//Keyword Density display
textArea.addEventListener("input", function() {
  let splitedSentence = textArea.value.split(" ");
  console.log(splitedSentence);
})