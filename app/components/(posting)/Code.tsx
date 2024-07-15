import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import plaintext from "highlight.js/lib/languages/plaintext";
import "highlight.js/styles/atom-one-dark-reasonable.css";
// STYLE
import { codeStyle } from "@/app/style/(posting)/code.css";
export const Code = async ({ code, idx }: { code: any; idx: number }) => {
    const myCode = `${code.rich_text[0].text.content}`;
    let myHtml = "";
    switch (code.language) {
        case "javascript":
            hljs.registerLanguage("javascript", javascript);
            myHtml = hljs.highlight(myCode, { language: "javascript" }).value;
            return (
                <pre key={idx} className={codeStyle.pre}>
                    <code
                        dangerouslySetInnerHTML={{
                            __html: myHtml,
                        }}
                    />
                </pre>
            );
        case "plain text":
            hljs.registerLanguage("plaintext", plaintext);
            myHtml = hljs.highlight(myCode, { language: "plaintext" }).value;
            return (
                <pre key={idx} className={codeStyle.pre}>
                    <code
                        dangerouslySetInnerHTML={{
                            __html: myHtml,
                        }}
                    />
                </pre>
            );
    }
};
