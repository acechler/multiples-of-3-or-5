// Codewars: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript


function solution(number){
  let multipleOf5;
  let multipleOf3;

  for(let i = 0; i < number; i++){
    multipleOf3 = i % 3 === 0;
    multipleOf5 = i % 5 === 0;
    console.log(` ${i} ->  3: ${multipleOf3}  5: ${multipleOf5}`);
  }
  
}


solution(6);
solution(5);
solution(8);