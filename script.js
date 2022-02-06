document.addEventListener('keyup', logKey);

var target = "CREEP";
let row = 0;
let length = 5;
let index = 0;
var guess_g = "";

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
  console.log(guess);
  let index_3 = 0;
  for (let letter of guess) {
    if (target.includes(letter)) {
      let letters = document.getElementsByClassName("letter");
      let index_2 = (row * length) + index_3;
      letters[index_2].classList.add("misplaced");
      console.log(index_2);
      console.log(letter);
    }
    index_3 = index_3 + 1;
  }
  row = row + 1;
  index = 0;
  guess_g = "";
}