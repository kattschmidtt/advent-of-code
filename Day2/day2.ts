import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const entry: string[] = content.split(',');


function isRepeated(n: number): boolean {
  const item = String(n);

  //must be even length 
  if (item.length % 2 !== 0) return false;

  const firstHalf = item.slice(0, item.length / 2);
  const secondHalf = item.slice(item.length / 2);

  //return if first half is same length
  return firstHalf === secondHalf;
}

function day2(): number { 

  let answer: number = 0;

  // for each entry in the input seperated by a - we will find the upper and lower
  entry.forEach((id) => {
    const [lowerId, upperId] = id.split("-");
    const lower = parseInt(lowerId);
    const upper = parseInt(upperId);

    //starting from lower we increment until upper and check if i is repeated
    //  if it is: we add it to the answer
    //  if it isnt: we continue until upper is hit
    for (let i = lower; i <= upper; i++) {
      if (isRepeated(i)) answer += i;
    }
  })

  return answer;
}

console.log(day2());