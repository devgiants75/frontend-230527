// 이벤트 발생 객체

// document.addEventListener('DOMContentLoaded', () => {
//   const textarea = document.querySelector('textarea')
//   const h1 = document.querySelector('h1')

//   textarea.addEventListener('keyup', (event) => {
//     const length = textarea.value.length
//     h1.textContent = `글자 수 : ${length}`
//   })
// })

// 이벤트 리스너 내부에서 변수에 접근할 수 없는 겨우
// 아래 코드는 작동하지 X

// const listener = (event) => {
//   const length = textarea.value.length
//   h1.textContent = `글자 수 : ${length}`
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const textarea = document.querySelector('textarea')
//     const h1 = document.querySelector('h1')
  
//     textarea.addEventListener('keyup', listener)
// })

// 이벤트를 발생시킨 객체(현재 코드에서는 textarea)에 접근할 수 있는 방법

//? event.currentTarget 속성
// 해당 속성의 경우 화살표 함수와 function 키워드 함수에 모두 사용 가능

//? this 키워드
// function 키워드 함수 사용 시에만 사용 가능
// 화살표 함수 사용 X

let h1; // h1을 전역 변수로 변경

const listener = (event) => {
  const length = event.currentTarget.value.length
  // 현재 블록에서는 textarea 변수를 사용할 수 없다.
  h1.textContent = `글자 수 : ${length}`
}

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea')
    h1 = document.querySelector('h1')
  
    textarea.addEventListener('keyup', listener)
})