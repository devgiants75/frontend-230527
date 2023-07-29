{
  //! 문제 1: 배열 내의 모든 숫자 더하기
// 주어진 숫자 배열에서 모든 요소를 더한 값을 반환하는 함수를 작성

let number: number[] = [1, 2, 3, 4, 5];

let sum: number = number.reduce((total, num) => total + num, 0);
console.log(sum);
}

{
  //! 문제 2: 짝수만 골라내기
// 주어진 숫자 배열에서 짝수인 요소만 모아 새 배열을 반환하는 함수를 작성

let numbers: number[] = [1, 2, 3, 4, 5];
let evens: number[] = numbers.filter(num => num % 2 === 0);
console.log(evens);
}

{
  //! 문제 3: 각 요소를 제곱하기
// 주어진 숫자 배열의 각 요소를 제곱한 새 배열을 반환하는 함수를 작성

let numbers: number[] = [1, 2, 3, 4, 5];
let squares: number[] = numbers.map(num => num * num);
console.log(squares);
}

{
  //! 문제 4: 문자열로 변환하기
// 주어진 숫자 배열의 각 요소를 문자열로 변환한 새 배열을 반환하는 함수를 작성

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = numbers.map(num => num.toString());
console.log(strings);
}