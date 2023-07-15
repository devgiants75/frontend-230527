// 타입스크립트 변수 선언
// JS: var, let, const

// 타입스크립트는 변수 선언 시 변수의 타입을 명시
let naming: string = 'Seungah';
const age: number = 24;
var isMarried: boolean = false;

// naming = 24; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.

// 타입스크립트 변수 선언 예시
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

let list: number[] = [1, 2, 3];
let x: [string, number]; // Tuple
x = ["hello", 10]; 

enum Color {Red, Green, Blue} // Enum
let c: Color = Color.Green;

let notSure: unknown = 4; // Unknown
let looselyTyped: any = 4; // Any

function warnUser(): void { // Void
    console.log("This is my warning message");
}

let u: undefined = undefined; // Undefined
let n: null = null; // Null

// Never
function error(message: string): never {
    throw new Error(message);
}

let someValue: unknown = "this is a string"; // Unknown
let strLength: number = (someValue as string).length;

//! 타입스크립트 타입

//! 원시 타입
// string, number, boolean
// JS에서 typeof연산자를 사용했을 때 각각의 해당 타입이 출력되는 타입

//? boolean
// 참(true) & 거짓(false) 값을 나타내는 논리 타입

let isDone2: boolean = false;

//? number

let decimal2: number = 6;
let hex2: number = 0xf00d;

//? string

let colors: string = "blue";
colors = "red";

//! Array
// 배열 타입

// type[]: number[]
// Array<type>: Array<number>

// [number]: 배열 타입X

let lists: number[] = [1, 2, 3];
let lists2: Array<number> = [1, 2, 3];

//! Tuple (튜플)
// 고정된 수의 요소 타입, 순서가 있는 타입

let tuple: [string, number];
tuple = ["hello", 10];
// tuple = [10, "hello"];

//! void
// 주로 함수에서 반환 값이 없을 때 사용되는 타입
function introduce(): void {
  console.log("안녕하세요 이승아입니다.");
}

//! any 
// 특정하게 지정된 타입으로 인해 타입 검사 오류가 발생하는 것을 원하지 않을 때 사용

let obj: any = { x: 0 };
// any타입 지정 시 타입 검사가 비활성화

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const numberExample: number = obj;

//! null & undefined

let undefinedType: undefined = undefined;
let nullType: null = null;

let number: number;
// number = undefined; // 'undefined' 형식은 'number' 형식에 할당할 수 없습니다.

// null, undefined 타입은 다른 모든 타입의 하위 타입

// any << string, number, boolean, 배열, 객체 << undefined, null

//! 열거형(enum)
// 열거형은 enum키워드를 사용해 정의

// 숫자 열거형
enum Direction {
  Up = 1, // Up이 1로 초기화된 숫자 열거형을 선언
  Down, // 선언된 이후의 열거형 안의 멤버들은 자동으로 증가된 값을 가짐
  Left,
  Right,
}

enum Direction {
  Up2, // 0으로 자동 지정
  Down2, // 1
  Left2,
  Right2,
}

// 문자 열거형
// 열거형 멤버에 지정된 값은 유의미하고 읽기 좋은 값을 미리 지정

enum Direction {
  Up3 = "UP3", 
  Down3 = "Down3", 
  Left3 = "Left3",
  Right3 = "Right3",
}

//! bigint
// ES2020에 도입, 아주 큰 정수를 다루기 위한 원시 타입

// BigInt 함수를 통해서 bigint 값을 생성
const oneHundred: bigint = BigInt(100);
// const oneHundred2: bigint = 100n; 
// tsconfig.json에서 es2016으로 설정되어 있어 오류 발생

//! symbol
// 고유한 참조값(주소값)을 생성하는 데에 사용할 수 있는 자료형
// Symbol()함수를 사용해서 생성

// Symbol은 유일하고 변경 불가능한 값으로 생성
// const firstName = Symbol("name");
// const secondName = Symbol("name");

// if (firstName === secondName) {
//   console.log("두 이름이 같습니다.");
// }

const nameSymbol = Symbol("name");

const firstName = nameSymbol;
const secondName = nameSymbol;

console.log(firstName === secondName); // true
