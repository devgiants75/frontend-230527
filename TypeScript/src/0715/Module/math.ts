// 모듈
// : 여러 코드의 모음(그 모음이 하나의 독립적인 범위를 가짐)

// 모듈을 생성: export(해당 파일이 다른 파일에서 가져올 수 있는 모듈임을 나타냄.)

export function add(x: number, y: number):number {
  return x + y;
}

export function subtract(x: number, y: number):number {
  return x - y;
}

console.log(add(5,3));
console.log(subtract(5,3));

// 기본 내보내기
// : Default Export
// : 모듈(파일)당 하나의 export default를 가질 수 있다.
// : {} 없이 import할 수 있다.

