import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const tempDB: string[] = content.split('\n');

function day5(): number {
  let answer = 0; //fresh available ingredient IDs

  // idRanges = fresh ingredient ID ranges
  // availableId = available ingredient IDs

  const splitIndex = tempDB.indexOf("");
  const idRanges = tempDB.slice(0, splitIndex);
  const availableId = tempDB.slice(splitIndex + 1);

  for (let i = 0; i < availableId.length; i++) {
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
    
    console.log(includedInRangeCounter);
    answer += includedInRangeCounter;
  }

  return answer;
}

console.log(day5());