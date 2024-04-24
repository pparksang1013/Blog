type CustomPProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export const CustomP: React.FC<CustomPProps> = ({ children }) => {
    return <p>{children}</p>;
};
