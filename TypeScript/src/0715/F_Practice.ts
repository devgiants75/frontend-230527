// APIResponseState타입 별칭을 사용해 loading, success, error의 타입을 지정

// handleResponse 함수를 생성하여 매개변수로 APIResponseState타입을 가지는 state를 받아옴
// switch-case 구문을 사용해 타입 각각의 case에 해당 케이스 이름 만을 출력

type APIResponseState = 'loading' | 'success' | 'error';

function handleResponse(state: APIResponseState) {
  switch(state) {
    case 'loading':
      console.log('loading');
      break;
    case 'success':
      console.log('success');
      break;
    case 'error':
      console.log('error');
      break;
  }
}

handleResponse('loading');
handleResponse('success');
handleResponse('error');