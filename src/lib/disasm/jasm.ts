import type { Disassembler } from "./";
import { type ClassEntry } from "$lib/workspace";

const jasm: Disassembler = {
    id: "jasm",
    name: "JASM",
    lang: "jasm",
    run: async (entry: ClassEntry): Promise<string> => {
        const { disassemble } = await import("@run-slicer/jasm");

        return await disassemble(await entry.data.bytes());
    },
};

export default jasm;
