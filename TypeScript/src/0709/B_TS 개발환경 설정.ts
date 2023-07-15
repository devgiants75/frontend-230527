// TS 개발환경 설정

//! 1. 노드.js 설치하기
// 타입스크립트를 컴파일하기 위해 먼저 Node.js를 설치해야 합니다. Node.js 공식 웹사이트에서 LTS(Long Term Support) 버전을 설치해주세요.
// - LTS(Long Term Support) 버전 설치 권장

// Node.js 설치 확인 명령어
// cmd(터미널 / 명령 프롬프트)창에서
//? node -v

// Mac OS
// Command + space: Spotlight 검색 창에서
// Terminal 입력 후 
//? node -v

// 최신 버전 18.16.1

//! 2. NPM (Node Package Manager)
// Node.js의 기본 패키지 관리 도구
// Node.js설치 시 NP 자동 설치

// NPM 설치 확인 명령어
//? npm -v

// 최신 버전 9.8.0
// 최신 버전이 다른 경우
// npm install -g npm@9.8.0

// 환경 변수 설정

// 재부팅 
// windows: ctrl + shift + esc ( 프로세스, vsc 작업 끝내기 )
// macOs: command option esc ( vsc 강제종료 )

//! NPM의 기본 명령어
// npm init : 새로운 Node.js 프로젝트를 시작하고, 기본값으로 package.json파일을 생성(-y 옵션을 추가하면 질문 없이 기본값으로 package.json파일을 생성)

// npm install : package.json 파일에 명시된 모든 의존성을 설치
// npm uninstall : 패키지 제거

//! 타입스크립트 설치

//? npm install -g typescript
// -g : 패키지를 글로벌로 설치하라는 의미

// typescript 설치 확인 명령어
//? tsc -v

// 5.1.6

//! tsc 
// 타입스크립트 컴파일러(TSC: TypeScript Compiler)
// 타입스크립트 파일의 확장명 .ts -> .js로 변환하는 도구

//! tsc 컴파일 과정
//? tsc 파일이름.ts

//! 프로젝트 디렉토리 생성 후 package.json 파일 생성
//? npm init -y

//! tsconfig.json 파일 생성
//? npx tsc --init

//? npm install --save-dev typescript ts-node @types/node

