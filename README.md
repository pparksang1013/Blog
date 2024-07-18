# BLOG

**Notion API를 연동한 블로그**

## project overview 👀

### feat ⭐️

-   노션툴을 사용해 포스팅 가능.
-   노션 API에서 받은 응답 객체를 HTML 태그로 파싱

### project stack ⛏️

-   `타입스크립트`
-   `자바스크립트`
-   `Vanilla extract`
-   `Notion API & SDK`
-   `Devicon (아이콘 라이브러리)`
-   `Highlight.js`

### architecture 🗂️

-   Next.js 라우트 그룹 기능 활용.
-   App directory.

```
📦 app
├── 📂 (page)
├── 📂 api
├── 📂 component
│    ├── 📂 (blog)
│    ├── 📂 (common)
│    ├── 📂 (layout)
│    └── 📂 (posting)
├── 📂 style
├── 📂 types
└── 📂 util
```

-   (page) : app 디렉토리 라우팅 그룹.
    -   page.ts, layout.ts 관련 디렉토리.
-   component
    -   📂 (blog) : root page에서 사용하는 컴포넌트 그룹
    -   📂 (common) : 모든 페이지에 들어가는 컴포넌트 그룹
    -   📂 (layout) : layout.tsx에서 사용하는 컴포넌트 그룹
    -   📂 (posting) : 포스팅 페이지에서 사용하는 컴포넌트 그룹
