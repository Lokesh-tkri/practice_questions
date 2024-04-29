const fs = require('fs');


function parseRucksackForId(dataArr){
    let sum = 0;
    let dataCont = new Set();
    let commonEle = new Set();
    let container = 0;
    for(let data of dataArr){
        if(data){
            let dataLen = data.length;
            let lineNum = container%3;
            if(!lineNum){
                dataCont = new Set();
                commonEle = new Set();
            }
            container += 1;
            for(let i=0; i < (dataLen); i++){
                let charVal = data[i].charCodeAt(0)
                if(!lineNum){
                    dataCont.add(charVal);
                }else{
                    if(dataCont.has(charVal)){
                        if(lineNum === 1){
                            commonEle.add(charVal);
                        }
                        if(lineNum === 2){
                            if(commonEle.has(charVal)){
                                if(charVal > 96){
                                    sum += (charVal - 96);
                                    // console.log(charCode - 96);
                                    break;
                                }else{
                                    sum += (charVal - 38);
                                    // console.log(charCode - 38);
                                    break;
                                }
                            }
                        }
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
        parseRucksackForId(dataArr)
    })
}

// rucksackPrioritySum('sample1.txt');

rucksackPrioritySum('input1.txt');