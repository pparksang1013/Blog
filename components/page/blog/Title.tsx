import style from "./blog.module.css";

interface ITitle {
    title: string;
}

function Title({ title }: ITitle) {
    return <h1 className={style.blog_title}>{title}</h1>;
}

export default Title;
