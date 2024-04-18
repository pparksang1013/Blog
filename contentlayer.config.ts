// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('rehype-pretty-code').Options} */
const options = {
    // See Options section below.
};

export const Post = defineDocumentType(() => ({
    contentType: "mdx",
    name: "Post",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        // thumbnail: { type: "string", required: false },
        date: { type: "date", required: true },
        summary: { type: "string", required: true },
        tag: { type: "string", required: true },
        keywords: { type: "list", of: { type: "string" }, required: false, default: [] },
    },
}));

export default makeSource({
    contentDirPath: "post",
    documentTypes: [Post],
});
