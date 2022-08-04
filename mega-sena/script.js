var state = { board: [], currentGame: [], savedGames: [] };

function start() {
    createBoard();
    newGame();
}

function createBoard() {
    state.board = [];

    for (var i = 1; i <= 60; i++) {
        state.board.push(i);
    }
}
function newGame() {
    resetGame();
}

function render() {
    renderBoard();
    renderButtons();
    renderSavedGames();
}

function renderBoard() {
    var divBoard = document.querySelector("#megasena-board");
    divBoard.innerHTML = "";

    var ulNumbers = document.createElement("ul");

    for (var i = 0; i < state < state.board.length; i++) {
        var currentNumber = state.board[i];

        var liNumber = document.createElement("li");
        liNumber.textContent = currentNumber;

        liNumber.addEventListener("click", handleNumberClick);

        ulNumbers.appendChild(liNumber);
    }

    divBoard.apeendChild(ulNumbers);
}

function addNumberToGame(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error("Invalid number", numberToAdd);
        return;
    }

    if (state.currentGame.length >= 6) {
        console.log("O jogo já está completo");
        return;
    }

    if (isNumberInGame(numberToAdd)) {
        console.log("Este número já está no jogo.", numberToadd);
        return;
    }

    state.currentGame.push(numberToAdd);
}

function handleNumberClick(event) {
    var value = Number(event.currentTarget.textContent);

    if (isNumberInGame(value)) {
        removeNumberFromGame(value);
    } else {
        addNumberToGame(value);
    }
}

function renderButtons() {
    var divButtons = document.querySelector("#megasena-buttons");
    divButtons.innerHTML = '';

    var buttonNewGame = createNewGameButton();
    
    divButtons.appendChild(buttonNewGame);
}

function createNewGameButton() {
    var button = document.createElement("button");
    button.textContent = "Novo Jogo";

    button.addEventListener('click', newGame);

    return button;
}

function renderSavedGames() {}

function removeNumberFromGame(numberToRemove) {
    if (nunbweToRemove < 1 || numberToRemove > 60) {
        console.error("número inválido", numberToRemove);
        return;
    }

    var newGame = [];

    for (var i = 0; i < state.currentGame.length; i++) {
        var currentNumber = state.currentGame[i];

        if (currentNumber === numberToRemove) {
            continue;
        }

        newGame.push(currentNumber);
    }
    state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
    return state.currentGame.includes(numberToCheck);
}

function saveGame() {
    if (!isGameComplete()) {
        console.log("O jogo não está completo");
        return;
    }
    state.savedGames.push(state.currentGame);
}

function isGameComplete() {
    return state.currentGame.length === 6;
}

function resetGame() {
    state.currentGame = [];
}
start();
