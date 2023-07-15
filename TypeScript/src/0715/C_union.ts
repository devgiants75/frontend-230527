console.log("TS의 고급타입 : 유니언 타입");

//! 유니언(union) & 내로잉(narrowing)

//? 유니언
// : 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
//? 내로잉
// : 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

//! 유니언 타입
// '이거 혹은 저거'
// 가능한 값 또는 구성 요소 사이에 |(verticle bar, 파이프 기호) 연산자를 사용해 유니언 타입을 정의
// 타입 정의 순서는 상관X

let idol = Math.random() > 0.5 ? undefined : 'IVE';

let idol2: null | string = null;
if (Math.random() > 0.5) {
  idol2 = 'aespa';
}

// 유니언 타입은 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성에만 접근 가능
let idol3 = Math.random() > 0.5 ? 123 : 'LE SSERAFIM';

// idol3.toUpperCase();
// idol3.toFixed();
idol3.toString(); // toString() : number타입과 string타입 모두 사용 가능

//! 내로잉(narrowing)
// : 값이 정의, 이전에 유추된 것보다 더 구체적인 타입임을 코드에서 유추하는 것

//? 1. 값 할당을 통한 내로잉
// 변수에 직접 값을 할당

let actor: number | string;
// actor.toUpperCase();
// actor.toFixed();
actor = "Nam Joo Hyuk";
actor.toUpperCase();

actor = 123;
actor.toFixed();

//? 2. 조건 검사를 통한 내로잉
// if문을 사용해서 변수의 값을 좁히는 방법
let actor2 = Math.random() > 0.5 ? "Seo Kang Jun" : 29;

if (actor2 === "Seo Kang Jun") {
  actor2.toUpperCase();
}
// actor2.toUpperCase();

//? typeof 검사를 통한 내로잉

if (typeof actor2 === "string") {
  actor2.toUpperCase();
}

if (!(typeof actor2 === "string")) {
  // number
  actor2.toFixed();
} else {
  // string
  actor2.toUpperCase();
}

// 위의 if-else문을 삼항 연산자로 변환

typeof actor2 === "string" ? actor2.toUpperCase() : actor2.toFixed();

//? false값으로 쓸 수 있는 값
// false, 0, -0, null, undefined, NaN