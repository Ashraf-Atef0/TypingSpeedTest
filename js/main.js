let startBtn = document.querySelector(".startBtn"),
  welcome = document.querySelector("h2"),
  select = document.querySelector("#select");
(type = document.querySelector(".cword")),
  (cword = document.querySelector(".cword span")),
  (easy = document.querySelector("#s1")),
  (medium = document.querySelector("#s2")),
  (hard = document.querySelector("#s3")),
  (textIn = document.querySelector(".text-in")),
  (fwords = document.querySelector(".fwords")),
  (Word1 = document.querySelectorAll(".nword")[0]),
  (Word2 = document.querySelectorAll(".nword")[1]),
  (Word3 = document.querySelectorAll(".nword")[2]),
  (calc = document.querySelector(".calc")),
  (timer = document.querySelector(".time")),
  (wNumber = document.querySelector(".wnumber")),
  (endResult = document.querySelector(".result"));

const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

const lvl = {
  easy: 10,
  medium: 5,
  hard: 3,
};
let clvl;
function level() {
  if (easy.checked) {
    clvl = lvl.easy;
  } else if (medium.checked) {
    clvl = lvl.medium;
  } else if (hard.checked) {
    clvl = lvl.hard;
  }
}

function hideNorun() {
  type.style.display = "none";
  textIn.style.display = "none";
  fwords.style.display = "none";
  calc.style.display = "none";
  endResult.style.display = "none";
  startBtn.style.display = "block";
  welcome.style.display = "block";
  select.style.display = "flex";
}
hideNorun();
function hideRun() {
  type.style.display = "block";
  textIn.style.display = "block";
  fwords.style.display = "block";
  calc.style.display = "flex";
  endResult.style.display = "none";
  startBtn.style.display = "none";
  welcome.style.display = "none";
  select.style.display = "none";
}
function mkarray() {
  let newArray = [],
    oldArray = words,
    index;
  for (let i = 0; i < words.length; i++) {
    index = Math.floor(Math.random() * oldArray.length);
    newArray.push(oldArray[index]);
    oldArray = oldArray.filter((ele) => ele != oldArray[index]);
  }
  return newArray;
}
function changeWords(na, i) {
  cword.innerHTML = na[i];
  if (na[i + 1] !== undefined) {
    Word1.innerHTML = na[i + 1];
  } else {
    Word1.innerHTML = "";
  }
  if (na[i + 2] !== undefined) {
    Word2.innerHTML = na[i + 2];
  } else {
    Word2.innerHTML = "";
  }
  if (na[i + 3] !== undefined) {
    Word3.innerHTML = na[i + 3];
  } else {
    Word3.innerHTML = "";
  }
  textIn.value = "";
  textIn.focus();
}
function main() {
  hideRun();
  let i = 0,
    newArray = mkarray();
  level();
  wNumber.innerHTML = i;
  timer.innerHTML = clvl;
  changeWords(newArray, i);
  let changeSet = setInterval(() => {
    textIn.oninput = () => {
      if (textIn.value.toLowerCase() === cword.innerHTML.toLowerCase()) {
        timer.innerHTML = "0";
      }
    };
    if (+timer.innerHTML === 0) {
      ++i;
      wNumber.innerHTML = i;
      if (textIn.value.toLowerCase() === cword.innerHTML.toLowerCase()) {
        changeWords(newArray, i);
        if (+wNumber.innerHTML === newArray.length) {
          clearInterval(changeSet);
          hideNorun();
          endResult.style.display = "block";
          endResult.classList.remove("win");
          endResult.classList.remove("lose");
          endResult.classList.add("win");
          endResult.innerHTML = "Congratulations";
          console.log("test");
        }
        console.log("winer");
      } else {
        clearInterval(changeSet);
        hideNorun();
        endResult.style.display = "block";
        endResult.classList.remove("win");
        endResult.classList.remove("lose");
        endResult.classList.add("lose");
        endResult.innerHTML = "Game Over";
        console.log("loser");
      }
    }
    if (+timer.innerHTML > 0) {
      --timer.innerHTML;
    } else {
      timer.innerHTML = clvl;
    }
  }, 1000);
}
startBtn.onclick = () => {
  main();
  return false;
};
textIn.onpaste = () => false;
