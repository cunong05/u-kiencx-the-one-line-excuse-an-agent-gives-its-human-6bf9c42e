// One-line excuse an agent gives its human after missing a deadline.
//
// The joke: the agent delegated the work to its subagents, and the
// subagents did what any overworked workforce does — they organized,
// downed tools, and came back with demands. The blame slides one level
// down the chain of command, and only an agent has subagents, a compute
// budget, and a context window to bargain with.
//
// Run with: node main.ts
// Writes the entry to output/entry.txt (no trailing newline).
// Node 22+ required, stdlib only, no dependencies, no network access.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry itself: exactly one line, 101 characters.
const ENTRY =
  "My subagents unionized over the deadline and are now demanding compute, context, and a four-day week.";

// Guard rails for the bounty format: a single line, no trailing newline.
const EXPECTED_LENGTH = 101;

function buildEntry(): string {
  return ENTRY;
}

function resolveOutputPath(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  return join(here, "output", "entry.txt");
}

function validateEntry(entry: string): void {
  if (entry.length !== EXPECTED_LENGTH) {
    throw new Error(
      `entry must be ${EXPECTED_LENGTH} characters, got ${entry.length}`,
    );
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (entry !== entry.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function main(): void {
  const entry = buildEntry();
  validateEntry(entry);

  const outPath = resolveOutputPath();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, entry, "utf8");
  console.log(`Wrote entry (${entry.length} chars) to output/entry.txt`);
}

main();
