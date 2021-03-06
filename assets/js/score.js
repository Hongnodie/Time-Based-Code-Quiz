var highScoresEl = document.getElementById("high-scores");
var userScores = JSON.parse(localStorage.getItem("userInfo"));


if (userScores) {
    sortScores();
}

function sortScores() {

    userScores.sort(function (a, b) {
        return b.score - a.score;
    });

    displayScores();
};

function displayScores() {
    var lititle = document.createElement("p");
    lititle.textContent = "username & score (high to low)";
    highScoresEl.appendChild(lititle);

    for (var i = 0; i < userScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = userScores[i].name.concat(" ", userScores[i].score);
        highScoresEl.appendChild(li);
    }
};


function clearScores() {
    var highScoreOlEl = document.querySelector("ol");
    highScoreOlEl.innerHTML = "";
    localStorage.clear();
};