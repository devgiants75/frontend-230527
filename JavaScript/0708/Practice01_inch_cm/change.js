// 여러 단위 변환 프로그램

// 웹 페이지에 select태그와 input태그를 사용하여 사용자로부터
// 값을 받고, 이를 특정한 상수(option의 value값)와 곱한 후, 
// 결과를 span태그에 표시

// document.addEventListener('DOMContentLoaded', () => {...})

// const select, input, span : 태그의 요소를 저장

// calculate 함수생성: 현재값과 특정상수를 곱한 결과를 계산
// 이를 소수점 둘째자리까지 반올림하여 span태그의 텍스트로 설정
// toFixed()

// select태그에 change이벤트리스너 추가
// select요소의 선택옵션이 변경될 때 마다 실행,
// 선택 옵션의 값을 상수에 설정, calcultate 함수를 호출

// input 태그에 'keyup' 이벤트 리스너를 추가
// 사용자가 키를 눌렀다 놓을 때마다 이벤트가 발생하며, 입력된 값을 현재값에 설정하고 calculate 함수를 호출