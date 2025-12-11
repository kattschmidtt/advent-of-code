"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'input.txt';
var content = fs.readFileSync(filePath, 'utf-8');
var entry = content.split(',');
//part 2: we must check all variable amounts of substring lengths
function isRepeated(n) {
    var item = String(n);
    var itemLen = item.length;
    //loop through each chunk of repeated numbers
    // we start at 1 since there must be at least one set of numbers
    // example: 123123123 
    for (var i = 1; i <= Math.floor(itemLen / 2); i++) {
        if (itemLen % i !== 0)
            continue; //this means there might be more even chunks
        var copies = item.slice(0, i); // 123
        var repeatCount = itemLen / i; // 3 repeating sets of 123
        if (copies.repeat(repeatCount) === item)
            return true;
    }
    return false;
}
function day2() {
    var answer = 0;
    // for each entry in the input seperated by a - we will find the upper and lower
    entry.forEach(function (id) {
        var _a = id.split("-"), lowerId = _a[0], upperId = _a[1];
        var lower = parseInt(lowerId);
        var upper = parseInt(upperId);
        //starting from lower we increment until upper and check if i is repeated
        //  if it is: we add it to the answer
        //  if it isnt: we continue until upper is hit
        for (var i = lower; i <= upper; i++) {
            if (isRepeated(i))
                answer += i;
        }
    });
    return answer;
}
console.log(day2());
