//! 클래스 확장

// 상속(extends)
// 클래스 A가 클래스 B를 확장할 때
// : A를 B의 서브클래스(자식클래스, 하위클래스)
// : B를 A의 슈퍼클래스(부모클래스, 상위클래스)
// 서브클래스는 슈퍼클래스의 멤버(속성, 메소드)를 가짐.

//? 클래스 확장(상속) 구현

class Base {
  public answer: number = 42;

  greeting() {
    console.log("Hello, TS!");
  }
}
// Base 클래스를 상속받는 Extended 클래스
class Extended extends Base { }

const extended: Extended = new Extended();
console.log(extended.answer);
extended.greeting();

//? 클래스 확장 시 생성자
// : 상위 클래스의 생성자는 하위 클래스의 생성자에서 자동 호출 X
// : 하위 클래스의 생성자에서 반드시 super 키워드를 사용해 상위 클래스의 생성자를 호출해야 한다.

{
  class Base {
    baseProp: number;
    constructor() {
      this.baseProp = 123;
    }
  }
  class Extended extends Base {
    extendedProp: number;
    constructor() {
      super();
      this.extendedProp = 456;
    }
  }
  const extended: Extended = new Extended();
  console.log(extended.baseProp);
  console.log(extended.extendedProp);
}