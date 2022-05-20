
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
        markup += '<img src="images/box1.png" width: "40px" height = "40px" >' ;
        markup += '</td>' ;
    }

    markup += '</tr>';

    return markup
}

function loadGames() {
    let data = boards[0].split(';');
    const len =rawData.length;

    let currentIndex = 0;
    while (currentIndex + 1 < len) {
        
        let data = rawData[currentIndex].split('\n').filter((d) => d !== '');
        console.log('data', data);
        let max = 0;
        data.shilf();
        data.forEach((element) => {
            if (element.length > max) max = element.length;          
        });
        
        let game = {
            author: 'Roger Delaporte',
            level: rawData[currentIndex + 1].split('\n')[0],
            height: data.length,
            maxWidth: max,
            data: data,
        };
        games.push(game);
        currentIndex++;
    }
    console.log(games);
    const gameNo = Math.floor(Math.random() * (games.length -1));

    return games[gameNo];
}

