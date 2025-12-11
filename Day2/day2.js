"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'input.txt';
var content = fs.readFileSync(filePath, 'utf-8');
var entry = content.split(',');
function isRepeated(n) {
    var item = String(n);
    //must be even length 
    if (item.length % 2 !== 0)
        return false;
    var firstHalf = item.slice(0, item.length / 2);
    var secondHalf = item.slice(item.length / 2);
    //return if first half is same length
    return firstHalf === secondHalf;
}
function day2() {
    var answer = 0;
    entry.forEach(function (id) {
        var _a = id.split("-"), lowerId = _a[0], upperId = _a[1];
        var lower = parseInt(lowerId);
        var upper = parseInt(upperId);
        for (var i = lower; i <= upper; i++) {
            if (isRepeated(i))
                answer += i;
        }
    });
    return answer;
}
console.log(day2());
