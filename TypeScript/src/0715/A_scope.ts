// 타입스크립트의 기본타입

// 1. 불리언 boolean
// 2. 숫자 number
// 3. 문자열 string
// 4. null/undefined
// 5. any
// 6. void
// 7. never
function alwaysThrow(): never {
  throw new Error("I am a wicked function!");
}


//! 함수 수준 스코프(Scope)
// : 모든 변수 선언이 함수 수준에서 이루어짐을 의미
// : 자바스크립트에서 코드 블록({...})은 새로운 스코프를 생성하지 않는다.

function scopeExample() {
  // 함수 실행 시 작동할 동작: 코드 블록
  var abc = 123;
  if(true) {
    var abc = 456;
  }
  console.log(abc);
}
scopeExample(); // 456

// ts-node 명령어 실행 안될 때
// npm install --save-dev typescript ts-node

function scopeExample2() {
  var abc = 123;
  function bar() {
    var abc = 456;
  }
  console.log(abc);
}
scopeExample2(); // 123

//! 호이스팅
// : 변수의 선언과 초기화가 동시에 이루어졌을 때, 자바스크립트 인터프리터가 변수의 선언을 함수 맨 위로 이동시키는 동작

function hoistingEx() {
  // console.log(bar);
  var bar = 123;
}

// 자바스크립트에서 코드를 읽는 법
function hoistingEx2() {
  var bar;
  console.log(bar);
  bar = 123;
}
hoistingEx2();

//! 블록 수준 스코프

//! let
{
let goOut = true;
if (true) {
  let goOut = false; // let을 이용할 경우 []대괄호 블록과 if블록 내에서의 선언은 해당 블록 안에서만 의미O
}
console.log(goOut); // true
goOut = false;
console.log(goOut); // false
}
// console.log(goOut); // 오류: 'goOut' 이름을 찾을 수 없습니다.

//! const
// const로 선언한 변수는 재할당이 불가능 = 상수
// 단, 불변값은 X: Object(객체)나 Array(배열) 타입의 변수를 const로 정의하더라도, 그 객체의 내부 상태를 조작하는 것은 가능

const notAble = 3;
// notAble = 4; // 재할당 불가능
const arr = [1, 2];
arr.push(3);
console.log(arr);

const object = {a: 2};
object.a = 3;
console.log(object);

