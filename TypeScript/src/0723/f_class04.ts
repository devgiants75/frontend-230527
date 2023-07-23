//! 인스턴스 메소드 & 클래스 메소드(정적 메소드) 

//? 인스턴스 메소드
// : 클래스의 인스턴스에서 호출되는 메소드
// : this 키워드를 통해 인스턴스에 접근 가능
// : 인스턴스의 상태를 읽거나, 변경하는 데 사용

{
  class Car {
    public model: string;

    constructor(model: string) {
      this.model = model;
    }

    // 인스턴스 메소드
    describe(): string {
      return `This car is a ${this.model}.`;
    }
  }

  let car1: Car = new Car('Porsche');
  console.log(car1.describe());
}