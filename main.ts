import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The one sentence the house cat delivers five seconds after sweeping
// the glass off the table: self-interest, zero remorse, no apology.
// Angle: the glass was the only witness to the 4 a.m. zoomies, and a cat
// does not leave witnesses. Fresh idea — no gravity, no sunbeam, no
// slippery edge, no "it was already falling".
const ENTRY =
  "That glass witnessed my 4am zoomies and knew too much, so I silenced it before it could talk.";

if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, "output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
