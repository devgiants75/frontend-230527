// 드롭다운 목록: select 태그로 구현

// 드롭다운 목록을 선택했을 때(값이 변경되었을 때) 
// 어떤 것을 선택했는지 출력하는 예제

//? 한 가지 메뉴를 선택
// document.addEventListener('DOMContentLoaded', () => {
//   const select = document.querySelector('select')
//   const p = document.querySelector('p')

//   select.addEventListener('change', (event) => {
//     const options = event.currentTarget.options
//     const index = event.currentTarget.options.selectedIndex

//     p.textContent = `선택: ${options[index].textContent}`
//     // 선택한 option태그를 추출
//   })
// })

//? 어러 개의 메뉴를 선택
// 이벤트 클릭 시 ctrl 또는 shift를 누르고 클릭

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select')
  const p = document.querySelector('p')

  select.addEventListener('change', (event) => {
    const options = event.currentTarget.options
    const list = []
    // option 속성에는 forEach()메소드를 사용할 수 없다.
    for(const option of options) {
      if(option.selected) { // selected 속성을 확인
        list.push(option.textContent)
      } 
    }

    p.textContent = `선택: ${list.join(',')}`
    // 선택한 option태그를 추출
  })
})