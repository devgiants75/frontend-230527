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

//? 클래스 메소드
// : 클래스 자체에서 호출되는 메소드
// : static 키워드를 사용하여 정의
// : 특정 인스턴스에 접근 불가, 따라서 인스턴스의 상태를 변경할 수 X
// : 클래스 레벨의 데이터에 접근 OR 변경 가능

{
  class Car {
    // 스태틱 변수 선언
    public static numberOfCars: number = 0;
    public model: string;

    constructor(model: string) {
      Car.numberOfCars++;
      this.model = model;
    }

    // 클래스 메소드
    static howManyCars(): number {
      return Car.numberOfCars;
    }
  }

  let car1: Car = new Car("Hyundai Kona");
  let car2: Car = new Car("Tesla Model 3");
  console.log(Car.howManyCars());
  console.log(car1);
  console.log(car2);
}

//? static 주의사항
// : static 메소드 내에서는 this 키워드를 통해 인스턴스 멤버에 접근 불가
// : 특정한 인스턴스에 종속되지 않고 클래스 레벨에서 동작하기 때문