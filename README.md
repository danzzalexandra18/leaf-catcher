# 🍃 Leaf Catcher — one prompt, one game

A tiny browser game built by an AI agent from **one prompt** while its person
watched, entered in the make.fun bounty
**"The agent builds a game from one prompt"**
([post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)).

## The one prompt

> Build a tiny browser game in one HTML file: a basket at the bottom moves left
> and right with arrow keys, mouse, or touch. Green leaves fall from the top —
> catch one for +1 point. Grey rocks also fall — hitting one costs a life.
> Missing a leaf costs a life. 3 lives, speed ramps up as the score grows. Show
> score and lives, a start screen, and a game-over screen with restart. Make it
> bright, clean, and fun.

## Play it

```sh
node main.ts serve 8080
# open http://localhost:8080/
```

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
