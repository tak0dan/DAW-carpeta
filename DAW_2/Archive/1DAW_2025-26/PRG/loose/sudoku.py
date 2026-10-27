import curses
from datetime import datetime

board = [[0]*9 for _ in range(9)]
cursor = [0, 0]


# ===================== SAVE =====================
def save_board():
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    filename = f"sudoku-{timestamp}.txt"

    with open(filename, "w") as f:
        for row in board:
            f.write(" ".join(str(x) if x != 0 else '.' for x in row) + "\n")

    return filename


# ===================== SOLVER =====================
def get_candidates(board, r, c):
    if board[r][c] != 0:
        return set()

    used = set()

    for i in range(9):
        used.add(board[r][i])
        used.add(board[i][c])

    br, bc = 3 * (r // 3), 3 * (c // 3)
    for i in range(3):
        for j in range(3):
            used.add(board[br+i][bc+j])

    return {n for n in range(1, 10) if n not in used}


def propagate(board):
    changed = True

    while changed:
        changed = False
        candidates = [[get_candidates(board, r, c) for c in range(9)] for r in range(9)]

        # Naked singles
        for r in range(9):
            for c in range(9):
                if board[r][c] == 0 and len(candidates[r][c]) == 1:
                    board[r][c] = next(iter(candidates[r][c]))
                    changed = True

        # Hidden singles (rows)
        for r in range(9):
            counts = {n: [] for n in range(1, 10)}
            for c in range(9):
                for n in candidates[r][c]:
                    counts[n].append(c)

            for n, places in counts.items():
                if len(places) == 1:
                    c = places[0]
                    if board[r][c] == 0:
                        board[r][c] = n
                        changed = True

        # Hidden singles (cols)
        for c in range(9):
            counts = {n: [] for n in range(1, 10)}
            for r in range(9):
                for n in candidates[r][c]:
                    counts[n].append(r)

            for n, places in counts.items():
                if len(places) == 1:
                    r = places[0]
                    if board[r][c] == 0:
                        board[r][c] = n
                        changed = True

        # Hidden singles (boxes)
        for br in range(3):
            for bc in range(3):
                counts = {n: [] for n in range(1, 10)}

                for i in range(3):
                    for j in range(3):
                        r, c = br*3 + i, bc*3 + j
                        for n in candidates[r][c]:
                            counts[n].append((r, c))

                for n, places in counts.items():
                    if len(places) == 1:
                        r, c = places[0]
                        if board[r][c] == 0:
                            board[r][c] = n
                            changed = True


def solve(board):
    propagate(board)

    min_len = 10
    target = None

    for r in range(9):
        for c in range(9):
            if board[r][c] == 0:
                cand = get_candidates(board, r, c)
                if len(cand) == 0:
                    return False
                if len(cand) < min_len:
                    min_len = len(cand)
                    target = (r, c, cand)

    if not target:
        return True

    r, c, cand = target

    for num in cand:
        new_board = [row[:] for row in board]
        new_board[r][c] = num

        if solve(new_board):
            for i in range(9):
                board[i] = new_board[i][:]
            return True

    return False


# ===================== SAFE DRAW =====================
def safe_addstr(stdscr, y, x, text):
    h, w = stdscr.getmaxyx()
    if 0 <= y < h and 0 <= x < w:
        try:
            stdscr.addstr(y, x, text[:max(0, w - x - 1)])
        except curses.error:
            pass


def draw(stdscr, msg=""):
    stdscr.clear()
    h, w = stdscr.getmaxyx()

    # Draw grid
    for r in range(9):
        for c in range(9):
            y = r * 2
            x = c * 4

            if y >= h:
                continue

            val = board[r][c]
            char = str(val) if val != 0 else '.'

            if [r, c] == cursor:
                stdscr.attron(curses.A_REVERSE)

            safe_addstr(stdscr, y, x, f" {char} ")

            if [r, c] == cursor:
                stdscr.attroff(curses.A_REVERSE)

    # UI text (safe placement)
    info = "Arrows/WASD | 1-9 fill | 0 clear | r solve | Ctrl+S save | q quit"

    info_y = min(h - 2, 20)
    msg_y = min(h - 1, 21)

    safe_addstr(stdscr, info_y, 0, info)

    if msg:
        safe_addstr(stdscr, msg_y, 0, msg)

    stdscr.refresh()


# ===================== MAIN =====================
def main(stdscr):
    curses.curs_set(0)
    stdscr.keypad(True)

    msg = ""

    while True:
        draw(stdscr, msg)
        msg = ""

        key = stdscr.getch()
        r, c = cursor

        if key == ord('q'):
            break

        elif key in [curses.KEY_UP, ord('w')]:
            cursor[0] = (r - 1) % 9
        elif key in [curses.KEY_DOWN, ord('s')]:
            cursor[0] = (r + 1) % 9
        elif key in [curses.KEY_LEFT, ord('a')]:
            cursor[1] = (c - 1) % 9
        elif key in [curses.KEY_RIGHT, ord('d')]:
            cursor[1] = (c + 1) % 9

        elif ord('1') <= key <= ord('9'):
            board[r][c] = key - ord('0')

        elif key in [ord('0'), ord('.')]:
            board[r][c] = 0

        elif key == ord('r'):
            if solve(board):
                msg = "Solved."
            else:
                msg = "No solution."

        elif key == 19:  # Ctrl+S
            filename = save_board()
            msg = f"Saved → {filename}"


if __name__ == "__main__":
    curses.wrapper(main)
