// 객체와 배열 고급
// 자바스크립트를 활용해서 리액트, 뷰 등의 프레임워크 등을 사용해서 개발할 때 사용하는 개념

// eslint 설치 후 
// clg 입력 후 자동완성 키능: console.log()

//! 객체

//? 객체 존재 여부
// 객체 내부에 어떤 속성이 있는지 확인해보는 코드작성법

// 객체에 없는 속성에 접근을 하면 undefined 자료형이 출력
// 조건문으로 undefined인지 아닌지를 확인하면 속성 존재 여부를 확인 가능

const object = {
  name: '자바스크립트',
  price: 18000,
  publisher: '코리아 it 아카데미'
}

// 객체 내부에 속성이 있는지 확인
if (object.name !== undefined) {
  console.log('name 속성이 있습니다.')
} else {
  console.log('name 속성이 없습니다.')
}

if (object.author !== undefined) {
  console.log('author 속성이 있습니다.')
} else {
  console.log('author 속성이 없습니다.')
}
console.log('====================')

// 객체의 특정 속성이 false로 변환될 수 있는 값(0, false, 빈 문자열)이 아닐 때와 같은 전제가 있어야 사용할 수 있는 코드

// 객체 내부에 속성이 있는지 확인
if (object.name) {
  console.log('name 속성이 있습니다.')
} else {
  console.log('name 속성이 없습니다.')
}

if (object.author) {
  console.log('author 속성이 있습니다.')
} else {
  console.log('author 속성이 없습니다.')
}
console.log('====================')

// 짧은 연산 조건문을 사용하여 간단하게 작성 가능
object.name || console.log('name 속성이 없습니다.')
object.author || console.log('author 속성이 없습니다.')
console.log('====================')

//? 객체의 기본 속성 지정
// 객체의 속성이 있는지 확인, 
// 해당 속성이 없다면 별도의 문자열 지정하는 코드

const object2 = {
  name: '자바스크립트',
  price: 18000,
  publisher: '코리아 it 아카데미'
}

object2.name = object2.name !== undefined ? object2.name : '제목 미정'
object2.author = object2.author !== undefined ? object2.author : '저자 미정'

// 객체 출력
console.log(object2)

// 자바스크립트 객체를 JSON 형식의 문자열로 변환
// JSON.stringify()메소드를 사용
console.log(JSON.stringify(object2, null, 2))
console.log("===================")

// 객체 기본 속성을 지정
console.log(object2.name = object2.name || '제목 미정')

// 67번째 코드를 주석 처리한 후 실행
console.log(object2.author = object2.author || '저자 미정')
console.log("===================")

//! 배열 기반의 다중 할당
// 한 번에 여러 개의 변수에 값을 할당하는 다중 할당 기능이 추가

// 다중 할당 기본구조
// [식별자, 식별자, ...] = 배열

// let [a, b]의 형태로 선언했기 때문에
// a, b는 변수가 됩니다.
let [a, b] = [1, 2] // a = 1, b = 2가 할당
console.log(a, b);

// 식별자(변수 또는 상수)
[a, b] = [b, a]
console.log(a, b);

// 배열의 크기는 같을 필요가 X
// const 키워드로도 사용할 수 있다.

let arrayA = [1, 2, 3, 4, 5];
const [aa, bb, cc] = arrayA;

console.log(aa, bb, cc);

//! 객체 기반의 다중 할당

// 객체 속성을 꺼내서 다중 할당
// { 속성이름, 속성이름, ... } = 객체
// { 식별자=속성이름, 식별자=속성이름, ... } = 객체

// 객체 생성
const object3 = {
  name: '자바스크립트',
  price: 18000,
  publisher: '코리아 it 아카데미'
}

const { name, price } = object3;
// name속성과 price속성을 그대로 꺼낸다.

console.log('속성이름 그대로 꺼내서 출력하기');
console.log(name, price);
console.log('')

const { aaa=name, bbb=price } = object3;
// name 속성을 aaa라는 이름으로
// price 속성을 bbb라는 이름으로 꺼낸다.

console.log('다른 이름으로 속성 꺼내서 출력하기');
console.log(aaa, bbb);

//! 배열 전개 연산자

//? 얕은 복사
// 배열과 객체는 할당할 때 얕은 복사라는 것이 이루어짐.

const food1 = ['우유', '식빵'];
const food2 = food1;
console.log(food2);
food2.push('고구마');
food2.push('토마토');

// 출력
console.log(food1); // ['우유', '식빵', '고구마', '토마토']
console.log(food2); // ['우유', '식빵', '고구마', '토마토']

// 배열은 복사하더라도 다른 이름일 뿐, 같은 배열로 취급
// : 얕은 복사(참조 복사)

//? 깊은 복사(클론 복사)
// 전개 연산자를 사용해서 깊은 복사를 할 수 있다.

// [...배열]

const food3 = ['milk', 'bread'];
const food4 = [...food3];
food4.push('sweet potato');
food4.push('tomato');

console.log(food3);
console.log(food4);

// 전개 연산자를 사용한 배열 요소 추가
const food5 = ['두유', '떡'];
const food6 = ['과자', ...food5 ,'음료수'];
// 해당 위치에 복사되어 전개되는 것이므로 위치를 원하는 곳에
// 놓아서 요소들의 순서를 바꿀 수 있다.

console.log(food5);
console.log(food6);

// 2개 이상의 배열을 붙일 경우
const array1 = ['우유', '식빵'];
const array2 = ['두유', '떡'];

console.log([...array1, ...array2]);
console.log([...array2, ...array1]);

//! 객체 전개 연산자
// 객체도 깊은 복사를 할 때 전개 연산자를 사용

// 전개 연산자를 사용한 객체 복사
// {...객체}

// 얉은 복사로 객체 복사하기
const cloud = {
  name: '구름',
  age: 3,
  breed: '푸들'
}

const star = cloud;
star.name = '별'
star.age = 2
star.breed = '리트리버'

console.log(JSON.stringify(cloud));
console.log(JSON.stringify(star));
console.log("---------------------")

const cloud2 = {
  name: '구름',
  age: 3,
  breed: '푸들'
}

const star2 = {...cloud2};
star2.name = '별'
star2.age = 2
star2.breed = '리트리버'

console.log(JSON.stringify(cloud2));
console.log(JSON.stringify(star2));
console.log("---------------");

// 전개 연산자를 사용한 객체 요소 추가
// {...객체, 자료, 자료}

const cloud3 = {
  name: '구름',
  age: 3,
  breed: '푸들'
}

const star3 = {
  ...cloud3,
  name: '별', // 기존의 속성을 덮어쓴다.
  age: 2, // 기존의 속성을 덮어쓴다.
  vaccination: true
}

console.log(JSON.stringify(cloud3));
console.log(JSON.stringify(star3));
console.log("---------------");

const cloud4 = {
  name: '구름',
  age: 3,
  breed: '푸들'
}

const star4 = {
  name: '별', // 기존의 속성을 덮어쓴다.
  age: 2, // 기존의 속성을 덮어쓴다.
  vaccination: true,
  ...cloud4
}

console.log(JSON.stringify(cloud4));
console.log(JSON.stringify(star4));