import { persisted } from "./store";
import cfr from "$lib/disasm/cfr";

const root = "slicer.state";

export const enum View {
    AUTO = "auto",
    HEX = "hex",
    TEXT = "text",
}

export const projectOpen = persisted<boolean>(`${root}.project.open`, true);
export const editorView = persisted<View>(`${root}.editor.view`, View.AUTO);
export const toolsDisasm = persisted<string>(`${root}.tools.disasm`, cfr.id);
export const loggingOpen = persisted<boolean>(`${root}.logging.open`, false);
export const loggingMaxEntries = persisted<number>(`${root}.logging.max-entries`, 50);
