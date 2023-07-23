//! 인스턴스 정의
// : 클래스의 구조를 가지는 실제 객체를 의미
// 클래스 - 객체를 만드는 템플릿
// 인스턴스 - 위의 클래스 템플릿을 바탕으로 실제 메모리에 할당된 객체

//! 인스턴스 생성
// : new 키워드를 사용해 생성
// : new 키워드 다음에 클래스 이름과 괄호를 적고, 필요한 경우 생성자에 인수를 전달

class Employee {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  description(): void {
    console.log(`${this.name}의 직원 번호는 ${this.id}입니다.`);
  }
}

// Employee 클래스의 인스턴스인 employee1을 생성
let employee1: Employee = new Employee("Seung Ah", 1); // 인스턴스 생성
employee1.description();

// 클래스를 정의할 때, 이름은 같지만 의미는 다른 두 식별자가 동시에 생성!

// const a: A = new A();
// 타입 Employee: Employee 클래스 인스턴스의 타입 (const a: A)
// 함수 Employee: new 키워드와 함께 호출되는 클래스 A의 생성자 (new A())

//!  인스턴스의 특징

//? 1. 독립성
// : 각 인스턴스는 서로 독립적!
// : 한 인스턴스의 상태가 변경되더라도 다른 인스턴스에는 영향을 주지 X

let employee2: Employee = new Employee("Jun Gook", 2);
employee2.description();

employee2.id = 5; // employee2의 상태를 변경
employee1.description();
employee2.description();

//? 2. 상속
// 클래스 간의 상속은 extends 키워드를 통해 이루어짐.
class Manager extends Employee {
  department: string;

  constructor(name: string, id: number, department: string) {
    super(name, id);
    this.department = department;
  }

  showDepartment() {
    console.log(this.department);
  }
}

let manager1: Manager = new Manager("Do Kyoung", 2, "HR");
manager1.showDepartment(); // HR
manager1.description(); // Do Kyoung의 직원 번호는 2입니다.

//! 클래스와 인스턴스의 차이

//? 클래스
// 클래스는 객체를 생성하기 위한 템플릿 또는 설계도
// 객체가 가져야 할 상태와 행동을 정의
// 상태는 멤버 변수(또는 필드)로, 행동은 메서드로 표현

//? 인스턴스
// 클래스를 바탕으로 실제 메모리에 생성된 객체를 의미
// 클래스는 설계도에 불과하므로, 실제 작업을 수행하려면 이 설계도를 바탕으로 실제 객체를 생성해야 한다.
// 이 때 생성된 객체가 인스턴스

//? 공통 특성 VS 개별 상태
// 클래스: 객체가 공통으로 가지는 특성을 정의
// 인스턴스: 각각의 객체가 개별적으로 가지는 상태를 저장

//? 메모리 사용
// 클래스: 메모리 사용X
// 인스턴스: 실제 메모리를 사용