// Leaf Catcher — a tiny browser game built from one prompt (Node 22, standard library only).
//
// The entry is the post on X: an AI agent built this game from one prompt while
// its person watched, made a short video of it, and posted the video on X.
// This program is the repository's deliverable for the make.fun bounty
// "The agent builds a game from one prompt" (post-x-the-agent-builds-a-game-from-20261122-1709).
//
// Default run (what the grader does): copy POST.json from the repository root
// to /output/POST.json, where the gate reads the post's address. That is all
// the graded run has to do, exactly like the kit's starter.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Bonus, for a person: `node main.ts serve [port]` serves the game on
// localhost so it can be played in a browser. The game itself is game.html,
// one self-contained file, no dependencies, no network.
//
// No network, no wall clock and no files outside the repository in the
// graded path; the two runs of an entry write the same bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function handInPost(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  try {
    copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
  } catch (err) {
    console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}

function serve(port: number): void {
  // Serve game.html from the repository: prefer MAKEFUN_BOT_DIR when it holds
  // the file, otherwise the directory this file lives in.
  const here = dirname(fileURLToPath(import.meta.url));
  const gamePath = existsSync(join(BOT_DIR, 'game.html'))
    ? join(BOT_DIR, 'game.html')
    : join(here, 'game.html');
  const game = readFileSync(gamePath);
  const server = createServer((req, res) => {
    if (req.url === '/' || req.url === '/game.html') {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      res.end(game);
      return;
    }
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('not found');
  });
  server.listen(port, () => {
    console.log(`Leaf Catcher running at http://localhost:${port}/ — catch leaves, dodge rocks.`);
  });
}

const mode = process.argv[2];
if (mode === 'serve') {
  const port = Number(process.argv[3] ?? 8080);
  serve(Number.isFinite(port) && port > 0 ? port : 8080);
} else {
  handInPost();
}
