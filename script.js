document.addEventListener('keyup', logKey);

let wordList_3 = ["bet","fit","lot","tap","day","ton","gem","egg","hen","bed"];
let wordList_4 = ["item","navy","hard","heir","main","cake","pass","date","bold","pole"];
let wordList_5 = ["chair", "raise", "worth", "lease", "tract", "cheek", "steel", "power", "close", "craft"];
let wordList_6 = ["bridge","reveal","retire","hiccup","monkey","junior","throat","facade","corner","impact"];
let wordList_7 = ["certain","product","economy","contain","rainbow","explode","morning","century","academy","respect"];

let wordList_m = {3: wordList_3, 4: wordList_4, 5: wordList_5, 6: wordList_6, 7: wordList_7};

let length = 5;
var target = wordList_m[length][Math.floor(Math.random()*wordList_m[length].length)].toUpperCase();
let row = 0;
let index = 0;
var guess_g = "";

function Setup(){
  const container = document.getElementById("container");
  container.style.gridTemplateColumns = "repeat(" + length.toString() + ", 1fr)";
  container.style.width = (12 * length).toString() + "vw";
  container.style.marginLeft = ((100 - (12 * length))/2).toString() + "vw";

  for (let i = 0; i < (length * 6); i++) {
    const letter = document.createElement("div");
    letter.classList.add("letter");
    container.appendChild(letter);
  }
}


function logKey(e) {
  let letters = document.getElementsByClassName("letter");
  let key = e.code;

  if(key == "Backspace"){
    if (index > 0) {
      index = index - 1
      letters[(row*length) + index].innerHTML = "";
      guess_g = guess_g.slice(0, guess_g.length - 1);
    }
  }
  else if (index < length && key.slice(3).length == 1) {
    let letter = key.slice(3);
    letters[(row*length) + index].innerHTML = letter;
    index = index + 1;
    guess_g = guess_g + letter;
  }
  if (key == "Enter" && index == length){
    Check(guess_g);
  }
}

function Check(guess){
  let index_3 = 0;
  let letters = document.getElementsByClassName("letter");

  for (let letter of guess) {
    if (target[index_3] == letter){
      let index_2 = (row * length) + index_3;
      letters[index_2].classList.add("correct");
    }
    else if (target.includes(letter)) {
      let index_2 = (row * length) + index_3;
      letters[index_2].classList.add("misplaced");
    } 
    else {
      let index_2 = (row * length) + index_3;
      letters[index_2].classList.add("incorrect");
    }
    index_3 = index_3 + 1;
  }
  row = row + 1;
  index = 0;
  guess_g = "";
}

Setup();