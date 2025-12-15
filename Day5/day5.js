"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'input.txt';
var content = fs.readFileSync(filePath, 'utf-8');
var tempDB = content.split(/r?\n/).map(function (line) { return line.trim(); });
function day5() {
    var answer = 0; //fresh available ingredient IDs
    // idRanges = fresh ingredient ID ranges
    // availableId = available ingredient IDs
    var splitIndex = tempDB.indexOf("");
    var idRanges = tempDB.slice(0, splitIndex);
    var availableId = tempDB.slice(splitIndex + 1);
    /*   for (let i = 0; i < availableId.length; i++) {
        let includedInRangeCounter = 0; //keep track of if the ingredient id is in any of the ranges
    
        for (let j = 0; j < idRanges.length; j++) {
          const range = idRanges[j];
    
          const [lower, upper] = range.split("-").map(Number); //make it a number dummy
          
          
    
          //if the available id is inclusively inbetween the range (lower and upper) we increment counter
          if (Number(availableId[i]) >= lower && Number(availableId[i]) <= upper) {
            includedInRangeCounter++;
            break;
          }
        }
        
        //console.log('part 1: ', includedInRangeCounter);
        //answer += includedInRangeCounter;
      }
     */
    // PART 2
    var ranges = idRanges.map(function (entry) { return entry.split('-').map(Number); });
    //soritng by the lower end of the current range and lower end of the next element in ascending order
    ranges.sort(function (current, next) { return current[0] - next[0]; });
    var lower = ranges[0][0];
    var upper = ranges[0][1];
    for (var i = 1; i < ranges.length; i++) {
        var _a = ranges[i], start = _a[0], end = _a[1]; //mapping respective start and end points
        if (start <= upper + 1) {
            upper = Math.max(upper, end);
        }
        else {
            //move the pointers over one
            answer += upper - lower + 1;
            lower = start;
            upper = end;
        }
    }
    answer += upper - lower + 1;
    return answer;
}
console.log(day5());
