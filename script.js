const popupWrapper = document.querySelector(".popup-wrapper");
const h1 = document.querySelector(".score-text");
const form = document.querySelector(".quiz-form");
const rightAnswers = ["D", "C", "D", "B"];
const reinitButton = document.querySelector(".reinit-button");


function reinitButtonVisibility() {
  reinitButton.style.visibility = "visible";
}

function calculateScore(array) {
  let score = 0;
  array.forEach((rightAnswer, index) => {
    if (rightAnswer === rightAnswers[index]) {
      score += 25;
    }
  });
  return score;
}

function showScore(score = 0) {
  popupWrapper.style.display = "block";
  let animationScore = 0;
  const count = setInterval(() => {
    if (animationScore === score) {
      reinitButtonVisibility();
      clearInterval(count);
      
    }
    h1.textContent = "Pontuação: " + `${animationScore++}/100`;
    
  }, 50);
}

function getReferencies(array) {
  rightAnswers.forEach((rightAnswer, index) =>{
    const alternativeName = `inputQuestion${index + 1}`
    array.push(form[alternativeName].value);
  })
}

const mainCallback = (event) => {
  const userAnswers  = [];
  event.preventDefault();
  getReferencies(userAnswers );
  const score = calculateScore(userAnswers );
  showScore(score);
};

const reinitCallback = () => {
  popupWrapper.style.display = "none";
  reinitButton.style.visibility = "hidden";
};

reinitButton.addEventListener("click", reinitCallback);
form.addEventListener("submit", mainCallback);
