// The 3AM Commit Message — entry program.
// Writes one funny 3am commit message line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "fix: the bug was me all along, I just needed 47 coffees and a 3am epiphany to see it";

// Entry writer: keeps the single-line commit message and its UTF-8 write in one place.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text + "\n", "utf8");
}

writeEntry(entry);
