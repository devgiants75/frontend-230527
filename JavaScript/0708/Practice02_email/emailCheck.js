// 웹페이지에서 입력된 값이 이메일 형식인지 확인하는 JS코드

// 1. 페이지가 로드되면(DOMContentLoaded 이벤트 발생 시), 이 코드가 작동

document.addEventListener('DOMContentLoaded', () => {
  // input, p태그의 요소를 가지고 온다.
  const input = document.querySelector('input')
  const p = document.querySelector('p')

  // 정규 표현식
  // isEmail함수는 인자로 받은 문자열이 이메일 형식인지 확인
  const isEmail = (value) => {
    // 골뱅이를 가지고 있고 && 골뱅이 뒤에 점이 있다면
    // 이메일인지 검사하는 함수
    return (value.indexOf('@') > 1)
      && (value.split('@')[1].indexOf('.') > 1)
  }

  // input태그를 사용하는 입력 양식의 경우
  // 값이 변경될 때 change이벤트를 주로 사용
  input.addEventListener('change', (event) => {
    const value = event.currentTarget.value
    if (isEmail(value)) {
      p.style.color = 'green'
      p.textContent = `이메일 형식입니다: ${value}`
    } else {
      p.style.color = 'red'
      p.textContent = `이메일 형식이 아닙니다: ${value}`
    }
  })
})

// 글자 입력 양식의 keyup 이벤트
// input 태그에 글자 입력 양식의 keyup이벤트리스너 추가

// isEmail(value)이 true: `이메일 형식입니다. ${value}` 색상은 green
// isEmail(value)이 false: `이메일 형식이 아닙니다. ${value}`  색상은 red


