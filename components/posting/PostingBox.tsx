import { postingBoxStyle } from "./style/postingBox.css";

export const PostingBox = ({ children }: { children: React.ReactNode }) => {
    return <div className={postingBoxStyle.box}>{children}</div>;
};
