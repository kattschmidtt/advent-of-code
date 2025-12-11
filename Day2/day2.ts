import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const entry: string[] = content.split(',');

//part 2: we must check all variable amounts of substring lengths
function isRepeated(n: number): boolean {
  const item = String(n);
  const itemLen = item.length;

  //loop through each chunk of repeated numbers
  // we start at 1 since there must be at least one set of numbers
  // example: 123123123 
  for (let i = 1; i <= Math.floor(itemLen / 2); i++) {
    if (itemLen % i !== 0) continue; //this means there might be more even chunks
    
    const copies = item.slice(0, i);// 123
    const repeatCount = itemLen / i; // 3 repeating sets of 123

    //if the first set of copies matches the item return true
    if(copies.repeat(repeatCount) === item) return true;
  }

  return false;
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