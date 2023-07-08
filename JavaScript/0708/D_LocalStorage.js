// API: 웹 브라우저가 제공해주는 기능
// 웹캠 활용, 사용자에게 알림을 제공, 사용자의 위치를 추적 등

// localStorage: 웹 브라우저에 데이터를 저장하는 기능

//? 로컬 스토리지의 특징
// 서버로 전송되지 않는다.
// 오래된 브라우저에서는 작동하지 않는다.

//? 로컬 스토리지 메소드

// localStorage.setItem('key', 'value')
// : key와 value를 로컬 스토리지에 저장.

// localStorage.getItem('key')
// : key값에 해당하는 값을 로컬 스토리지에서 가져옴.

// localStorage.removeItem('key')
// : 해당 key값에 해당하는 항목을 로컬 스토리지에서 제거

// localStorage.cler()
// : 로컬 스토리지의 모든 데이터를 제거

document.addEventListener('DOMContentLoaded', () => {
  const p = document.querySelector('p')
  const input = document.querySelector('input')
  const button = document.querySelector('button')

  const savedValue = localStorage.getItem('input')
  // 값을 읽을 때는 getItem()메소드를 사용
  // localStorage.input도 가능
  if(savedValue) {
    input.value = savedValue
    p.textContent = `이전 실행의 마지막 값: ${savedValue}`
  }

  input.addEventListener('keyup', (event) => {
    const value = event.currentTarget.value
    localStorage.setItem('input', value)
    // 값을 저장할 때는 setItem()메소드를 사용
    // localStorage.input = value도 가능
  })

  button.addEventListener('click', (event) => {
    localStorage.clear()
    // 값을 모두 제거할 때는 clear()메소드를 사용
    input.value = ''
  })
})

// LocalStorage 사용
// 문자열만 저장 가능
// 객체나 배열을 저장하려면 JSON.stringify()를 사용해 문자열로 변환한 후 저장
// 객체나 배열을 불러올 땐 JSON.parse()를 사용해 원래 형태로 복원