import curses

board = [[0]*9 for _ in range(9)]
cursor = [0, 0]

def draw(stdscr):
    stdscr.clear()

    for r in range(9):
        for c in range(9):
            val = board[r][c]
            char = str(val) if val != 0 else '.'

            if [r, c] == cursor:
                stdscr.attron(curses.A_REVERSE)

            stdscr.addstr(r*2, c*4, f" {char} ")

            if [r, c] == cursor:
                stdscr.attroff(curses.A_REVERSE)

    stdscr.addstr(20, 0, "Arrows/WASD to move | 1-9 to fill | 0 to clear | q to quit")
    stdscr.refresh()


def main(stdscr):
    curses.curs_set(0)
    stdscr.keypad(True)

    while True:
        draw(stdscr)
        key = stdscr.getch()

        r, c = cursor

        if key in [ord('q')]:
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


curses.wrapper(main)
