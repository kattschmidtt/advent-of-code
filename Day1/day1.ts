import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const entry: string[] = content.split(/r?\n/)

function day1(): number { 

  const combination = entry;

  let password: number = 0;  //the final password
  let startingPosition: number = 50;
  let currentPosition: number = startingPosition;
  const dialLength = 100; //set to 100 to include 0

  for (let i = 0; i < combination.length; i++) {
    if (/L(\d+)/.test(combination[i])) {
      const rotationAmount = /(\d+)/.exec(combination[i]);
      
      if (rotationAmount) {
        currentPosition = (currentPosition - parseInt(rotationAmount[1]) + dialLength) % dialLength;
      }
    }
    else {
      const rotationAmount = /(\d+)/.exec(combination[i]);

      if (rotationAmount) {
        currentPosition = (currentPosition + parseInt(rotationAmount[1]) + dialLength) % dialLength;
      }
    }

    //checking if current position value is 0, increment password counter
    if (currentPosition === 0) password++;
  }

  console.log('final password is: ', password);
  return password;
}

day1();

