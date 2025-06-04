let altScore = 0;
let roundsPlayed = 0;
const maxRounds = 10;
let usedScenarios = [];
let currentScenario;

const scenarioText = document.getElementById("scenario-text");
const supportBtn = document.getElementById("support-btn");
const opposeBtn = document.getElementById("oppose-btn");
const resultBox = document.getElementById("result-box");
const outcomeText = document.getElementById("outcome-text");
const nextButton = document.getElementById("next-button");
const progressBar = document.getElementById("progress-bar");
const altLabel = document.getElementById("alt-label");
const proposalBox = document.getElementById("proposal-box");
const finalScreen = document.getElementById("alt-world-screen");
const finalSummary = document.getElementById("world-summary");

function getRandomUnusedScenario() {
  const remaining = scenarios.filter(s => !usedScenarios.includes(s));
  const index = Math.floor(Math.random() * remaining.length);
  const selected = remaining[index];
  usedScenarios.push(selected);
  return selected;
}

function showScenario() {
  if (roundsPlayed >= maxRounds) {
    showFinalSummary();
    return;
  }

  currentScenario = getRandomUnusedScenario();
  scenarioText.textContent = currentScenario.proposal;

  proposalBox.style.display = "block";
  resultBox.style.display = "none";
  finalScreen.style.display = "none";
}

function handleVote(choice) {
  // Update score
  if (choice === "support") {
    altScore++;
  }

  // Show outcome
  proposalBox.style.display = "none";
  resultBox.style.display = "block";
  outcomeText.textContent = currentScenario.outcomes[choice];

  // Update progress
  roundsPlayed++;
  let progress = Math.round((roundsPlayed / maxRounds) * 100);
  progressBar.style.width = progress + "%";

  if (altScore <= 3) {
    altLabel.textContent = "Your world is still cautious… 🕳️";
  } else if (altScore <= 6) {
    altLabel.textContent = "Your world is shifting… 🚧";
  } else if (altScore <= 9) {
    altLabel.textContent = "Your world is transforming… 🌱";
  } else {
    altLabel.textContent = "Your world is fully reimagined. 🌍✨";
  }
}

function showFinalSummary() {
  resultBox.style.display = "none";
  finalScreen.style.display = "block";

  let emoji = "";
  let message = "";

  if (altScore <= 3) {
    emoji = "🪙🏚️📉";
    message = "You stayed rooted in familiar systems. Change was… minimal.";
  } else if (altScore <= 6) {
    emoji = "🔄🛠️🌇";
    message = "You supported a balanced mix of bold shifts and status quo comfort.";
  } else if (altScore <= 9) {
    emoji = "🌿🏘️📚";
    message = "You’re co-creating a collaborative, caring world.";
  } else {
    emoji = "🌍🔧✨";
    message = "You built a full-on alt-world powered by sharing, care, and vision!";
  }

  finalSummary.innerHTML = `
    <p><strong>Your Alt World Score:</strong> ${altScore} / ${maxRounds}</p>
    <p style="font-size: 2em;">${emoji}</p>
    <p>${message}</p>
  `;
}

supportBtn.addEventListener("click", () => handleVote("support"));
opposeBtn.addEventListener("click", () => handleVote("oppose"));
nextButton.addEventListener("click", showScenario);
document.getElementById("restart-button").addEventListener("click", () => {
  altScore = 0;
  roundsPlayed = 0;
  usedScenarios = [];
  showScenario();
  finalScreen.style.display = "none";
});

showScenario();