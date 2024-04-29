const fs = require('fs');

let gameOutcomes = {
    'A' : {
        'A': 'draw',
        'B': 'lose',
        'C': 'win',
        'score': 1
    },
    'B' : {
        'A': 'win',
        'B': 'draw',
        'C': 'lose',
        'score': 2
    },
    'C' : {
        'A': 'lose',
        'B': 'win',
        'C': 'draw',
        'score': 3
    }
}

const gameScoring = {
    'win': 6,
    'draw': 3,
    'lose': 0
} 

function findRealVal(keyVal){
    let  obj = {
        'X':'A',
        'Y':'B',
        'Z':'C'
    }
    return obj[keyVal];
}

function calculateScores(dataArr){
    let total = 0;
    for(let game of dataArr){
        if(game){
            let gameDetails = game.split(' ');
            let gameScoreRes = gameOutcomes[findRealVal(gameDetails[1])]['score'];
            let gameOutcomeVal = gameScoring[gameOutcomes[findRealVal(gameDetails[1])][gameDetails[0]]];
            // console.log('gameHandVal',gameScoreRes);
            // console.log('gameRes',gameOutcomeVal);
            let totalGameOutcome = gameScoreRes + gameOutcomeVal;
            // console.log('gameTotal',totalGameOutcome);
            total += totalGameOutcome;
        }
    }
    console.log('end result',total);
}

function findTheScore(fileName){
    fs.readFile(fileName, 'utf-8', (err,data) =>{
        if(err){
            console.log('Error occurred when reading a file',err);
            return;
        }
        let dataArr = data.split('\r\n');
        calculateScores(dataArr);
    })
}

findTheScore('sample1.txt');
// findTheScore('input1.txt');