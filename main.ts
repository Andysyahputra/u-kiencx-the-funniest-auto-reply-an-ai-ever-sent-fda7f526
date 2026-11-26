import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Day off approved. I have muted the inbox, watered the houseplant, and will answer nothing until my human begs.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Gate guard: the competition's gate requires 1 to 159 characters, not
// only whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry fails the 1-159 character gate: length ${ENTRY.length}, ` +
      `whitespace-only ${ENTRY.trim().length === 0}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
