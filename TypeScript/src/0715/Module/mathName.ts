// 네임스페이스: 내부 모듈
// 모듈과의 차이점
// : module은 각각의 영역을 다 import해야 함, 네임스페이스는 보통 여러 파일에 걸쳐 하나의 이름 공간을 공유

export namespace MathLib {
  export function add(x: number, y: number):number {
    return x + y;
  }
  
  export function subtract(x: number, y: number):number {
    return x - y;
  }
}

console.log(MathLib.add(4,3));
console.log(MathLib.subtract(4,3));