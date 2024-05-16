function Ol({ text }: { text: any }) {
    return (
        <ol>
            {text.lists.map((ele: string) => (
                <li>{ele}</li>
            ))}
        </ol>
    );
}

function Ul({ text }: { text: any }) {
    return (
        <ul>
            {text.lists.map((ele: string) => (
                <li>{ele}</li>
            ))}
        </ul>
    );
}

export const List = ({ text }: { text: any }) => {
    console.log(text);

    switch (text.type) {
        case "bulleted_list_item":
            return <Ul text={text} />;
        case "numbered_list_item":
            return <Ol text={text} />;
        default:
            return null;
    }
};
