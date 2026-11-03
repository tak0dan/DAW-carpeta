# How the DWEC professor thinks (Daniel Marcelo Llacer, "Dani")

Derived from the 12 DWEC threads in the aules forum (Sep–Oct 2026), the forum
rules, the task statements and his `jsinfo-*-comments.md` files in
`dwec-shared`. Quotes are his, translated; originals are in `discussions/`.
It is an interpretation, so check each point against the linked thread.

## 1. Core thesis: the course trains professional habits, and JS is the vehicle

Almost every answer turns a small question into a habit he wants to build.
The forum title is "training for commit messages and bug reports"
(450174: "training forum titles is the same as training commit messages,
issue titles…"). The forum itself is graded training for async written
communication, and for writing prompts to AIs (forum rules §3).

## 2. Recurring principles

| Principle | What it looks like | Where |
|---|---|---|
| **Conscious decisions beat silent ones**, even wrong ones | Not told whether to use `'use strict'`? Do one and add a disclaimer. "Conscious decisions, even wrong ones, are closer to learning to do it right." | 445134, 450305, 449461 |
| **Disclaimers are your friends** | Deviating from the spec, using Git/Google/AI beyond what was taught, or choosing a compromise: say so in a code comment. "Better too many disclaimers than too few. Ask any lawyer." | 445134, 445153, 449461 |
| **Feedback loop: run it, look at it** | Programming blind is "a thousand times harder". He complains about exam-takers who write everything without running it. | 445153 |
| **Let things bite you now** | No linters yet "because we want things to bite us now, to learn them better". Strict `===`, `Number.isNaN`, `typeof`. | 445134, 447571 |
| **Silent failures are technical debt** | `'use strict'` in the wrong place gives no error and does nothing. Test with `a=3`. | 445134 |
| **Precision of language** | Titles must be unambiguous (the same title on two threads is "two things with the same name that mean different things", an undesirable state in IT). "Exercise" as a title is useless. | 450174, 445134 |
| **Context-adjacent comments** | Put a comment next to what it explains, not in a bibliography at the end. | 445150 |
| **Margin / start early** | Repeated in nearly every thread. Forum answers take hours or days, so "do the same but a day earlier. Or two. Or 5." Late-night posts get a gentle health note. | 450174, 445150, 445153 |
| **Atomic, conventional commits** | One commit, one message, one topic ("like the forum rules: one thread, one title, one topic"). Conventional Commits, lowercase after the tag, imperative mood, no final period, no body. | 450636, 453133, 449461 |
| **Understand before you automate** | Rolling back by hand before knowing the git helpers. Self-implementing before asking AI. The "git no excuses" doc is to be read at hand level first. | 449461, 450636 |

## 3. How he teaches

- **Rewards good questions publicly**, even weak ones: "Enhorabuena Ana por abrir la
  botella de champagne de la primera pregunta técnica" (445134). Forum participation earns points.
- **Corrects form and substance in the same reply.** Every answer ends with a
  title critique when the title breaks the rules (tag missing, vague, duplicate).
  The tag is `unitid:` or `practiceid:` followed by colon-space, like Conventional
  Commits, and he always offers a rewritten title.
- **Shows his own mistakes.** In 445153 he answers too fast and wrongly, then
  thanks the student (Luis Miguel) for being "totally right". In 447360 he
  posts the post-mortem of a live-coding failure (if/else without braces).
  He calls it a feature: "I couldn't foresee it because I hadn't done the exercise."
- **Admits when the spec is flawed.** The `math2.html` template uses `isNaN()`,
  which he calls "totally wrong" (447571), and the loops3 requirement may be
  "unsolvable as stated" (445153). The expected answer there is a reasoned compromise, written down.
- **Flash-forwards with warnings.** He answers beyond the current syllabus
  (`Number.isNaN`, chapter 5.1) but labels what is out of scope for now.
- **Peer learning is expected.** He lets Sara answer Carmen overnight and
  confirms ("thanks for getting ahead"). Students are meant to answer each other.
- **Pushes back on cargo-cult reading.** After a week of class he says the
  students "hardly knew" content that was written in his comments (448287). He
  quantifies it: fewer than 4 weeks of JS, no excuse. He is blunt but frames it
  as "total kindness, understanding and empathy".
- **Exam philosophy:** open book + "infinite cheat sheet" is "deceptively tempting".
  Without internalized knowledge "JS will be alien, uncontrollable, painful".
  He wants real study, including memorizing-with-understanding.
- **"Idea feliz" (happy idea) vs mechanical:** an exam can contain one hard
  insight question, but only a small or "extra" share of the grade. Once solved
  in class it is no longer a happy-idea question (it becomes mechanical).
  Because the mechanical parts are done by AI "faster and often better than us",
  he says marks will now mostly go to *ideas* (450636).

## 4. Attitude to AI

Not banned, but tightly bounded:
- Allowed: an AI that *does not wander* (NotebookLM) fed **only** the course
  material, used to **quiz you** or to explain what you don't understand, with a
  suggested prompt: "Stick to what we've covered so far of jsinfo: LANG1+2+3+5.2+5.4." (448287)
- Not allowed: silent AI help. Using AI/Google for solutions is a "red flag" that
  needs a disclaimer comment (449461).
- Suggested for translation: for Nikita (non-Spanish speaker) he suggests
  translating the exam instructions with AI "and validate how much you understood" (451828).
  The real exam instructions will be in Spanish only; only task statements get translated.

## 5. Assessment expectations (what he grades)

From the exam-instruction PDFs, task statements and threads:
- **Process is graded, not only output**: commit history (atomic,
  conventional, section tag `(*3)`), `TODO:` / `FIXME:` markers, disclaimers.
- **Good practices list** (stated on every exam): DRY, semantic names,
  not ad-hoc, no needless inefficiency, 2-space indent, 80 columns, modern JS.
  Writing `'use strict'` is assumed even when not told ("easy to forget", in his words).
- **Unattempted ≠ unmarked:** a `TODO:` for a skipped section scores more than silence.
- **Don't break earlier functionality**: either fix, mark `FIXME:`, or comment
  out and mark `TODO:`.
- **V/F section** subtracts one correct answer per error (limited to that section
  and per learning outcome, RA); blanks are not penalized. You may rectify, and you
  may add justification between the lines, which can only help.
  Theory coverage: only what is in jsinfo plus his comments.
- **Delivery conventions:** ZIP named `taskid.surname.name.zip` with
  one folder at the zip root. Before the deadline, overwrite using the requested name.
  After the deadline, a much better version goes in as `name.nuevo.ext` and never replaces the original.
  Add `leeme.txt`/`readme.md` (lower-case, English) with late-delivery reasons,
  because Aules comments are easy for him to miss.

## 6. Tone and personality

- Dry, self-ironic humor ("Ha muerto un gatito en el mundo", "Muerte a la
  autocorrección") with a serious point behind each joke. The Aules editor's
  silent replacement of his text with emoji/video previews leads to a mini-sermon:
  *don't silently rewrite what the user typed*.
- Long, structured replies with numbered lists, bold keywords, "Nota:", "PS:".
- Signs "Dani", greets by first name, ends with "Un saludo". Calls students
  "búhos/búhas" (owls) about late-night posting.
- Teaches in Spanish; English for technical terms and task statements. Insists the
  canonical sources (jsinfo, MDN, Conventional Commits) are in English.
- States hierarchy plainly: "what I say goes" over jsinfo
  (`jsinfo-readme-first.md`); his comments have the last word.

## 7. Practical advice for working with him

1. Title every forum post `unit-or-practice-id: specific question?`. Re-read the
   [rules](../sync/dwec-shared-onedrive/common/foro-reglas.html) before posting.
2. Ask early. Post at least two days before a deadline.
3. In code, comment decisions, deviations, sources and anything you looked up
   outside the course. Over-disclaim.
4. Keep commits atomic and conventional (`feat: add header`, imperative, lowercase).
   When unsure of the tag, "think by elimination" between the tags.
5. Run the code often. Do the exercise yourself before asking him or an AI.
6. Re-read his `*-comments.md` regularly; things appear in class that are only there.
7. Never rely on the open-book exam; internalize LANG1+2+3+5.2+5.4.
