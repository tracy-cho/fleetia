# Fleetia

Fleetia는 이전 개인 홈페이지를 베이스로 테스트 하고싶은 기술이 있으면 편하게 올려서 테스트 해 보는 용도로 만든 프로젝트입니다. 
여러 패키지와 라이브러리를 통합 관리하며, React, TypeScript, Vite, Storybook 등을 활용합니다.


## 프로젝트 구조

```
fleetia/
├── packages/
│   ├── web/      # 메인 웹 애플리케이션 (React + Vite)
│   ├── ui/       # UI 컴포넌트 라이브러리 (Storybook)
│   ├── shared/   # 여러 패키지에서 공통으로 사용하는 모듈
│   └── api/      # API 관련 패키지
└── libs/
    └── utils/    # 범용 유틸리티 함수 라이브러리
```

## 주요 패키지

- **@fleetia/web**  
  React 기반의 메인 웹 애플리케이션입니다. 개인 홈페이지 웹사이트입니다.

- **@fleetia/ui**  
  재사용 가능한 UI 컴포넌트 모음입니다. Storybook으로 문서화 및 테스트가 가능합니다.

- **@fleetia/shared**  
  여러 패키지에서 공통으로 사용하는 타입, 유틸, 상수 등을 관리합니다.

- **@fleetia/utils**  
  범용적으로 사용할 수 있는 유틸리티 함수들을 제공합니다.

## 개발 및 실행

1. **의존성 설치**
   ```bash
   yarn install
   ```

2. **웹앱 개발 서버 실행**
   ```bash
   cd packages/web
   yarn dev
   ```

3. **UI 컴포넌트 문서(Storybook) 실행**
   ```bash
   cd packages/ui
   yarn start
   ```

4. **전체 빌드**
   ```bash
   yarn build
   ```

## 스크립트

- `yarn build`   : 전체 패키지 빌드
- `yarn lint`    : 전체 패키지 린트 검사
- `yarn format`  : 전체 패키지 코드 포맷팅
- `yarn test`    : 전체 패키지 테스트

## 기술 스택

- **Monorepo**: Yarn Workspaces
- **Frontend**: React, TypeScript, Vite
- **UI**: Storybook, SCSS
- **Lint/Format**: ESLint, Prettier
- **Test**: Vitest, Testing Library
