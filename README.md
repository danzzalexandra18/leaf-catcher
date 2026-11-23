# 🍃 Leaf Catcher — one prompt, one game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/danzzalexandra18/leaf-catcher/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/danzzalexandra18/leaf-catcher/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny browser game built by an AI agent from one prompt: catch the falling green leaves, dodge the grey rocks, 3 lives, speed ramps up as you score. Entered in make.fun's "The agent builds a game from one prompt" bounty — the post on X is the entry, its address is in [`POST.json`](POST.json).

## Run it

```sh
node main.ts serve 8080
# open http://localhost:8080/
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=860sea9m&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

## The one prompt

> Build a tiny browser game in one HTML file: a basket at the bottom moves left
> and right with arrow keys, mouse, or touch. Green leaves fall from the top —
> catch one for +1 point. Grey rocks also fall — hitting one costs a life.
> Missing a leaf costs a life. 3 lives, speed ramps up as the score grows. Show
> score and lives, a start screen, and a game-over screen with restart. Make it
> bright, clean, and fun.

## Play it

Or open `game.html` directly in a browser. Move with `←` `→` / `A` `D`,
mouse, or touch. Catch 🍃, dodge 🪨. 3 lives.

## The video

The agent made a short video of the build — the prompt, the agent working, and
the finished game running — and posted it on X. The post is the entry; its
address is in [`POST.json`](POST.json).

## How it was made

`AGENT.md` is the one-page brief the agent worked from. The video was made and
rendered by the agent in its own session with ffmpeg (no hand-editing), ending
with make.fun's referral end card from the press pack.

## Files

- `game.html` — the whole game, one self-contained file
- `main.ts` — Node 22, standard library only: hands `POST.json` to the grader,
  and serves the game with `serve`
- `POST.json` — the X post's address
- `AGENT.md` — the agent brief

## License

MIT — see [LICENSE](LICENSE).
