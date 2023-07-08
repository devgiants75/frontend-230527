// 자바스크립트 오류와 예외처리

//! 예외 처리의 필요성
// 1. 프로그램의 안정성 보장: 예외 처리를 통해 예상치 못한 상황에 대응하여 프로그램이 갑자기 중단되는 것을 방지할 수 있다.
// 2. 버그 발견 및 디버깅 용이성: 예외 처리를 통해 오류가 발생한 상황과 원인을 명확히 파악할 수 있어, 버그를 빠르게 발견하고 수정하는 데 도움이 된다.
// 3. 사용자 경험 향상: 예외 처리를 통해 예외 상황을 적절히 사용자에게 안내하여 사용자 경험을 향상시킬 수 있다.

//! 구문 오류 VS 런타임 오류

//? 구문오류(SyntaxError)
// 코드가 자바스크립트의 언어 규칙을 따르지 않을 때 발생

// let name = "John
// SyntaxError: Invalid or unexpected token

//? 런타임오류(RuntimeError)
// 코드 실행 중에 발생하는 오류
// 존재하지 않는 함수를 호출 || 정의되지 않은 변수를 참조 || 숫자를 0으로 나누려고 할 때 런타임오류 발생

// console.log(undefinedVariable);
// ReferenceError: undefinedVariable is not defined

//? 자바스크립트의 오류의 종류와 특징
//

//! 자바스크립트 예외 처리 구문

//? try...catch...finally 구문
try {
  // 실행할 코드
} catch(error) {
  // 에러 처리 코드
} finally {
  // 항상 실행될 코드
}

// try블록: 에러가 발생할 수 있는 코드를 포함, 이 코드가 정상적으로 실행되면 catch 블록은 건너뛰고, finally 블록이 실행

// catch블록: try블록에서 에러가 발생하면, 실행이 중단되고 제어는 해당 에러 정보와 함께 catch블록으로 이동

// finally블록: try와 catch 블록의 실행 후에 항상 실행

function exampleFunction () {
  let value = 'value';
  
  try {
    console.log(value);
    console.log(nonExistentVariable);
    console.log("This message will not be displayed");
  } catch (error) {
    console.log("An error has occured", error.message);
  } finally {
    console.log("Finally block has been executed");
  }
}

exampleFunction();

//? throw 구문
// 사용자 정의 에러를 발생시킬 때 사용
// throw 키워드를 사용하면 실행이 즉시 중지,
// 가장 가까운 예외 처리블록(catch)으로 제어가 넘어갑니다.
// catch 블록이 없으면 프로그램 실행을 중지

// 단순하게 예외를 발생시킴
// throw 문자열

// 조금 더 자세하게 예외를 발생시킴
// throw new Error("This is an error message");


function divide (a, b) {
  if (b === 0) {
    throw '0으로는 나눌 수 없습니다.'
  }
  return a / b;
}

console.log(divide(10, 2));
// console.log(divide(10, 0));


