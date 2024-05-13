import Image from "next/image";
import { keywordImgStyle } from "../style/keywordImg.css";

export const KeywordImg = ({ keyword }: { keyword: string }) => {
    function setImg() {
        switch (keyword) {
            case "javascript":
                return "/img/js_keyword.png";

            default:
                return null;
        }
    }

    const path = setImg();

    return (
        <>
            {path && (
                <Image src={path} width={150} height={150} alt={`${keyword}_keyword`} className={keywordImgStyle.img} />
            )}
        </>
    );
};
