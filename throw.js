'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function isPositive(a) {
    if(a!==undefined){
    if(1<=a && a<=100){
        return "YES"
    }else if(a==0){
        throw { message: 'Zero Error' };
    }else{
        throw { message: 'Negative Error' };
    }
    }
}

