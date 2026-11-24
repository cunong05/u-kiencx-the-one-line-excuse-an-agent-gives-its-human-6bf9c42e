// The One-Line Excuse an Agent Gives Its Human
// Writes the single-line entry to output/entry.txt, deterministically.
// Node 22+, stdlib only, no dependencies, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "My subagents unionized over the deadline and are now demanding compute, context, and a four-day week.";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
// No trailing newline: the entry is exactly one line of <= 160 characters.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry (${ENTRY.length} chars) to output/entry.txt`);
