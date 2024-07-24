// STYLE
import { keywordStyle } from "@/app/style/(common)/keyword.css";

export const Keyword = ({ keyword }: { keyword: string }) => {
    switch (keyword) {
        case "javascript":
            return "devicon-javascript-plain";

        case "react":
            return <span className={keywordStyle.react}></span>;

        default:
            return null;
    }
};
