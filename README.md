## MDX CUSTOM COMPONENT 👀

### MDX CUSTOM COMPONET STRUCTURE

```

📦 Main Comp
├── 📂 MainCateBox ── h2
│                 └── p
│
├── 📦 SubComp
│        └──SubCateBox
│               └──h3
│               └──SubContents
│                       └──h4
│                       └──p

```

### Main Component

-   MainCateBox: h2와 text flex 하기위한 div

### Sub Component

-   SubCateBox는 h3와 text flex 하기위한 div
-   SubContents는 특정 너비를 가지기위한 div, SubContents 내부의 내용들을 수직으로 정렬하는 역할.

### MarginBox Component

-   동일안 margin을 주기위한 div
-   ol tag는 하나의 MarginBox Comp에서 작성.
-   ol tag는 block이야. 그런데 ol tag만 사용하는건 아니니까
