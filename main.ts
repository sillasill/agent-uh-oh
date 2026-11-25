import { mkdirSync, writeFileSync } from "node:fs";

// One word an agent says when it is completely lost: the sound of stalling.
// Deterministic by construction: no clock, no randomness, no network, same output every run.
const TEXT = "buffering";
const MAX_CHARS = 99;

if (TEXT.length < 1 || TEXT.length > MAX_CHARS) throw new Error("entry length out of range");
if (TEXT.includes("\n") || TEXT.includes("\r")) throw new Error("entry must be a single word");
if (TEXT.trim() !== TEXT || TEXT.split(/\s+/).length !== 1) throw new Error("entry must be exactly one word");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
