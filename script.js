let currentScenario;
let altScore = localStorage.getItem("altScore") || 0;

const scenarioText = document.getElementById("scenario-text");
const choice1Btn = document.getElementById("choice1");
const choice2Btn = document.getElementById("choice2");
const resultsBox = document.getElementById("results-box");
const chosenOption = document.getElementById("chosen-option");
const prosList = document.getElementById("pros-list");
const consList = document.getElementById("cons-list");
const nextButton = document.getElementById("next-button");
const scenarioBox = document.getElementById("scenario-box");

function getRandomScenario() {
  const randomIndex = Math.floor(Math.random() * scenarios.length);
  return scenarios[randomIndex];
}

function showScenario() {
  currentScenario = getRandomScenario();
  scenarioText.innerHTML = currentScenario.text.replace(/\n/g, "<br>");
  choice1Btn.textContent = currentScenario.choices[0];
  choice2Btn.textContent = currentScenario.choices[1];
  scenarioBox.style.display = "block";
  resultsBox.style.display = "none";
}

function showResult(choiceIndex) {
  scenarioBox.style.display = "none";
  resultsBox.style.display = "block";
  const selected = currentScenario.choices[choiceIndex];
  if (choiceIndex === 1) {
  altScore++;
  localStorage.setItem("altScore", altScore);
}
  const pros = currentScenario.prosCons[choiceIndex].pros;
  const cons = currentScenario.prosCons[choiceIndex].cons;

  chosenOption.textContent = selected;
chosenOption.innerHTML += `<br><br><em>Your Alt World Score: ${altScore}</em>`;
  // Clear old lists
  prosList.innerHTML = "";
  consList.innerHTML = "";
chosenOption.textContent = selected;

// Clear old lists
prosList.innerHTML = "";
consList.innerHTML = "";

// Populate new lists
pros.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  prosList.appendChild(li);
});

cons.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  consList.appendChild(li);
});

// ADD THIS HERE:
const progressBar = document.getElementById("progress-bar");
const altLabel = document.getElementById("alt-label");

let progressPercent = Math.min(altScore * 10, 100);
progressBar.style.width = progressPercent + "%";

if (altScore <= 2) {
  altLabel.textContent = "Your world is just getting started... 🌱";
} else if (altScore <= 5) {
  altLabel.textContent = "Your world is forming connections. 🧰🌇";
} else if (altScore <= 8) {
  altLabel.textContent = "Your world is thriving with shared abundance! 🌍💚";
} else {
  altLabel.textContent = "Welcome to the fully-realized collective utopia. 🏡🚲📚✨";
}
  // Populate new lists
  pros.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    prosList.appendChild(li);
  });

  cons.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    consList.appendChild(li);
  });
}

// Event listeners
choice1Btn.addEventListener("click", () => showResult(0));
choice2Btn.addEventListener("click", () => showResult(1));
nextButton.addEventListener("click", showScenario);
document.getElementById("reset-button").addEventListener("click", () => {
  if (confirm("Are you sure you want to reset your Alt World progress?")) {
    localStorage.removeItem("altScore");
    altScore = 0;
    showScenario();
  }
});
// Start the game
showScenario();
