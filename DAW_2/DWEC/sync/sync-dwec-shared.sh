#!/usr/bin/env bash
# Two steps: (1) pull the teacher's shared OneDrive folder "dwec-shared" into
# ~/Documents/dwec-shared-mirror with the OneDrive client, (2) rsync it into
# this folder's dwec-shared-onedrive/. Credentials live outside this repo, in
# ~/.config/onedrive-dwec (never copy them under ~/Studies). See README-dwec-sync.md.
set -euo pipefail
CONFDIR="$HOME/.config/onedrive-dwec"
MIRROR="$HOME/Documents/dwec-shared-mirror"
REMOTE_DIR="MARCELO LLACER, DANIEL's files - dwec-shared"
DEST="$(cd "$(dirname "$(readlink -f "$0")")" && pwd)/dwec-shared-onedrive"

# Download only this one folder; never upload or delete anything online.
onedrive --confdir "$CONFDIR" --sync --download-only --single-directory "$REMOTE_DIR" "$@"

# Skip the copy on --dry-run.
for a in "$@"; do [ "$a" = "--dry-run" ] && exit 0; done

[ -L "$DEST" ] && rm "$DEST"
mkdir -p "$DEST"
rsync -a --delete "$MIRROR/$REMOTE_DIR/" "$DEST/"
