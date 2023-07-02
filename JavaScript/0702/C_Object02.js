// 자바스크립트의 내장 객체 

// Built-in Objects(내장 객체) 제공
// 특정 작업을 수행, 복잡한 기능을 쉽게 구현할 수 있도록 도와주는 메소드와 속성을 제공

//! 1. String

let str = "  Hello, World!  ";
console.log(str.length) // 문자열 길이
console.log(str.toUpperCase()); // 모든 문자를 대문자로 변환
console.log(str.trim()); // 문자열 양쪽 끝의 공백(띄어쓰기, 줄바꿈) 없애기
console.log(str.split(',')) // 문자열을 매개변수(다른 문자열)로 잘라서 배열을 만들어 리턴하는 기능

//! 2. Number

let num = 123.456;
console.log(num.toFixed(2)); // 소수점 아래 2번째 자리까지 표시(반올림)

// isNaN()
// isFinite()

//! 3. Array

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 배열의 길이
arr.push(6);
console.log(arr);

//! 4. Math
console.log(Math.PI); // 원주율
console.log(Math.sqrt(16)); // 제곱근 계산
console.log(Math.random()); // 0과 1사이의 숫자를 랜덤형식(무작위)
console.log(Math.floor(Math.random() * 101)); // 0과 100 사이의 숫자

//! 5. Date
// 날짜와 시간을 처리하는 메소드

let now = new Date();
console.log(now); // 현재 시간

//! 6. JSON
// JSON객체는 JSON 포맷 데이터를 처리하는 메소드

let obj = { name: 'Seugn Ah', age: 97};
console.log(obj);
let json = JSON.stringify(obj); // 객체를 JSON 문자열로 변환
console.log(json);

let parsed = JSON.parse(json);
console.log(parsed);

