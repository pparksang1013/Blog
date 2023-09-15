"use client";

import { suit } from "../lib/font";
import { mona } from "../lib/font";

export default function Fonts() {
    return (
        <>
            <style jsx global>{`
                :root {
                    --font-suit: ${suit.style.fontFamily};
                    --font-mona: ${mona.style.fontFamily};
                }
            `}</style>
        </>
    );
}
