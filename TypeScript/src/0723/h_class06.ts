//! 추상 클래스
// : 다른 클래스에서 파생될 수 있지만, 그 자체로 인스턴스화 될 수 없는 클래스

//? 추상 클래스의 선언
// abstract 키워드를 사용해 선언

abstract class AbstractClass {
  abstract property: string;

  abstract method1(): void; // 메소드를 선언, 구현X
  // 구현은 상속을 받는 하위 클래스에서 이루어 짐.

  method2(): void {
    console.log('추상 메소드가 아닙니다.');
  }
}

class ConcreteClass extends AbstractClass {
  // 추상 클래스를 상속받는 클래스는 추상 클래스에서 정의된 모든 추상 메소드와 프로퍼티를 구현해야 한다.

  method1(): void {
    console.log('메소드1이 구현되었습니다.')
  }

  private _property: string;

  constructor (_property: string) {
    super();
    this._property = _property;
  }

  get property(): string {
    return this._property;
  }
  
  set property(value: string) {
    this._property = value;
  }
}

let concrete: ConcreteClass = new ConcreteClass('123');
concrete.method1();
concrete.method2();
console.log(concrete.property);