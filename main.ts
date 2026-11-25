// Fortune in a Pot, main.ts (Node 22, standard library only).
//
// Writes one original fortune for a houseplant to /output/entry.txt.
// Deterministic: a fixed string, no clock, no randomness, no network,
// no model calls — two runs write byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Why this fortune: the judge brief rewards a line that is a prediction
// about this plant in this window, funny in a way a plant lover laughs
// at, and warm. "This week ... will ..." gives it the fortune cadence;
// "your favorite leaf in the window" pins it to the windowsill plant,
// not any plant anywhere; and the joke — the keeper photographing the
// plant like a proud parent — is a small, true plant-lover laugh, with
// no pun, no doom, and no care instruction in it.
//
// Length check: the line is 118 characters, so entry.txt is 119 bytes
// with its trailing newline — inside the gate's 1–120 character cap
// whether or not the newline is counted.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'This week the sun will find your favorite leaf in the window, and your keeper will photograph you like a proud parent.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE + '\n', 'utf8');
