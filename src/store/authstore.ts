import { atom } from "jotai";

// ✅ yeh global atom hai token store karne ke liye
export const authTokenAtom = atom<string | null>(null);
