import { isKoreanOrEnglish } from "@/lib/isKoreanOrEnglish";

import style from "./blog.module.css";

interface ITitle {
    title: string;
}

function Title({ title }: ITitle) {
    let koreanClassName = isKoreanOrEnglish(title) === "KR" ? "KR" : "";

    return <h1 className={`${style.blog_title} ${koreanClassName && style[koreanClassName]}`}>{title}</h1>;
}

export default Title;
