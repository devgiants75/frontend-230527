// 모듈 사용: import
import { add, subtract } from './math';
import { MathLib } from './mathName';

console.log(add(7,2));
console.log(subtract(7,2));

// 모듈 별칭
// import as: 코드 내에서 충돌을 방지 | 모듈이름이 긴 경우

import { add as a, subtract as s} from './math';

console.log(a(10,6));
console.log(s(10,6));

// 전체 모듈을 가져오기
// : 모듈의 모든 내용을 가져오는 방법 * 키워드를 사용

import * as math from './math';
console.log(math.add(3,1));
console.log(math.subtract(3,1));

import helloTs from './helloTs';
console.log(helloTs);

// 네임스페이스를 사용하는 app 모듈
console.log(MathLib.add(4,3));
console.log(MathLib.subtract(4,3));