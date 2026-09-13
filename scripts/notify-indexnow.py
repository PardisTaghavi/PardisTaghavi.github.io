#!/usr/bin/env python3
"""Notify IndexNow only when published homepage content or the resume changes."""
import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.request import Request, urlopen

root = Path(__file__).resolve().parents[1]
changed = subprocess.check_output(
    ["git", "diff-tree", "--no-commit-id", "--name-only", "-r", "HEAD"],
    cwd=root, text=True,
).splitlines()
urls = []
if any(p == "index.html" or p.startswith(("assets/", "images/")) for p in changed):
    urls.append("https://pardistaghavi.github.io/")
if "resume.pdf" in changed:
    urls.append("https://pardistaghavi.github.io/resume.pdf")
if not urls:
    print("No indexed page content changed. No notification needed.")
    sys.exit(0)
key = (root / "pardis2026homepagekey.txt").read_text().strip()
assert re.fullmatch(r"[A-Za-z0-9-]{8,128}", key), "Invalid IndexNow ownership key"
payload = {
    "host": "pardistaghavi.github.io", "key": key,
    "keyLocation": "https://pardistaghavi.github.io/pardis2026homepagekey.txt",
    "urlList": urls,
}
if "--dry-run" in sys.argv:
    print("Would submit:", *urls)
    sys.exit(0)
request = Request("https://api.indexnow.org/indexnow", data=json.dumps(payload).encode(),
                  headers={"Content-Type": "application/json; charset=utf-8"}, method="POST")
with urlopen(request, timeout=30) as response:
    assert response.status in (200, 202), response.status
    print(f"IndexNow accepted {len(urls)} URL(s). HTTP {response.status}")
