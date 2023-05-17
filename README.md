![header](https://capsule-render.vercel.app/api?type=Rounded&color=auto&height=150&section=header&text=wanted-pre-onboarding-frontend&fontSize=40)

## 과제 설명

```
원티드 프리온보딩 프론트엔드 인턴십 Week 4. 기업 과제
원티드 프리온보딩 프론트엔드 기업 과제를 각자 개발한 후 문제 해결이나 기술을 논의
이후 동료학습을 통해 Best Pratice을 만들어 제출.
```

## 배포

## 사용 기술

- Typescript
- Axios

## 파일 구조

```bash
src
 ┣ api
 ┃ ┣ index.ts
 ┃ ┣ suggest.ts
 ┃ ┗ todo.ts
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ Header.css
 ┃ ┃ ┗ Header.tsx
 ┃ ┣ suggest
 ┃ ┃ ┣ SuggestItem.css
 ┃ ┃ ┣ SuggestItem.tsx
 ┃ ┃ ┣ SuggestList.css
 ┃ ┃ ┗ SuggestList.tsx
 ┃ ┗ todo
 ┃ ┃ ┣ InputTodo
 ┃ ┃ ┃ ┣ InputTodo.container.tsx
 ┃ ┃ ┃ ┣ InputTodo.css
 ┃ ┃ ┃ ┗ InputTodo.presenter.tsx
 ┃ ┃ ┣ TodoItem.css
 ┃ ┃ ┣ TodoItem.tsx
 ┃ ┃ ┣ TodoList.css
 ┃ ┃ ┗ TodoList.tsx
 ┣ constants
 ┃ ┗ index.ts
 ┣ hooks
 ┃ ┣ useDebounce.test.ts
 ┃ ┣ useDebounce.ts
 ┃ ┣ useFocus.test.ts
 ┃ ┣ useFocus.ts
 ┃ ┣ usePost.test.ts
 ┃ ┣ usePost.ts
 ┃ ┣ useScroll.test.ts
 ┃ ┣ useScroll.ts
 ┃ ┣ useSearch.test.ts
 ┃ ┣ useSearch.ts
 ┃ ┣ useThrottle.test.ts
 ┃ ┗ useThrottle.ts
 ┣ pages
 ┃ ┣ Main.css
 ┃ ┗ Main.tsx
 ┣ types
 ┃ ┣ hook
 ┃ ┃ ┗ index.ts
 ┃ ┣ suggest
 ┃ ┃ ┗ index.ts
 ┃ ┗ todo
 ┃ ┃ ┗ index.ts
 ┣ utils
 ┃ ┗ index.ts
 ┣ App.css
 ┣ App.tsx
 ┗ index.tsx
```

## ⭐️ Best Practice 선정 과정

**💡 (구현)무한 스크롤**

- scroll event(feat. throttle)을 사용하는 방법과 Intersection Observer API를 사용하는 방법 논의
  - scroll event를 사용한 코드가 테스트를 위한 리팩토링에 유용할 것 같아 선정
- 단, 스크롤 시 요구사항 개수(10개)가 아닌 20개로 불러와지는 현상 발견
  - useSearch와 useScroll에서 둘 다 검색어 리스트를 갱신하는 문제
  - 호출중인지 관리하는 상태를 만들어 이전 호출이 완료되었을 경우만 호출할 수 있도록 수정

**💡 (리팩토링) Header css 분리**

- style 관련 코드는 같은 이름의 다른 파일로 분리.
  - 기존 코드인 Header.tsx에서 css 분리함.

**💡 (리팩토링) 스크롤바 css 적용**

- 제공받은 figma 파일과 동일한 디자인으로 적용하기 위해 스크롤바에도 커스텀 css를 적용.

**💡 (리팩토링)Controller&Presenter 분리**

- 70줄이 넘어가는 코드는 Controller단과 presentation단을 분리하여 가독성을 높이기로 결정.
  - 본 프로젝트에서는 InputTodo.tsx만 리팩토링 대상.

**💡 (테스트) Jest 사용**

- Jest를 사용해 분리한 hooks 파일들의 반환과 함수 실행 여부를 체크.

**💡 그 외 좋은 의견**

- DDD(Domain Driven Design) 패턴 적용
  - application, domain, infrastructure, ui로 추상화 및 관심사 분리
  - Best Practice로 선정된 코드에 패턴을 적용하여 리팩토링했지만 debounce hook 문제와 시간 관계상 Controller&Prensenter로 선정.
- 깃허브 액션으로 이슈&PR 자동화
  - 문서화를 위한 Create Issue Branch 도입으로 이슈&PR 자동화

## 협업 방식

### 소통 및 회의

- Slack
- Notion
- Google Meet

### 커밋 컨벤션

```
init : 초기화
feat : 새로운 기능 추가
update: 기능 수정
fix : 버그 수정
docs : 문서 수정
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
design: 레이아웃 수정, UX 또는 UI에 대한 커밋
refactor : 코드 리팩터링
test : 테스트 코드, 리팩터링 테스트 코드 추가
chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
```

### 역할 분담

모든 팀원이 전체 개발, 리팩토링에 참여했으며 다수의 전체 회의을 통해 Best Practice를 선정

- README: 황예진
- 배포: 이승재

## 실행 방법

```shell
git clone https://github.com/PreOnboarding-2/pre-onboarding-10th-4-2.git
cd pre-onboarding-10th-4-2
yarn install
npm start
```