"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'input.txt';
var content = fs.readFileSync(filePath, 'utf-8');
var entry = content.split(/\r?\n/);
//check if the ENITRE column is empty
function isColumnEmpty(rows, column) {
    for (var i = 0; i < rows.length; i++) {
        if (rows[i][column] !== " ")
            return false;
    }
    return true;
}
function day6() {
    var answer = 0;
    var rows = entry;
    var rowCount = rows.length;
    var addOrMultipleRow = rowCount - 1;
    var colCount = rows[0].length; //each row length
    var currentCol = 0;
    //scan col left to right
    while (currentCol < colCount) {
        //checking bounds, if this column IS a seperator we move on
        if (isColumnEmpty(rows, currentCol)) {
            currentCol++;
            continue;
        }
        var start = currentCol;
        //advance until emptyspace is found
        while (currentCol < colCount && !isColumnEmpty(rows, currentCol)) {
            currentCol++;
        }
        //after we finish make the end the start
        var end = currentCol;
        var digits = [];
        //for every row extract the numbers 
        for (var i = 0; i < addOrMultipleRow; i++) {
            var slice = rows[i].slice(start, end).trim();
            if (slice.length > 0)
                digits.push(parseInt(slice, 10)); //parse the numbers and add to digits array
        }
        //extracting operator (+ or *) row
        var operator = rows[addOrMultipleRow].slice(start, end).trim();
        var colAnswer = 0;
        //doing the actual math
        if (operator === "+") {
            for (var _i = 0, digits_1 = digits; _i < digits_1.length; _i++) {
                var d = digits_1[_i];
                colAnswer += d;
            }
        }
        else if (operator === "*") {
            colAnswer = 1; //set to 1 so we dont get 0 because *multiplication*
            for (var _a = 0, digits_2 = digits; _a < digits_2.length; _a++) {
                var d = digits_2[_a];
                colAnswer *= d;
            }
        }
        answer += colAnswer;
    }
    return answer;
}
console.log(day6());
