#!/usr/bin/env bash
# Pull the teacher's shared OneDrive folder "dwec-shared" using the local
# OneDrive client (onedrive-abraunegg). Setup notes are in README-dwec-sync.md.
set -euo pipefail
# Name of the shortcut in your OneDrive "My files" (OneDrive prefixed the owner).
REMOTE_DIR="MARCELO LLACER, DANIEL's files - dwec-shared"
SYNC_DIR="$HOME/OneDrive"       # the client's sync_dir (its default)
LINK="$HOME/Studies/DWEC_Desarrollo_Web_en_Entorno_Cliente/dwec-shared"

# Download only this one folder; never upload or delete anything online.
onedrive --sync --download-only --single-directory "$REMOTE_DIR" "$@"

# Make the folder show up inside ~/Studies as a symlink.
if [ ! -L "$LINK" ]; then
  [ -d "$LINK" ] && rmdir "$LINK"   # only succeeds if it is still empty
  ln -s "$SYNC_DIR/$REMOTE_DIR" "$LINK"
fi
