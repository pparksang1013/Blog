import type { MDXComponents } from "mdx/types";
import "/style/customMDX.css";

const CustomMDX: MDXComponents = {
  MainCate: ({
    children,
    tag,
    down,
  }: {
    children: React.ReactNode;
    tag: string;
    down: string;
  }) => {
    return (
      <section className={`main_category ${tag} ${down}`} id={`mdx`}>
        {children}
      </section>
    );
  },

  SubCate: ({ children }: { children: React.ReactNode }) => {
    return <section className="sub_category">{children}</section>;
  },

  StrongTag: ({ children }: { children: React.ReactNode }) => {
    return <strong className="strong_tag">{children}</strong>;
  },

  MarginBox: ({
    children,
    lang,
  }: {
    children: React.ReactNode;
    lang: string;
  }) => {
    let isLanguage = lang ? "en" : "";

    return <div className={`margin_box ${isLanguage && lang}`}>{children}</div>;
  },

  Highlight: ({ children }: { children: React.ReactNode }) => {
    return <span className="highlight">{children}</span>;
  },

  HighlightBox: ({ children }: { children: React.ReactNode }) => {
    return <div className="highlight_box">{children}</div>;
  },

  TextSizeDown: ({ children }: { children: React.ReactNode }) => {
    return <span className="text_size_down">{children}</span>;
  },
};

export default CustomMDX;
