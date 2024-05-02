export type CustomPropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export type CustomATagType = CustomPropsType & {
    href?: string;
};

export type CustomContentsType = CustomPropsType & {
    contents: string[];
};
