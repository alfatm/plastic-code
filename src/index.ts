import { mkdir, writeFile } from 'node:fs/promises'

import { nvimColorscheme } from './nvim.ts'
import { vscodeTheme } from './vscode.ts'
import { zedThemeFamily } from './zed.ts'

const variants = [
  {
    name: 'Plastic Code',
    slug: 'plastic-code',
    deprioritised: false,
  },
  {
    name: 'Plastic Code - deprioritised punctuation',
    slug: 'plastic-code-deprioritised',
    deprioritised: true,
  },
]

function toJson(value: unknown): string {
  return `${JSON.stringify(value, undefined, 2)}\n`
}

await Promise.all(
  ['themes', 'zed/themes', 'colors'].map((dir) =>
    mkdir(dir, { recursive: true }),
  ),
)

await Promise.all([
  ...variants.flatMap(({ name, slug, deprioritised }) => [
    writeFile(`themes/${slug}.json`, toJson(vscodeTheme(name, deprioritised))),
    writeFile(`colors/${slug}.lua`, nvimColorscheme(slug, deprioritised)),
  ]),
  writeFile('zed/themes/plastic-code.json', toJson(zedThemeFamily(variants))),
])
