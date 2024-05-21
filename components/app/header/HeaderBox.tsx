import { headerStyle } from "./style/header.css";

export const HeaderBox = ({ children }: { children: React.ReactNode }) => {
    return <div className={headerStyle.box}>{children}</div>;
};
