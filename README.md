<h1 align="center">
   원티드 프리온보딩 사전과제 - Todo App 만들기
</h1>
<h3 align="center">원티드 프리온보딩 프론트엔드 1월 챌린지 CRUD w React-Query</h3>

<p align="center">
  <img src="https://img.shields.io/badge/React-^18.2.0-61DAFB?style=flat&logo=React&logoColor=white"/> 
  <img src="https://img.shields.io/badge/typescript-^4.9.5-3178c6?style=flat&logo=typescript& logoColor=white"/>
  <img src="https://img.shields.io/badge/Javscript-F7DF1E?style=flat&logo=Javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/Recoil-5a5a5a?style=flat&logo=Recoil&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactQuery-ff4154?style=flat&logo=ReactQuery&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=TailwindCSS&logoColor=white"/>
</p>

---

# 👋 프로젝트 소개

사전과제로 주어진 Todo App 만들기 입니다.<br>
강의 2주차 부터 진행하였으며, 강의를 듣고 배운내용과 다른 참가자의 피드백들을 참고하며 진행한 프로젝트입니다.

# 📚 프로젝트 사전과제 진행 가이드 및 요구사항

### [사전과제내용](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 과제 참고 사항

1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.

2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)

3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.

# 🔐 Auth 페이지 ( 로그인 및 회원가입 )

<video src="https://user-images.githubusercontent.com/66175249/217008043-ed759575-fc8d-4193-a2e9-b5a406ccdd93.mp4"></video>

- 회원가입과 로그인폼은 react-hook-from을 사용하여 구현했습니다.
- 이메일형식이 맞는지, 비밀번호는 6 ~ 18자가 맞는지 유효성 검사를 진했하였고, 이미 존재하는 회원일경우, 등록되지 않은 계정으로 로그인을 시도 하는경우등 상황에 따라 서버에서 응답으로 돌려주는 error 내용을 toast로 띄어주어 사용자에게 알릴 수 있도록 구현했습니다.

# 📃 Todo 페이지 ( Todo CRUD)

<video src="https://user-images.githubusercontent.com/66175249/217010541-b118f6ef-da51-41f4-8ee1-f211e5cbe33c.mp4"></video>

- Todo의 내용이 빈 내용일 경우 작성할 수 없으며, 사용자게에 입력을 요하도록 toast로 알림을 띄어주었습니다.
- todo의 특성상 내용이 길 확률이 비교적 적지만, 내용이 긴 경우, 모바일과 같은 디바이스로 이용시 작은 화면에서 볼 경우를 대비하여 텍스트를 한줄처리 및 말줄임표처리 했습니다.
- todo 업데이트의 경우 React-query의 낙관적 업데이트를 적용하여 UI에 빠른 피드백을 주었습니다
- todo의 삭제나 업데이트등 파괴적 버튼을 동작할때는 사용자에게 확인을 받도록 구현하였습니다.
<!--  페이지를 이탈하는 액션을 취할경우에도 사용자에게 확인을 받도록 추가 구현 예정입니다. -->
- Todo의 생성,조회,수정,삭제 등의 이벤트가 있을때마다 적합한 내용의 toast 출력으로 사용자에게 알릴 수 있도록 구현했습니다.

<!-- # 🧐 고민한 부분

1. ??? -->

# ⚒️ 개선할 내용

- 파일구조 한 번 더 생각하고 정리해보기
- 코드 리팩토링 (컴포넌트 세부화, 반복적인 코드 제거, tailwind config를 활용하기 등)
- ~~react-query의 error 전역처리 오류 수정하기~~ ⚒️
- jest로 테스트 코드 작성해보기
- ~~chakra UI의 toast -> react-toastify로 변경 또는 직접 만들어보기~~ ⚒️
- ~~React-query의 낙관적 업데이트 실패시 오류 수정하기. (실패했을때 기존 내용이 사라지는 현상)~~ ⚒️
- todo를 작성중이거나 수정중일때 페이지를 이탈하려는 액션을 취할경우 사용자에게 확인 받도록 수정

# 😋 프로젝트 진행 후기

