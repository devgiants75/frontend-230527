console.log("Intersaction");
// 인터섹션 타입(Intersaction)
// : 여러 경우에 모두 해당

// 유니언 : 이거 혹은 저거
// 내로잉 : 이거 혹은 저거 중에서 이것

// 프로그래머를 나타내는 변수
type Programmer = { favoriteLanguage: string };
const programmer: Programmer = { favoriteLanguage: 'TypeScript' };

// 디저트를 좋아하는 사람을 나타내는 변수
type DissertLover = { favoriteDissert: string };
const dissertLover: DissertLover = { favoriteDissert: 'cheeseCake' }; 

// 디저트를 좋아하는 프로그래머를 나타내는 변수
type DissertLoverProgrammer = { 
  favoriteLanguage: string;
  favoriteDissert: string;
};
const seungAh: DissertLoverProgrammer = {
  favoriteLanguage: 'TypeScript',
  favoriteDissert: 'cheeseCake'
};

//? 인터섹션 타입의 형태
// : 여러 타입을 &(앰퍼샌드) 기호로 이어서 인터섹션 타입을 나타낸다.
type DissertLoverProgrammer2 = Programmer & DissertLover;

type notAble = string & number; // 실제로 어떤 값도 가질 수 없다.

type Awsome 
  = Programmer 
  & DissertLover 
  & notAble;