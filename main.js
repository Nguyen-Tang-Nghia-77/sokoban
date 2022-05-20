
const WALL = '#';
const TARGET = '.';
const PERSON = '@';
const BOX = '$';
const BOX_ON_TARGET = '*';
const PERSON_ON_TARGET = '+';
const PATH = ' ';
let games = [];
let currentGame;



function loadRandomGame() {
    currentGame = loadGames();
    console.log('currentGame', currentGame);
    let markup = '<table>';
    let rows = 10;
    let columns = 20;
    for (let i = 0; i < rows; i++){
        markup = markup + createRow(columns);
    }
    markup += '</table>';
    document.getElementById('board').innerHTML = markup;
}



function createRow(columns) {
    if (columns < 1) return '';

    let markup = '<tr>';
    for (let i = 0; i < columns; i++) {
        markup += '<td style="width: 40px; height: 40px;">';
        markup += '<img src="./box1.png" width: "40px" height = "40px" >' ;
        markup += '</td>' ;
    }

    markup += '</tr>';

    return markup
}

function loadGames() {
    let data = boards[0].split(';');
    return data[0];
}

