// import style from "./blog.module.css";
import "/style/blog.css";

interface IKeyword {
    keywordArr: string[];
}

function GetKeywords({ keywordArr }: IKeyword) {
    const keyword = keywordArr.map((ele) => {
        return <p>{ele}</p>;
    });

    return <div className="keywords_box">{keyword}</div>;
}

export default GetKeywords;
