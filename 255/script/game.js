let score = 0;
let time = 30;
let gameOver = false;
let gameStarted = false;
let timerInterval = null;
let itemInterval = null;

function createItem() {
    let item = document.createElement('div');
    item.classList.add('item');
    item.style.left = Math.random() * (document.getElementById('gameArea').offsetWidth - 100) + 'px';
    item.style.top = Math.random() * (document.getElementById('gameArea').offsetHeight - 100) + 'px';
    item.points = 25;
    item.addEventListener('click', destroyItem);
    document.getElementById('gameArea').appendChild(item);
    let items = document.getElementsByClassName('item');
}

function destroyItem(e) {
    if (gameOver) {
        return;
    }

    score += e.target.points;
    e.target.remove();
    document.getElementById('score').textContent = 'Score: ' + score;
}

function countdown() {
    time--;
    document.getElementById('timer').textContent = 'Time: ' + time;

    let items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].points -= 5;
    }

    if (time <= 0) {
        endGame();
        document.getElementById('gameStatusDisplay').innerText = 'Congrats!';
        document.getElementById('gameStatusDisplay').style.display = 'block';
        document.getElementById('startButton').innerHTML = 'Reset Game';
    }

    if (items.length > 3) {
        document.getElementById('gameStatusDisplay').style.display = 'block';
        document.getElementById('startButton').innerHTML = 'Reset Game';
        endGame();
    }
}

function clearItems() {
    let items = document.getElementsByClassName('item');
    while (items[0]) {
        items[0].parentNode.removeChild(items[0]);
    }
}

function endGame() {
    clearInterval(itemInterval);
    clearInterval(timerInterval);
    gameOver = true;
    clearItems();
}

function startGame() {
    if (gameStarted == false) {
        gameOver = false;
        itemInterval = setInterval(createItem, 1000);
        timerInterval = setInterval(countdown, 1000);
        gameStarted = true;
        document.getElementById('startButton').innerHTML = 'End Game';
    }
    else {
        endGame();
        document.getElementById('gameStatusDisplay').style.display = 'none';
        score = 0;
        time = 30;
        document.getElementById('timer').textContent = 'Time: ' + time;
        document.getElementById('score').textContent = 'Score: ' + score;
        document.getElementById('startButton').innerHTML = 'Start Game!';
        gameStarted = false;
    }
}