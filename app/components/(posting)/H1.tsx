import { h1Style } from "@/app/style/(posting)/heading.css";

export const H1 = ({ text }: { text: any }) => {
    return <h1 className={h1Style}>{text.rich_text[0].plain_text}</h1>;
};
