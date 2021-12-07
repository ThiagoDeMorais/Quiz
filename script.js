let formulary = document.querySelector(".quiz-form");
let rightAnswers = ["B", "B", "B", "B"];
let responsesReceived = [];
let score = 0;

function scoreCalculation() {
    responsesReceived.forEach((element, index) => {
      if (element === rightAnswers[index]) {
        score += 25;
      }
    });
    return score;
  }

formulary.addEventListener("submit", (event) => {
    event.preventDefault();
  
    responsesReceived.push(
      event.target.inputQuestion1.value,
      event.target.inputQuestion2.value,
      event.target.inputQuestion3.value,
      event.target.inputQuestion4.value
    );

    console.log(scoreCalculation());
});

