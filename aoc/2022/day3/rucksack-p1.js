const fs = require('fs');


function parseRucksackForMismatches(dataArr){
    let sum = 0;
    for(let data of dataArr){
        if(data){
            let dataLen = data.length;
            let firstPart = [];
            for(let i=0; i < (dataLen)/2; i++){
                firstPart.push(data[i].charCodeAt(0));
            }
            for(let i=(dataLen)/2; i<(dataLen);i++){
                let charCode = data[i].charCodeAt(0);
                if(firstPart.includes(charCode)){
                    if(charCode > 96){
                        sum += (charCode - 96);
                        // console.log(charCode - 96);
                        break;
                    }else{
                        sum += (charCode - 38);
                        // console.log(charCode - 38);
                        break;
                    }
                }
            }
        }
    }
    console.log(sum)
}

function rucksackPrioritySum(fileName){
    fs.readFile(fileName,'utf-8',(err,data)=>{
        if(err){
            console.log('Error occurred while reading file',err);
            return;
        }
        dataArr = data.split('\r\n');
        parseRucksackForMismatches(dataArr)
    })
}

// rucksackPrioritySum('sample1.txt');

rucksackPrioritySum('input1.txt');