import * as fs from 'fs';

const filePath: string = 'input.txt';
const content: string = fs.readFileSync(filePath, 'utf-8');
const entry: string[] = content.split('\n'); //"batteries" in the problem

function day3(): number {
  let answer = 0; //maximum holtage possible from each bank, final answer

  //const entry = ['987654321111111', '811111111111119', '234234234234278', '818181911112111'];

  entry.forEach(bank => {
    let maxJoltage = 0; 
    //console.log('hehe ', typeof bank);

    for (let i = 0; i < bank.length - 1; i++) {
      for (let j = i + 1; j < bank.length; j++) {
        let currentJoltage = parseInt(bank[i] + bank[j]);
        
        if (currentJoltage > maxJoltage) maxJoltage = currentJoltage;
      }
      //console.log(bank[i])
    }

    answer = answer + maxJoltage; //add the highest joltage
    console.log('maxJoltage: ', maxJoltage)
    console.log('answer: ', answer)

  });

  return answer;
}

console.log(day3());