React-query를 사용해보니 전역상태관리 라이브러리를 쓰는 듯한 느낌이 들었습니다. querykey를 이용하여 데이터를 컨트롤 할 수 있기때문에 이런 느낌이 들었던것 같습니다. 하지만 계속 진행해 보니 확실히 전역 상태관리 라이브러리와는 차이점이 분명 있었다고 느꼈다. 작은 규모의 프로젝트이기에 리코일을 적극적으로 많이 활용하지 못해 아쉬움이 남아 새로운 기능들을 추가하며 Recoil을 사용할 수 있도록 바꿔볼 생각입니다. 항상 폴더구조와 파일명, 변수명 등을 작명할때 어려움을 느꼈지만 이번 프리온보딩을 통해 어떻게 개선해야할지 방향을 잡게되었고, 우리가 흔히 사용하는 코드들의 내부구조를 파악해보면서 어떠한 원리로 코드가 실행되는지 등을 알아보는 습관을 가지도록 노력하고 라이브러리를 직접 구현해보며 공부하는 방법 등 앞으로의 공부방법도 얻어가는것 같아 좋았습니다.

# 실행방법

### 프론트

```
npm install
npm start // localhost:3000
```

### 백엔드

아래 깃허브로 이동하여 클론 후 코드 실행<br>
[백엔드 Github](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

```
yarn
yarn start  // localhost:8080
```

# 기술스택 & 라이브러리

<p>
<img src="https://img.shields.io/badge/React-^18.2.0-61DAFB?style=flat&logo=React&logoColor=white"/> 
<img src="https://img.shields.io/badge/typescript-^4.9.5-3178c6?style=flat&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Javscript-F7DF1E?style=flat&logo=Javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-5a5a5a?style=flat&logo=Recoil&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactQuery-ff4154?style=flat&logo=ReactQuery&logoColor=white"/>
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=TailwindCSS&logoColor=white"/>
<br>
<br>
<img src="https://user-images.githubusercontent.com/66175249/216847693-1784fe35-2c98-486e-a55b-ad35ff0c4cb1.png"/>
</p>

# 파일구조

```
📦src
 ┣ 📂api  // server와 통신하는 api를 관리하는 폴더입니다.
 ┃ ┣ 📜api.ts  // Axios instance 설정 파일
 ┃ ┣ 📜auth.ts  // 회원과 관련된 api파일
 ┃ ┗ 📜todo.ts  // Todo와 관련된 api 파일
 ┣ 📂atom
 ┃ ┗ 📜atom.tsx  // recoil을 사용하는 파일입니다.
 ┣ 📂common // 전역으로 사용 되는 공용폴더입니다.
 ┃ ┣ 📂hooks  // 전역에서 사용되는 커스텀 훅을 모아둔 폴더입니다.
 ┃ ┃ ┗ 📜useCustomToast.ts
 ┃ ┗ 📂user
 ┃ ┃ ┗ 📜userStorage.ts  //  회원 토근을 관리하기위한 파일입니다.
 ┣ 📂components // 페이지 별로 나눈 컴포넌트를 담은 폴더입니다.
 ┃ ┣ 📂auth  // 회원과 관련된 페이지 및 커스텀훅을 관리하는 폴더입니다.
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useAuth.jsx
 ┃ ┃ ┣ 📜AuthForm.tsx
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┗ 📜Register.tsx
 ┃ ┣ 📂page
 ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┣ 📂todos  // Todo와 관련된 페이지 및 커스텀훅을 관리하는 폴더입니다.
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📜useDeleteTodo.ts
 ┃ ┃ ┃ ┣ 📜useGetTodo.ts
 ┃ ┃ ┃ ┣ 📜usePostTodo.ts
 ┃ ┃ ┃ ┗ 📜useUpdateTodo.ts
 ┃ ┃ ┣ 📜TodoDetail.tsx
 ┃ ┃ ┣ 📜TodoForm.tsx
 ┃ ┃ ┣ 📜TodoItem.tsx
 ┃ ┃ ┗ 📜TodoList.tsx
 ┃ ┗ 📂UI // 전역에서 사용하는 컴포넌트입니다.
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜Layout.tsx
 ┃ ┃ ┣ 📜Section.tsx  // Route 파일입니다.
 ┃ ┃ ┗ 📜SectionTitleArea.tsx
 ┣ 📂react-query  // React-query를 관리하는 폴더입니다.
 ┃ ┣ 📜constants.ts
 ┃ ┗ 📜queryClient.ts  //React-query를 전역에서 사용하기위해 디폴트값을 설정하는 파일입니다.
 ┗ 📂types  // 타입 선언 폴더입니다.
   ┣ 📜AuthType.ts
   ┣ 📜ComponentsType.ts
   ┗ 📜TodoType.ts
```
