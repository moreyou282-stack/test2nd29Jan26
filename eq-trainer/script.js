import { scenarios } from './scenarios.js';

let currentScenarioIndex = 0;
let totalScore = 0;
let userHistory = [];

const appContainer = document.getElementById('app');

function renderHome() {
    appContainer.innerHTML = `
    <div class="home-screen fade-in">
      <h1 class="title">HR EQ Trainer</h1>
      <p class="subtitle">Master Emotional Intelligence for the HCMC Workplace</p>
      <div class="stats-preview">
        <span>3 Scenarios</span> • <span>Real-world Context</span>
      </div>
      <button id="start-btn" class="primary-btn">Start Training</button>
    </div>
  `;
    document.getElementById('start-btn').addEventListener('click', startTraining);
}

function startTraining() {
    currentScenarioIndex = 0;
    totalScore = 0;
    userHistory = [];
    renderScenario();
}

function renderScenario() {
    if (currentScenarioIndex >= scenarios.length) {
        renderResults();
        return;
    }

    const scenario = scenarios[currentScenarioIndex];

    appContainer.innerHTML = `
    <div class="scenario-card slide-up">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${((currentScenarioIndex) / scenarios.length) * 100}%"></div>
      </div>
      <span class="scenario-badge">Scenario ${currentScenarioIndex + 1}/${scenarios.length}</span>
      <h2 class="scenario-title">${scenario.title}</h2>
      <p class="scenario-context">${scenario.context}</p>
      <h3 class="scenario-question">${scenario.question}</h3>
      <div class="options-grid">
        ${scenario.options.map((opt, idx) => `
          <button class="option-card" data-idx="${idx}">
            ${opt.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;

    document.querySelectorAll('.option-card').forEach(btn => {
        btn.addEventListener('click', (e) => handleAns(e.target.closest('button').dataset.idx));
    });
}

function handleAns(idx) {
    const scenario = scenarios[currentScenarioIndex];
    const choice = scenario.options[idx];

    totalScore += choice.eqScore;
    userHistory.push({
        scenario: scenario.title,
        choice: choice.text,
        feedback: choice.feedback,
        score: choice.eqScore
    });

    showFeedback(choice);
}

function showFeedback(choice) {
    appContainer.innerHTML = `
    <div class="feedback-card fade-in">
      <div class="feedback-header ${choice.eqScore > 0 ? 'positive' : 'negative'}">
        <h2>${choice.eqScore > 0 ? 'Good Choice' : 'Needs Improvement'}</h2>
        <span class="score-badge">${choice.eqScore > 0 ? '+' : ''}${choice.eqScore} EQ</span>
      </div>
      <p class="feedback-text">${choice.feedback}</p>
      <button id="next-btn" class="primary-btn">Next Scenario</button>
    </div>
  `;

    document.getElementById('next-btn').addEventListener('click', () => {
        currentScenarioIndex++;
        renderScenario();
    });
}

function renderResults() {
    let grade = "Junior Intern";
    if (totalScore >= 25) grade = "HR Manager Material";
    else if (totalScore >= 10) grade = "Promising Executive";

    const chartWidth = Math.min(100, Math.max(0, (totalScore + 15) / 45 * 100)); // Normalize approx -15 to 30 range

    appContainer.innerHTML = `
    <div class="results-screen fade-in">
      <h1>Training Complete</h1>
      <div class="score-display">
        <span class="total-score">${totalScore}</span>
        <span class="score-label">EQ Points</span>
      </div>
      <h2 class="rank-title">Rank: ${grade}</h2>
      
      <div class="summary-list">
        <h3>Performance Review</h3>
        ${userHistory.map(item => `
          <div class="history-item">
            <div class="history-header">
              <strong>${item.scenario}</strong>
              <span class="${item.score > 0 ? 'good' : 'bad'}">${item.score > 0 ? '+' : ''}${item.score}</span>
            </div>
            <p>${item.feedback}</p>
          </div>
        `).join('')}
      </div>

      <button id="restart-btn" class="secondary-btn">Retake Training</button>
    </div>
  `;

    document.getElementById('restart-btn').addEventListener('click', renderHome);
}

// Init
renderHome();
