"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'input.txt';
var content = fs.readFileSync(filePath, 'utf-8');
var tempDB = content.split('\n');
function day5() {
    var answer = 0; //fresh available ingredient IDs
    // idRanges = fresh ingredient ID ranges
    // availableId = available ingredient IDs
    var splitIndex = tempDB.indexOf("");
    var idRanges = tempDB.slice(0, splitIndex);
    var availableId = tempDB.slice(splitIndex + 1);
    for (var i = 0; i < availableId.length; i++) {
        var includedInRangeCounter = 0; //keep track of if the ingredient id is in any of the ranges
        for (var j = 0; j < idRanges.length; j++) {
            var range = idRanges[j];
            var _a = range.split("-").map(Number), lower = _a[0], upper = _a[1]; //make it a number dummy 
            //if the available id is inclusively inbetween the range (lower and upper) we increment counter
            if (Number(availableId[i]) >= lower && Number(availableId[i]) <= upper) {
                includedInRangeCounter++;
                break;
            }
        }
        console.log(includedInRangeCounter);
        answer += includedInRangeCounter;
    }
    return answer;
}
console.log(day5());
