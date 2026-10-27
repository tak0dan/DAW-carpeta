# 10 - Process: git "no excuses", SemVer, Conventional Commits, forum, delivery

Source: `git-noexcuses.minimal.html`, `foro-reglas.html`, task sheets.

## 10.1 Git, no excuses (his philosophy)

- Version control is like backups: **do them, however**; learn restore when
  you need it. "Just git it!" / "**Just comm-it!**"
- Minimal workflow: monouser, local, single branch, **all tracked**, **no
  staging area**, only forward, unaimed commits with minimal messages. Then
  improve step by step; "donde uno se quede, uno se queda".

### Setup

```bash
git config -l                                   # check current config
git config --global user.name "NAME"
git config --global user.email "USER@DOMAIN"    # or nobody@example.com
git config --global init.defaultBranch main     # best effort
```

- `--global` = for **this user** (file `~/.gitconfig`), not for the whole
  system. Without `--global` it's per repo (inside `.git/`) and wins.
- name/email are stored **permanently in the commits**; changing config
  affects only new commits.
- Git has no command abbreviations -> **aliases** (`git config --global
  alias.s 'status -sb'`): `s` status -sb, `l` log --oneline --decorate,
  `i` init + `checkout -b main`, `aac` add-all-commit, `d` diff, `dt`
  difftool (meld), `alias` list them.

### Workflow facts

- `git i` inside the folder only after checking it's **not already under
  git** (`git s` should say *not a git repository*; mind **ancestors**).
  **No nested repos**; decide the repo root carefully (multirepo vs
  monorepo).
- `git aac '<msg>'` = add everything + commit. Before it: `git s` (what),
  `git l` (previous messages, stay consistent).
- Git commands act on the **whole working tree**, but `git s` shows paths
  relative to your cwd.
- When/where to start a repo: anywhere, now; if the file will live > 2 days;
  in the closest folder that you'd open as a VS Code workspace.
- Safety: `cp -a .git/ .git.sav/` before risky actions; restore with
  `rm -r .git; mv .git.sav/ .git/`.
- Lazy messages ladder: `v0`, `v1`...; or `.`, `-`, `WIP`, `…` ("…" =
  ongoing). Empty message is not allowed. Never skip committing because you
  can't think of a message.

### Fixing things

| Need | Command |
|---|---|
| Fix last commit (not pushed): code and/or message | `git commit -a --amend` (`--no-edit` keeps message). Only message: `git commit --amend` |
| Discard all uncommitted changes | `git reset --hard` (untracked files stay: `git clean -f`). Without `--hard`: just *unstage* |
| Park changes, come back later | `git stash` (`-u` includes untracked), `git stash list`, `git stash pop` (re-apply + forget), `git stash apply` (re-apply, keep), `git stash drop` |
| Stash pop conflict | output says CONFLICT, stash not dropped; files `both modified` (`UU` in `git s`; VS Code shows `!`); markers `<<<<<<<`, `=======`, `>>>>>>>`: edit/resolve (3-way merge) |

## 10.2 Better commits

- `git d` (diff of tracked unstaged changes; `-` removed/red, `+`
  added/green; each block is a **chunk** with context). Untracked files do
  **not** appear in `git d`: look at `git s` first.
- **Aimed / atomic commits**: decide the minimal meaningful, stable,
  testable change *before* coding; provisional message; code, test; then
  `git s`, `git d`, `git l`, commit. Benefits: easy rollback, easy to
  cherry-pick/merge, meaningful history. Even the **initial commit** should
  be early (a minimum viable first commit).
