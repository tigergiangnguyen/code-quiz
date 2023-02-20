const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores

for (let i = 0; i < highScores.length; i++) {
  let listItem = document.createElement("li");
  listItem.className = "high-score";
  listItem.textContent = highScores[i].name + " - " + highScores[i].score;
  highScoresList.push(listItem);
};