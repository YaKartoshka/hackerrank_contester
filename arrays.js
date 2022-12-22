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


function getSecondLargest(nums) {
    var n=nums.length;
    var first=Math.max(...nums)
    var new_nums=nums.filter((value)=>{
        return value!=first
    });
    
    return Math.max(...new_nums)
}