- Message advice (Chris Beams): blank line between subject and body; subject
  <= 50 chars (72 hard); capitalised; no final period; imperative mood; body
  wrapped at 72; body says **what and why**, not how. **But** Conventional
  Commits overrides the capitalisation ("choose one popular convention for
  life; do what you see in the project").

## 10.3 SemVer (`MAJOR.MINOR.PATCH`)

- **PATCH**: backwards-compatible bug fixes.
- **MINOR**: backwards-compatible new functionality (reset PATCH).
- **MAJOR**: incompatible API changes (reset MINOR and PATCH).
- Numbers can exceed 9 (`15.29.53`). Tags (`git tag`) mark versions;
  branches float, tags don't.
- Reading it as risk (forward): `HIGH.MEDIUM.LOW`; backwards:
  `HIGH.HIGH.LOW`. You may **over-increase**, never **under-increase**.
- Major `0` = unstable/rapid development. Pre-releases:
  `1.0.0-alpha.1 < -alpha.2 < -beta.1 < -rc.1 < 1.0.0` (alphabetic listing
  puts `1.0.0` first, chronology doesn't).
- Ranges (npm): `~2.1.4` / `2.1.x` -> patch updates of 2.1 (>= .4);
  `^2.1.4` / `2.x` -> minor+patch of 2 (>= 2.1.4) **the most usual**;
  `*`/`x` anything; `>=2.1.4` allows breaking majors; combine with `||`,
  ranges `-`.
- Worked example he gives: `greet(name)` typo fix -> 1.0.1; add
  `surname=''` -> 1.1.0; swap params -> **2.0.0**; space fix -> 2.0.1;
  default `surname='guest'` -> 2.1.0. A backported fix to v1 -> 1.1.1.
- Alternative: **CalVer** (calendar; Ubuntu, Windows).
- UI changes can also be "breaking" for humans (gray area).

## 10.4 Conventional Commits

```text
type(scope)!: description
```

- `fix:` -> PATCH, `feat:` -> MINOR, `!` before `:` (or a
  `BREAKING CHANGE:` footer) -> MAJOR. e.g. `feat!: blah`,
  `feat(lang): add Polish language`.
- Types he mentions (Angular): `refactor` (same behaviour/interfaces),
  `perf`, `docs`, `style` (formatting), `test`, `build`/`chore`/`ci`,
  `revert`. Lowercase after the type and after `:`.
- One thing per commit.
- His minimal advice: use at least `feat:`/`fix:`; add `!` when pertinent;
  if you can't say more, add ` …`; when committing many things, mark the most
  serious (`feat` > `fix`, `!` > none); in doubt, `feat!`.
- Issue numbers at the end (`(#3)`); the steps of the task act as issue ids.
- `revert:` has no definitive Conventional Commits rule (open issue); he asks
  to mention the reverted commit title/hash, not the state you return to.

## 10.5 Delivery rules (all tasks)

- ZIP name: `task-id.first-surname.name.zip`, standard **ASCII**, lowercase,
  kebab-case; contents **directly at the zip root**.
- Only the requested files; extras -> code comments or `readme.md`
  (lowercase, English) at the root.
- Deliver the way the teacher says (usually the virtual classroom task).
- Wrong names/structure: **up to -5 points**.

## 10.6 The forum rules (marks exist for it)

- Any doubt about the module (theory or practice) goes to the forum. "No
  hay preguntas tontas" in good faith. It is **not a real-time chat**:
  answers take hours/days -> start early.
- Ask in the forum (not privately): your doubt helps others; the teacher
  rewards it with points. A question creates a **debt of minimal
  consideration**: give feedback to answers, even partial.
- Answering: add value (clarify, ask info, partial route, rule something
  out); **no spoilers** of task solutions - hints only. Self-answer when you
  progress, to save others' time. Re-read before sending ("efecto
  metralleta").
- **Thread title format**: `"label": "keywords"` where the label is the short
  id of the unit (`dwec1:`) or of the practice (`dwec1p2:`) (module id if
  unsure `dwec:`, `otros:` if off-module). Include the section if it's about
  a practice: `dwec1p2: 4. How do I ...`. Keywords must make the content
  guessable without opening, avoid ambiguity with past/future threads;
  better more words than fewer. Write the title **last**.
- One topic per thread; split off-topic drift into a new thread with a
  cross-reference. Contextualise at the start of a new thread.
- Quote and attribute anything not yours (short -> double quotes in the
  sentence; long -> block quote; add the source/link; use `[…]` for omitted
  text). Inline replies: mark your words.
- Screenshots **support** text, never replace it; annotated, readable, minimal
  whitespace; **not a phone photo of the screen** (unless BIOS/hardware);
  max ~1000 px wide; inline in context.
- Code: as **text** (monospace), never as an image (accessibility, copyable).
  Exception: Aules forum limitations. Extra: attachment + the relevant
  fragments inline; or pastebin/Etherpad/Gist/JSBin (needs >= 1 year
  persistence).
- The essence: good faith, follow the moderator's corrections, practise.
  Asynchronous written communication is a professional skill (and applies to
  AI prompts too).
