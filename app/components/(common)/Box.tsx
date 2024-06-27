import { boxStyle } from "@/app/style/(common)/box.css";

export const Box = ({ children, styleValue }: { children: React.ReactNode; styleValue: string }) => {
    return <div className={boxStyle[styleValue as keyof typeof boxStyle]}>{children}</div>;
};
