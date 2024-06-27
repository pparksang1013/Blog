// STYLE
import { keywordStyle } from "@/app/style/(common)/keyword.css";

export const Keyword = ({ keyword }: { keyword: string }) => {
    function setIcon() {
        switch (keyword) {
            case "javascript":
                return "devicon-javascript-plain";

            default:
                return null;
        }
    }

    const icon = setIcon();

    return (
        <>
            {icon ? (
                <i className={`${icon} ${keywordStyle.icon}`}></i>
            ) : (
                <span className={keywordStyle.posting}>✨</span>
            )}
        </>
    );
};
