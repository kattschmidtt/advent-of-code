import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const manifold: string[] = content.split(/\r?\n/); //called manifold because thats what it says in the problem


function day7() {

  const start = manifold[0].indexOf("S");
  let splitCount = 0; //number of splits that happen when a ^ is hit
  let activeBeams = new Set<number>([start]); //apparently have to use a set instead of an array because MeMoRY


  //scanning line by line starting after the first one. since S is given as the starting point and always the top line
  for (let i = 1; i < manifold.length; i++) {
    const line = manifold[i];
    const next = new Set<number>();

    for (const column of activeBeams) {
      const idx = line[column]; //current item we are looking at

      if (idx === "^") {
        splitCount++;

        //add 2 beams
        next.add(column - 1); 
        next.add(column + 1); 
      } else {
        next.add(column); 
      }
    }
    activeBeams = next;
  }
  
  return splitCount;
}

console.log(day7());