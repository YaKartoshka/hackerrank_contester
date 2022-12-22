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


function vowelsAndConsonants(s) {
const array=s.split('');
const vowel=['a','e','i','o','u'];
array.forEach(item =>{
    if(vowel.includes(item)){
        console.log(item)
    }
})
array.forEach(item =>{
    if(vowel.includes(item)){
        return
    }else{
        console.log(item)
    }
})
}

