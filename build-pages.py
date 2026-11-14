"""Build index.html for GitHub Pages from pulp-lab.html.

pulp-lab.html is written for the Claude artifact viewer, which wraps it in a full
document. GitHub Pages serves files as they are, so this adds the doctype, charset,
viewport and a "don't index" tag. Run it after editing pulp-lab.html:

    python3 build-pages.py
"""
from pathlib import Path

here = Path(__file__).parent
body = (here / 'pulp-lab.html').read_text(encoding='utf-8')
head = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
        '<meta name="robots" content="noindex,nofollow">'
        '<style>:root{padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}'
        'body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style></head><body>\n')
(here / 'index.html').write_text(head + body + '\n</body></html>\n', encoding='utf-8')
print('wrote index.html')
