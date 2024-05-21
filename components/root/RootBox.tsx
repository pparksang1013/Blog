import { rootBoxStyle } from "./style/rootBox.css";

export const RootBox = ({ children }: { children: React.ReactNode }) => {
    return <div className={rootBoxStyle}>{children}</div>;
};
