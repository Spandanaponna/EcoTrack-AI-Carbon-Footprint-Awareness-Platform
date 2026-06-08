const form = document.getElementById("footprint-form");
const scoreElement = document.getElementById("score");
const estimateElement = document.getElementById("estimate");
const statusElement = document.getElementById("status");
const errorElement = document.getElementById("error-message");
const progressBar = document.getElementById("bar");
const tipsElement = document.getElementById("tips");

const outputs = {
  travel: document.getElementById("travel-output"),
  electricity: document.getElementById("electricity-output"),
  diet: document.getElementById("diet-output")
};

const dietProfiles = {
  1: { label: "vegetarian", monthlyKg: 45 },
  2: { label: "mixed", monthlyKg: 65 },
  3: { label: "non-vegetarian", monthlyKg: 85 }
};

const recommendations = {
  low: [
    "Keep prioritizing low-carbon travel and efficient energy use.",
    "Track your usage monthly so good habits stay visible.",
    "Share your routine with friends or family to multiply the impact."
  ],
  moderate: [
    "Swap one or two short vehicle trips each week for walking, cycling, or public transport.",
    "Turn off standby appliances and shift more lighting to LEDs.",
    "Plan a few lower-impact meals each week to reduce food emissions."
  ],
  high: [
    "Reduce solo vehicle use where possible and combine errands into fewer trips.",
    "Review high-energy appliances and consider renewable electricity options.",
    "Choose more plant-forward meals and reduce food waste.",
    "Set a realistic monthly reduction goal and recalculate your score."
  ]
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateFootprint();
});

form.addEventListener("reset", () => {
  window.setTimeout(resetResults, 0);
});

function calculateFootprint() {
  const travel = getNumberValue("travel");
  const electricity = getNumberValue("electricity");
  const dietValue = document.getElementById("diet").value;
  const transportFactor = getNumberValue("transport");

  const validationMessage = validateInputs(travel, electricity);

  if (validationMessage) {
    errorElement.textContent = validationMessage;
    return;
  }

  errorElement.textContent = "";

  const travelKg = travel * transportFactor * 30;
  const electricityKg = electricity * 0.82;
  const dietKg = dietProfiles[dietValue].monthlyKg;
  const totalKg = travelKg + electricityKg + dietKg;
  const score = Math.min(Math.round(totalKg / 4), 100);
  const level = getImpactLevel(score);

  renderResults({
    dietKg,
    electricityKg,
    level,
    score,
    totalKg,
    travelKg
  });
}

function getNumberValue(id) {
  return Number(document.getElementById(id).value);
}

function validateInputs(travel, electricity) {
  if (!Number.isFinite(travel) || !Number.isFinite(electricity)) {
    return "Please enter valid numeric values.";
  }

  if (travel < 0 || electricity < 0) {
    return "Values cannot be negative.";
  }

  if (travel === 0 && electricity === 0) {
    return "Add at least one travel or electricity value to calculate your score.";
  }

  return "";
}

function getImpactLevel(score) {
  if (score < 35) {
    return {
      key: "low",
      label: "Low Impact",
      message: "Your current habits are relatively climate-conscious."
    };
  }

  if (score < 70) {
    return {
      key: "moderate",
      label: "Moderate Impact",
      message: "There is room to reduce emissions with a few focused changes."
    };
  }

  return {
    key: "high",
    label: "High Impact",
    message: "Your estimate is high, so the best gains will come from travel and energy changes."
  };
}

function renderResults(result) {
  scoreElement.textContent = `Carbon Score: ${result.score}`;
  estimateElement.textContent = `${Math.round(result.totalKg)} kg CO2e estimated per month. ${result.level.message}`;
  statusElement.textContent = result.level.label;
  progressBar.style.width = `${result.score}%`;

  localStorage.setItem(
    "lastCarbonScore",
    JSON.stringify({
      score: result.score,
      emissions: Math.round(result.totalKg),
      timestamp: new Date().toISOString()
    })
  );

  outputs.travel.textContent = `${Math.round(result.travelKg)} kg`;
  outputs.electricity.textContent = `${Math.round(result.electricityKg)} kg`;
  outputs.diet.textContent = `${Math.round(result.dietKg)} kg`;

  tipsElement.innerHTML = "";
  saveHistory(
  result.score,
  Math.round(result.totalKg)
);

  recommendations[result.level.key].forEach((tip) => {
    const item = document.createElement("li");
    item.textContent = tip;
    tipsElement.appendChild(item);
  });
  loadHistory();
}

function resetResults() {
  errorElement.textContent = "";
  scoreElement.textContent = "Carbon Score: --";
  estimateElement.textContent = "Estimated monthly emissions will appear here.";
  statusElement.textContent = "Waiting for inputs";
  progressBar.style.width = "0";
  outputs.travel.textContent = "-- kg";
  outputs.electricity.textContent = "-- kg";
  outputs.diet.textContent = "-- kg";
  tipsElement.innerHTML = "<li>Calculate your score to receive personalized recommendations.</li>";
}
const previousScore = JSON.parse(
  localStorage.getItem("lastCarbonScore")
);

if (previousScore) {
  console.log("Previous Calculation:", previousScore);
}
function loadHistory() {
  const historyList = document.getElementById("history-list");

  if (!historyList) return;

  const history =
    JSON.parse(localStorage.getItem("history")) || [];

  if (history.length === 0) {
    historyList.innerHTML =
      "<li>No previous calculations yet.</li>";
    return;
  }

  historyList.innerHTML = "";

  history.slice(-5).reverse().forEach(item => {
    const li = document.createElement("li");
    li.textContent =
      `Score: ${item.score} | Emissions: ${item.emissions} kg CO₂e`;
    historyList.appendChild(li);
  });
}
loadHistory();
document
  .getElementById("clear-history")
  .addEventListener("click", () => {
    localStorage.removeItem("history");
    loadHistory();
  });
function saveHistory(score, emissions) {
  const history =
    JSON.parse(localStorage.getItem("history")) || [];

  history.push({
    score,
    emissions
  });

  if (history.length > 10) {
    history.shift();
  }

  localStorage.setItem(
    "history",
    JSON.stringify(history)
  );
}