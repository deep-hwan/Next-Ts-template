# <div align="center">

<h1 align="center">Next.js + Typescript Template</h1>Library

<p align="center">
개발하기 편하도록 미리 셋팅된 Next.js + Typescript 개발 템플릿입니다.
</p>
</div>

## Install

(선택) typescript 및 emotion 적용 문제 시 아래를 설치하세요

    npm install typescript @types/react @types/react-dom @emotion/styled @emotion/react
    npm install --save-dev eslint-plugin-emotion @emotion/eslint-plugin
    npm update react react-dom @types/react

---

## SITE URL (사이트 데모)

해당 링크에 접속하여 오직 **Next-Ts-Template**에서만 제공하는 다양한 위젯들을 경험할 수 있습니다.

    https://next-typescript-tamplate.vercel.app/

---

## Setting Library

현재 패키지에 설치 및 적용된 **NPM 패키지 라이브러리 / 버전 정보** 입니다.

- Next : 14.0.1
- TypeScript : 5.2.2
- Next-PWA : 6.1.0
- Next-Seo : 6.1.0
- Next-sitemap: 4.1.8
- Next-Auth : 4.22.1
- Axios : 1.4.0
- React-query : 3.39.3
- Recoil: 0.7.7
- Emotion : 11.11.2
- React-cookie : 4.1.1
- React-raise-editor: 0.1.4
- React-datepicker: 4.16.0
- React-Calender : 4.16.0

---

## Design Systems

### UI_Weidgets (위젯)

##### 파일경로 : src > \_ui_libs

즉시 사용할 수 있는 디자인 UI 위젯입니다.

디자인 위젯은 앞으로 계속해서 추가 및 업데이트 될 예정입니다.

**모든 위젯의 스타일은 공통적인 \_theme**을 통해 관리하고 있습니다.

( 경로 : src > \_ui_libs > \_theme.tsx )

**Layout Widgets**

- Appbar : 헤더의 앱바
- AppDrawer : 메뉴 드로어
- BottomNavigationBar : 바텀네비게이션 바
- NavigationTab : 바텀네비게이션 바 > 메뉴 탭
- Section : 섹션 레이아웃
- Container / Wrap : 레이아웃 위젯
- Row / Column : 가로 및 세로 정렬 레이아웃 위젯
- Padding : 패딩 사이즈 레이아웃 위젯
- BoxShadow : 그림자 형태의 박스 레이아웃 위젯
- DragScrollContainer : 가로 터치 스크롤이 가능한 레이아웃 위젯
- Form : form 위젯
- Items, Item : ul / li 레이아웃
- Spacing : 공간 및 여백을 설정하는 박스 레이아웃
- Layout : 팝업 및 모달 시 노출되는 백그라운드 레이아웃
- Accordion / AccordionPanel : 아코디언 드롭다운의 타이틀 및 아코디언 패널

**Image Widgets**

- ProfileImage : 프로필 이미지 위젯
- Img : 최적화 이미지 위젯

**Input Widgets**

- Input : input(label) + input(field) 종류 [박스 타입 / 바 타입]

  - TextField(텍스트 필드)
  - SearchField(검색 필드)
  - PhoneNumberField(연락처 필드 ex_010-1234-5678)
  - NumbericField(단위 필드 ex_10,000)
  - DateField(캘린더 선택 필드)
  - TextArea(에디터 필드)

- Select / Option : select / option 인풋 위젯 [박스 타입 / 바 타입] 지원
- CheckBox : 체크박스 인풋 위젯
- ProfileUploadBox : 프로필 이미지 업로드 박스

**Tab Widgets**

- Button : 타이틀 버튼 위젯
- Tab : 서브 타이틀 버튼 위젯
- IconTab : 아이콘 탭을 커스텀 버튼 위젯

**Typography Widgets**

- TxtTab : 텍스트 형식의 버튼 위젯
- ScrollTopTab : 스크롤 > 클리 시 화면 최상위로 이동하는 탭

**Loading Widgets**

- SkeletonUI : 로딩 스켈레톤 UI
- LoaddingSpinner : 로딩 스피너
- LoadingLayer : 로딩 중 레이어

**Modal Widgets**

- Dialog : Dialog 타입의 모달 팝업
- BottomSheet : BottomSheet 타입의 IOS 모달
- CalenderModal : 달력 사용 가능 형태의 모달 위젯

---

## Theme (테마)

#### 파일경로 : src > lib > theme

상황에 따른 컬러 및 사이즈, 미디어쿼리 등을 즉시 사용할 수 있는 테마입니다.

---

## Utils (유틸 기능)

#### 파일경로 src > lib > utils

프론트 개발에 도움이 되는 다양한 유틸 기능입니다.

- cookie : react-cookie의 set / get / remove를 즉시 사용가능합니다. ex\_ setCookie('TOKEN.ACCESS', access_token)

- enum : enum을 미리 셋팅 후 가져와 사용할 수 있습니다.

- moment : 2024.01.01 / 2024-01-01 / 1일 전 처럼 날짜를 직관적으로 처리할 수 있습니다. ex_moment(new Date())

- regEx : 이메일 및 비밀번호 정규식을 즉시 사용할 수 있습니다. ex\_ regEx.email.text(email)

---

## Hooks (커스텀 훅)

#### 파일경로 src > lib > hooks

프론트 개발에 도움이 되는 커스텀 훅 입니다.

- useClickOutSide : DOM 외부 요소를 클릭 시 처리되는 훅입니다\_ 모달 닫기 기능에 추천합니다.

- useRouteOnload: 해당 페이지에서 나갈 때 저장된 recoil 상태를 초기화 할때 사용하는 훅입니다.

- useIntersectionObserver : 무한 스크롤 기능을 사용할 때 사용되는 옵저버 훅입니다.

---

## Site-map

1. public > seo.config.tsx : 검색엔진에 사이트 키워드를 작성 (권장 / 필수)

2. src > pages > api > sitemap.ts 에서 staticPages 라우트 추가 / dynamicRoutes 동적 라우트의 서버 api URL 추가

3. next.config.js 에서 siteUrl > 도메인 주소로 변경

4. next-sitemap.config.js에서 siteUrl : 도메인 주소로 변경 / additionalSitemaps : 도메인 주소/sitemap.xml로 변경

5. npm run build

---

## 배포 전 주의사항

배포 전 반드시 아래에 내용을 배포하는 서비스에 맞게 수정한 후 빌드하세요!

1. pages > api > sitemap.ts 에서 사이트 맵을 수정하세요.

2. public > manifest.json 에서 PWA (배포 서비스) 내용 수정

3. next.config.js 에서 siteUrl 수정

4. npm run build
