"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'input.txt';
var content = fs.readFileSync(filePath, 'utf-8');
var entry = content.split('\n'); //"batteries" in the problem
function day3() {
    var answer = 0; //maximum holtage possible from each bank, final answer
    //const entry = ['987654321111111', '811111111111119', '234234234234278', '818181911112111'];
    entry.forEach(function (bank) {
        var maxJoltage = 0;
        //console.log('hehe ', typeof bank);
        for (var i = 0; i < bank.length - 1; i++) {
            for (var j = i + 1; j < bank.length; j++) {
                var currentJoltage = parseInt(bank[i] + bank[j]);
                if (currentJoltage > maxJoltage)
                    maxJoltage = currentJoltage;
            }
            //console.log(bank[i])
        }
        answer = answer + maxJoltage; //add the highest joltage
        console.log('maxJoltage: ', maxJoltage);
        console.log('answer: ', answer);
    });
    return answer;
}
console.log(day3());
