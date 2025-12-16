import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const entry: string[] = content.split(/\r?\n/)

//check if the ENITRE column is empty
function isColumnEmpty(rows: string[], column: number): boolean {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i][column] !== " ") return false;
  }
  return true;
}

function day6():number {

  let answer = 0;
  let rows = entry;

  const rowCount = rows.length;
  const addOrMultipleRow = rowCount - 1;
  const colCount = rows[0].length; //each row length
  let currentCol = 0;
  
  //scan col left to right
  while (currentCol < colCount) {
    
    //checking bounds, if this column IS a seperator we move on
    if (isColumnEmpty(rows, currentCol)) {
      currentCol++;
      continue;
    }

    const start = currentCol;

    //advance until emptyspace is found
    while (currentCol < colCount && !isColumnEmpty(rows, currentCol)) {
      currentCol++;
    }

    //after we finish make the end the start
    const end = currentCol;

    let digits: number[] = [];

    //for every row extract the numbers 
    for (let i = 0; i < addOrMultipleRow; i++) {
      const slice = rows[i].slice(start, end).trim();
      
      if (slice.length > 0) digits.push(parseInt(slice, 10)); //parse the numbers and add to digits array
    }

    //extracting operator (+ or *) row
    const operator = rows[addOrMultipleRow].slice(start, end).trim();

    let colAnswer = 0;

    //doing the actual math
    if (operator === "+") {
      for (const d of digits) {
        colAnswer += d;
      }
    } else if (operator === "*") {
      colAnswer = 1; //set to 1 so we dont get 0 because *multiplication*
      for (const d of digits) {
        colAnswer *= d; 
      }
    } 

    answer += colAnswer;
  }

  return answer;
}

console.log(day6());