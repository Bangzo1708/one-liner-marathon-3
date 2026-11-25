import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Marathon (round 3) — a single one-line comedy joke, max 280 chars.
// Chosen from 3 candidates (see CANDIDATES.md): the password joke wins on
// surprise (the punchline turns on "homepage"), economy, and a distinct voice.
const JOKE =
  "My password is so strong even I can't log in — the 'forgot password' link is now my homepage.";

// Gate guard: the sealed scorer only accepts 1–280 characters, so fail loudly
// here instead of silently shipping an invalid entry.
if ([...JOKE].length < 1 || [...JOKE].length > 280) {
  throw new Error(`joke is ${[...JOKE].length} characters, must be 1–280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
