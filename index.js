// Codewars: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {

  /// Guard against negative arguements.
  if(number < 0){
    return 0;
  }

  const multiples = [];
  let multipleOf5;
  let multipleOf3;

  /// Add values to the array that meet requirements.
  // Multiple of 3 = true
  // multiple of 5 = true
  // Values not already in array = true 
  // Multiple is less than arguement.
  for (let i = 1; i < number; i++) {
    multipleOf3 = i % 3 === 0;
    multipleOf5 = i % 5 === 0;
    const checkForMultiple = i;
    const notInArray = !multiples.includes(checkForMultiple);
    if (multipleOf3 === true || multipleOf5 === true) {
        if(notInArray && i < number){
            multiples.push(i);
        }
    }
  }

  // Add the list of values.
  let sum = 0;
  multiples.forEach(num =>{
    sum+=num;
  });
  return sum;
}

solution(34);

