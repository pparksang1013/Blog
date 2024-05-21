import { keywordStyle } from "../style/keyword.css";

export const Keyword = ({ keyword }: { keyword: string }) => {
    function setIcon() {
        switch (keyword) {
            case "javascript":
                return "devicon-javascript-plain";

            default:
                return null;
        }
    }

    const path = setIcon();

    return (
        <>{path ? <i className={`${path} ${keywordStyle.icon}`}></i> : <span className={keywordStyle.span}>✨</span>}</>
    );
};
