const fs = require('fs');

function findMax(dataArr){
    let maxSum = 0;
    let sumNow = 0;
    for(let val of dataArr){
        if(val){
            sumNow += parseInt(val);
        }else{
            if(maxSum < sumNow){
                maxSum = sumNow
            }
            sumNow = 0
        }
    }
    return maxSum
}

function sumOfTopThree(dataArr){
    let topThreeSums = [0,0,0];
    let sumNow = 0;
    for(let val of dataArr){
        if(val){
            sumNow += parseInt(val);
        }else{
            topThreeSums = topThreeSums.sort()
            for(let i=0;i<topThreeSums.length;i++){
                if(topThreeSums[i] < sumNow){
                    topThreeSums[i] = sumNow
                }
                break;
            }
            sumNow = 0
        }
    }
    // return topThreeSums.reduce((x,sum)=> sum+x,0)
}

function findElfWithMostFood(data) {
    let dataArr = data.split('\r\n');
    // console.log(findMax(dataArr));
    console.log(sumOfTopThree(dataArr));
}

function readTheFile(fileName){
    fs.readFile(fileName, 'utf8', (err,data) => findElfWithMostFood(data));
}

readTheFile('aocp1.txt');
// readTheFile('sample1.txt');