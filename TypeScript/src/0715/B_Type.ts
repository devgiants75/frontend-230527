//! 타입 별칭(type alias): 이미 존재하는 타입에 다른 이름을 붙여 복잡한 타입을 간단하게 쓰는 도구

import { TransformStreamDefaultController } from "node:stream/web";

// 타입 별칭 형태
// 타입 별칭은 대문자로 시작
// type NewType = Type;

// 타입 별칭을 갖게 될 타입(형테에서 Type의 위치)의 자리에는 기본 타입을 포함한 모든 타입이 올 수 있다.

type UUID = string;
type Height = number;
type AnotherUUID = UUID; // 이미 선언된 UUID의 타입과 동일하게 처리

type Animal = [];
type Animals = Animal[];
type User = { // 이름과 높이라는 두 개의 속성을 가진 객체 타입으로 처리
  name: string;
  height: number;
}

function getUser(uuid: User) {
  return `${uuid.name}, ${uuid.height}`;
}

let Seugnah: User = {
  name: 'Seugnah',
  height: 169
};
console.log(getUser(Seugnah));

function getUser2(uuid: UUID) {
  //
}
// getUser2(7); 

//? 유니언 타입을 활용한 타입 별칭
type MyType = boolean | number | string | null | undefined;

let color1: MyType;
let color2: MyType;
let color3: MyType;

//! 할당 가능성( 타입 호환성 )
console.log("할당 가능성");

type OddNumber = 1;
const one: OddNumber = 1;
let num: number = one;
// OddNumber 타입은 number타입에 할당 가능

type OneDigitOdd = 1 | 3 | 5 | 7 | 9;
const three: OneDigitOdd = 3;
num = three;

const four: number = 4;
num = four;
// const one2: OddNumber = four;

//! 타입 어노테이션 (type Annotation): 변수 이름 뒤에 배치되면서 콜론(:)과 타입 이름을 기재하여 타입을 명시하는 것
let phone; 
phone = 'Galaxy';
phone.toUpperCase();

phone = 123;
// phone.toUpperCase();