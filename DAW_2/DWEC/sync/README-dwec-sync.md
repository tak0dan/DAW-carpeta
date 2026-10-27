# Syncing the `dwec-shared` OneDrive folder into ~/Studies

The folder lives on the teacher's gvaedu OneDrive and is shared with the
student account (added as a shortcut in "My files"):

```
https://gvaedu-my.sharepoint.com/personal/d_marcelo_edu_gva_es/Documents/dwec-shared
```

## How it works

1. The OneDrive client (`onedrive`, abraunegg) pulls the shortcut into
   `~/Documents/dwec-shared-mirror/` (download-only, nothing is uploaded or
   deleted online).
2. `rsync` copies that mirror into `dwec-shared-onedrive/` next to this file.
3. A user systemd timer (`dwec-shared-sync.timer`) repeats this every 5 hours.

**Credentials are never stored in this repo.** The client's config and token
live in `~/.config/onedrive-dwec/` (outside `~/Studies`).

## Everyday use

```bash
./dwec sync       # pull now
./dwec dry-run    # preview only
./dwec status     # timer state, last run, file count
./dwec logs       # logs of timer runs
```

## Setup on a new machine

1. In the browser, open the link above and press **Add shortcut to My files**.
2. Run `onedrive --confdir ~/.config/onedrive-dwec` once to log in, with
   `sync_dir = "~/Documents/dwec-shared-mirror"` and
   `sync_business_shared_items = "true"` in `~/.config/onedrive-dwec/config`.
3. Install the timer units from `~/.config/systemd/user/` and run `./dwec enable`.

Do not run a bare `onedrive --sync`: it mirrors the whole OneDrive.
