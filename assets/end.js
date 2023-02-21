const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScore = 5;

finalScore.innerText = mostRecentScore;

// Disables save button when the text value is empty
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    // Prevents the page to go back to it's normal staging
    e.preventDefault();

    // The value is set into a variable
    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    // Pushed to an array
    highScores.push(score);
    // This is sorted for the highest scores at the top
    highScores.sort((a, b) => b.score - a.score);
    // This method is taking only the 5 highest scores
    highScores.splice(5);

    // Storage the highScores array as a string
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');

};
    