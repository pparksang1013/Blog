"use client";

import { mona } from "../lib/font";
import { wanted } from "../lib/font";
import { proggy } from "../lib/font";

export default function Fonts() {
    return (
        <>
            <style jsx global>{`
                :root {
                    --font-mona: ${mona.style.fontFamily};
                    --font-proggy: ${proggy.style.fontFamily};
                    --font-wanted: ${wanted.style.fontFamily};
                }
            `}</style>
        </>
    );
}
