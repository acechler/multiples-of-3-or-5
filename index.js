// Codewars: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {

  if(number < 0){
    return 0;
  }

  const multiples = [];
  let multipleOf5;
  let multipleOf3;
  for (let i = 1; i < number; i++) {
    multipleOf3 = i % 3 === 0;
    multipleOf5 = i % 5 === 0;
    //console.log(` ${i} ->  3: ${multipleOf3}  5: ${multipleOf5}`);
    const checkForMultiple = i;
    const notInArray = !multiples.includes(checkForMultiple);
    if (multipleOf3 === true || multipleOf5 === true) {
        if(notInArray && i < number){
            multiples.push(i);
        }
    }
  }

  let sum = 0;
  multiples.forEach(num =>{
    sum+=num;
  });
  console.log(sum);
  for (let i = 0; i < multiples.length; i++){
    console.log(multiples[i]);
  }
}

solution(10);

