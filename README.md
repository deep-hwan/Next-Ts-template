# <div align="center">

<h1 align="center">Next.js + Typescript Template</h1>

<p align="center">
개발하기 편하도록 미리 셋팅된 Next.js + Typescript 개발 템플릿입니다

V2 버전으로 업데이트 되었으며, 모든 위젯이 업데이트 및 최적화 되었습니다

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

-   next : 14.1.0
-   typeScript : 5.3.3
-   next-pwa : 5.6.9
-   next-seo : 6.4.0
-   next-sitemap: 4.2.3
-   next-auth : 4.24.5
-   axios : 1.6.7
-   tanstack/react-query : 5.20.1
-   recoil: 0.7.7
-   emotion : 11.11.2
-   sharp: 0.33.2
-   plaiceholder: 3.0.0
-   react-cookie : 7.0.2
-   react-image-cached-resizer : 1.3.6 (자체 배포/개발 패키지)
-   react-flatlist-ui : 1.4.1 (자체 배포/개발 패키지)

---

## Design Systems

### UI_Weidgets (위젯)

##### 파일경로 : src > \_ui

즉시 사용할 수 있는 디자인 UI 위젯입니다.
디자인 위젯은 앞으로 계속해서 추가 및 업데이트 될 예정입니다.

**모든 위젯의 스타일은 src > \_ui > \_themes**경로를 통해 관리하고 있습니다.

**navigation**

-   Appbar : 헤더의 앱바
-   Drawer : 메뉴 드로어
-   DrawerAccordion : 아코디언 메뉴 드로어
-   BottomNavigator : 바텀네비게이션 바/버튼 기능

**display**

-   BlurLayer : 배경 블러 레이어 (팝업 시 사용)
-   Divider : 경계 선을 처리해야할 때 사용합니다
-   Spacing : 여백을 설정할 수 있습니다

**feedback**

-   ToastSnackBar : JengaProvider를 통해 addToast를 사용할 수 있습니다

**flex > view**

-   V : flex 기반의 view 위젯 컴포넌트

    -   Section : 섹션 레이아웃
    -   Container : 상위 레이아웃
    -   Row : 가로 정렬 레이아웃 위젯
    -   Column : 세로 정렬 레이아웃 위젯
    -   Form : form 위젯
    -   ScrollDragHorizontal : 가로 터치 스크롤을 통해 영역 외의 레이아웃을 처리할 수 있습니다
    -   Itmes : ul/ol 레이아웃
    -   Item : li 레이아웃

**flex > position**

-   P : flex 기반의 position 위젯 컴포넌트

    -   Absolute
    -   Fixed
    -   Sticky
    -   BottomFixed : 바텀 아래 고정 영역의 Fixed 레이아웃
    -   BottomFixedAnimate : 바텀 애니메이션 Fixed 레이아웃

**image**

-   Image : 서버사이드렌더링(ssr) 이미지 기능

**input**

-   Input : input(label) + input(field) 각 기능

    -   TextField(텍스트 필드)
    -   PhoneNumberField(연락처 필드 ex_010-1234-5678)
    -   NumbericField(통화화폐 단위 필드 ex_10,000)
    -   TextArea(에디터 필드)
    -   SearchField(검색 필드)

-   Select : select(label) 기능

    -   Option : 옵션 기능

**switch**

-   Checkbox : 체크박스
    Switch : 스위치

**reader**

-   AvatarUploader : 아바타 이미지 업로더 기능
-   ImageUploader : 이미지 업로더 기능

**loading**

-   LoaddingSpinner : 로딩스피너
-   LoadingLayer : 로딩 레이어
-   Skeleton : 스켈레톤 로딩

**tab**

-   Button : 타이틀 버튼 위젯
-   TxtTab : 텍스트 버튼 위젯
-   IconTab : 아이콘 탭을 커스텀 버튼 위젯
-   TouchableOpacity : react-native 에서 제공되는 prassable 기능의 탭

**typography**

-   Txt : h1/h2/h3/h4/h5/h6/b/strong/p 텍스트
-   TxtTab : span 텍스트

**Modal**

-   Modal : 기본 모달 팝업
-   Dialog : Dialog 타입의 모달 팝업
-   BottomSheet : BottomSheet 타입의 IOS 모달
-   CalenderModal : 달력 사용 가능 형태의 모달 위젯

**Calender**

-   Calender : yyyy / yyyy-mm / yyyy-mm-dd 포맷을 제공하는 달력 UI 위젯

---

## Themes (테마)

#### 파일경로 : src > lib > themes

상황에 따른 컬러 및 사이즈, 미디어쿼리 등을 즉시 사용할 수 있는 테마입니다.

---

## Utils (유틸 기능)

#### 파일경로 src > lib > utils

프론트 개발에 도움이 되는 다양한 유틸 기능입니다.

-   enum : enum을 미리 셋팅 후 가져와 사용할 수 있습니다.

-   regEx : 이메일 및 비밀번호 정규식을 즉시 사용할 수 있습니다. ex\_ regEx.email.text(email)

---

## Hooks (커스텀 훅)

#### 파일경로 src > lib > hooks

프론트 개발에 도움이 되는 커스텀 훅 입니다.

-   useCookie : set, get, remove를 사용하여 쿠키를 설정 및 읽을 수 있습니다.

-   useMoment : 날짜를 시각적으로 처리하는 훅입니다. (예\_ yyyy-mm-dd , yyyy.mm.dd, y전, 방금전 ...)

-   useClickOutSide : DOM 외부 요소를 클릭 시 처리되는 훅입니다\_ 모달 닫기 기능에 추천합니다.

-   useRouteOnload: 해당 페이지에서 나갈 때 저장된 recoil 상태를 초기화 할때 사용하는 훅입니다.

-   useIntersectionObserver : 무한 스크롤 기능을 사용할 때 사용되는 옵저버 훅입니다.

-   useUid : 특정 자릿 수의 고유 id 값을 string 타입으로 생성할 수 있습니다.

-   useStopSwipe : 웹뷰 및 PWA 터치 스와이프 뒤로가기 무효화 훅입니다

-   useTanstackQuery : Tanstack-Query 라이브러리 hook을 관리합니다.

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

2. scripts > generate-sitemap.js 에서 사이트 맵 내용을 수정 후 > package.json에서 scripts > build:next build && node ./scripts/generate-sitemap.js 를 수정하세요

3. next-sitemap.config 에서 사이트 맵 내용을 수정하세요.

4. public > manifest.json 에서 PWA (배포 서비스) 내용 수정

5. next.config.js 에서 siteUrl 수정

6. npm run build
