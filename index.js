// Codewars: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript


function solution(number){
  let multipleFlag = number % 3 === 0 || number % 5 === 0;
  
  console.log(multipleFlag);
}


solution(6);
solution(5);
solution(8);