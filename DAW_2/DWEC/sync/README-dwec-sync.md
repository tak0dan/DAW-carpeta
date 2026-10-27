# Syncing the `dwec-shared` OneDrive folder into ~/Studies

The folder lives on the teacher's gvaedu OneDrive and is shared with the
`niktro2@alu.edu.gva.es` account:

```
https://gvaedu-my.sharepoint.com/personal/d_marcelo_edu_gva_es/Documents/dwec-shared
```

It is pulled with the local OneDrive client (`onedrive-abraunegg`), which is
already installed and authorised.

## One-time setup

1. Open the link above in the browser, signed in to the gvaedu account, and
   press **Add shortcut to My files**. Without the shortcut the client cannot
   see a folder that belongs to someone else.
2. `~/.config/onedrive/config` contains `sync_business_shared_items = "true"`
   (already done).

## Everyday use

```bash
~/Studies/DAW_2/DWEC/sync/sync-dwec-shared.sh
```

- Downloads only the shortcut (named `MARCELO LLACER, DANIEL's files - dwec-shared`
  in "My files") into `~/OneDrive/` and links it here as `dwec-shared-onedrive/`.
- It is download-only: nothing is uploaded or deleted online.
- Add `--dry-run` to see what it would do without changing anything.
- If the shortcut has a different name in "My files", change `REMOTE_DIR` in
  the script.

Do not run a bare `onedrive --sync` unless you want your whole OneDrive
mirrored in both directions into `~/OneDrive`.
