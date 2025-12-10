"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'input.txt';
var content = fs.readFileSync(filePath, 'utf-8');
var entry = content.split(/r?\n/);
function day1() {
    var combination = entry;
    var password = 0; //the final password
    var startingPosition = 50;
    var currentPosition = startingPosition;
    var dialLength = 100; //set to 100 to include 0
    for (var i = 0; i < combination.length; i++) {
        if (/L(\d+)/.test(combination[i])) {
            var rotationAmount = /(\d+)/.exec(combination[i]);
            if (rotationAmount) {
                currentPosition = (currentPosition - parseInt(rotationAmount[1]) + dialLength) % dialLength;
            }
        }
        else {
            var rotationAmount = /(\d+)/.exec(combination[i]);
            if (rotationAmount) {
                currentPosition = (currentPosition + parseInt(rotationAmount[1]) + dialLength) % dialLength;
            }
        }
        //checking if current position value is 0, increment password counter
        if (currentPosition === 0)
            password++;
    }
    console.log('final password is: ', password);
    return password;
}
day1();
