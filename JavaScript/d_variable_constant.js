// 자바스크립트의 기본 문법

// 변수 & 상수

// 1. 변수
// 변하는 수(값이 달라질 수 있는 데이터) 
// ex) 나이, 연도 등

// 변수 선언 : 변수를 사용하기 위해 변수를 각각의 변수와 구별하기 위해 이름을 붙여주는 것

// 변수명 명명규칙
// 첫 글자 : 영문자, 언더스코어(_), 달러($)만 사용 가능
// 첫 글자 이후로는 숫자도 사용 가능
// 띄어쓰기 허용X
// 기호는 언더스코어, 달러만 사용 가능
// lowerCamelCase : 소문자로 작성, 여러 단어 연결 시 이어지는 단어의 시작은 대문자

// now, _now, now25, now$ (o)
// 25now, now 25, *now (x)

// 영어 대소문자 구별 now !=(not) Now
// 예약어 사용X

// 이름을 의미있게 작성
// pw (x) password
// 올해 연도 : Year1(x), currentYear(o)
// 태어난 연도 : Year2(x), birthYear(o)

// let
// let 블록{} 범위 변수, 재할당 가능

// 선언과 초기화
// 변수 변수명; (변수 선언)
// 변수명 = 값; (변수에 값을 할당)
// 변수 변수명 = 값; (선언과 동시에 할당 : 초기화)

// var
// 함수 유효 범위(function scope)를 가지는 변수를 선언

let letExample; // 변수 선언
var varExample; // 변수 선언

letExample = 10; // 값 할당
varExample = "Hello Var"; // 값 할당

let letExample2 = 20; 
var varExample2 = "Hello Var2";
// var 키워드의 경우 변수를 중복해서 선언할 수 있다는 위험성, 변수가 속하는 범위가 애매하여 코드에 혼란을 줄 수 있다. (사용X)

// Practice

// 나이 계산 프로그램 만들기

// 올해 연도, 태어난 연도, 나이에 대한 변수 선언
// 올해 연도를 나타내는 변수에는 2023(올해 연도) 값 할당

// 태어난 연도의 경우 prompt창에서 값을 받아옵니다. (할당)
// 나이 변수에 올해 연도와 태어난 연도를 사용하여 식을 완성

// 웹 브라우저에 결과 출력

// 올해는 2023년 입니다.
// '태어난 연도"에 태어난 사람의 나이는 "나이"세입니다.

// 2. 상수
// const 키워드 사용 (constant)
// 상수는 한 번 할당된 값을 변경할 수 없습니다.
// 상수의 경우 선언을 할 때 무조건 초기화 시켜야합니다.
// 객체(object)의 경우 주로 상수로 선언합니다.

const constExample = 30;

// UPPER_SNAKE_CASE 사용
// 모든 문자를 대문자로 작성, 두 개 이상의 단어가 결합될 때에는 _(언더스코어)를 사용합니다.

const PI = 3.14;



