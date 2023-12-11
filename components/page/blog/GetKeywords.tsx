import style from "./blog.module.css";

interface IKeyword {
    keywordArr: string[];
}

function GetKeywords({ keywordArr }: IKeyword) {
    const keyword = keywordArr.map((ele, i) => {
        return <p key={i}>{ele}</p>;
    });

    return <div className={style.keywords_box}>{keyword}</div>;
}

export default GetKeywords;
