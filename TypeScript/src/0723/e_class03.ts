//! 접근제한자
// : 클래스의 내부 데이터를 외부에서 직접 접근하는 것을 제한하여 데이터의 안정성을 보장하기 위한 키워드

// : public, private, protected

//? 1. public
// : 모든 멤버가 가지고 있는 접근 제한자, 어디서든지 접근 가능
// : 접근 제한이 전혀 존재하지 X, 프로그램의 어느 곳에서나 접근 가능
// : 접근 제한자가 명시되지 않은 멤버는 모두 암시적으로 public을 가짐.

{
  class Car {
    public model: string;

    constructor(model: string) {
      this.model = model;
    }
  }

  let car1: Car = new Car("BMW");
  console.log(car1.model);
}

//? 2. private
// : private으로 선언된 멤버는 오직 그 멤버를 선언한 클래스 내부에서만 접근 가능
// : 서브(자식) 클래스에서도 접근이 불가

{
  class Car {
    private model: string;

    constructor(model: string) {
      this.model = model;
    }
  }

  let car1: Car = new Car("BMW");
  // console.log(car1.model);
  // 'model' 속성은 private이며 'Car' 클래스 내에서만 액세스할 수 있습니다.
}

{
  class User {
    private password: string;

    constructor(password: string) {
      this.password = password;
    }
  }
  const seungah: User = new User('1234');
  // console.log(seungah.password);

  class CarOwner extends User {
    carId: string;

    constructor (password: string, carId: string) {
      super(password);
      this.carId = carId;
    }

    setPassword(newPassword: string) {
      // this.password = newPassword; 
      // private으로 선언된 멤버 변수는 무조건! 그 해당 변수가 선언된 클래스 내에서만 접근 가능!
    }
  }
}

//? 3. protected
// : protected로 지정된 멤버를 선언한 클래스와 그 클래스를 상속받은 자식 클래스 내부에서만 접근 가능

{
  class Vehicle {
    protected model: string;

    constructor(model: string){
      this.model = model;
    }
  }

  class Car extends Vehicle {
    getModel() {
      console.log(`${this.model}`); // protected로 선언된 멤버는 자식 클래스에서 접근 가능
    }
  }

  let car1: Car = new Car("Tesla");
  car1.getModel();
  // console.log(car1.model);
  // 'model' 속성은 private이며 'Car' 클래스 내에서만 액세스할 수 있습니다.
}

{
  class User {
    protected password: string;

    constructor(password: string) {
      this.password = password;
    }
  }
  const seungah: User = new User('1234');
  // console.log(seungah.password);

  class CarOwner extends User {
    carId: string;

    constructor (password: string, carId: string) {
      super(password);
      this.carId = carId;
    }

    setPassword(newPassword: string) {
      this.password = newPassword; 
      // protected로 선언된 멤버 변수 상속받은 하위클래스에서 접근 가능!
    }
  }
}

//! 생성자에서의 접근제한자
// : 접근 제한자가 붙은 생성자 매개변수는 
// : 같은 이름의 속성으로 선언, 해당 매개변수의 인자는 암묵적으로 인스턴스에 할당
{
  class User {
    constructor(public id: string, private password: string) {}
  }
}

// 위의 코드와 동일하게 동작
{
  class User {
    // 같은 이름의 속성(멤버 변수)으로 선언
    public id: string;
    private password: string;

    constructor(id: string, password: string) {
      // 해당 매개변수의 인자는 암묵적으로 인스턴스에 할당
      this.id = id;
      this.password = password;
    }
  }

  const user1: User = new User('Seung Ah', '1234');
  console.log(user1);
}