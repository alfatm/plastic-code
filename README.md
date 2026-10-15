# Plastic Code

A fork of [Plastic](https://github.com/will-stone/plastic) by Will Stone with warmer syntax colors, for VS Code, Zed and Neovim. All three are generated from one source in [src/](src/).

Two variants:

- **Plastic Code**
- **Plastic Code - deprioritised punctuation**: punctuation is dimmed to `#5F6672`.

## Changes from Plastic

| Role | Color |
|---|---|
| Keywords, storage (`const`, `fn`, `class`) | `#EA7D5F` |
| Strings | `#9CD68D` |
| Numbers | `#DDC36A` |
| Functions, methods | `#8CB6E3` |
| Types, variables, parameters, properties, operators, punctuation | `#E0DDD8` |
| Macros, decorators, Rust attributes | `#CA86DE` |
| Type parameters, enum members (semantic tokens) | `#E0B882` |
| Comments | `#97907F` |
| Focus border, progress bar, debugging status bar | `#EA7D5F` |
| Buttons, badges | `#B86449` |

The UI palette and the remaining syntax colors are the same as in Plastic.

## Install

### VS Code

Install from the Marketplace or Open VSX, or build locally:

```sh
pnpm install
pnpm package
code --install-extension plastic-code-*.vsix
```

If you previously reproduced these colors with `editor.tokenColorCustomizations` / `editor.semanticTokenColorCustomizations` / `workbench.colorCustomizations` under `[Plastic]`, remove those blocks.

### Zed

Install **Plastic Code** from the extensions panel, or locally: `zed: install dev extension` → select the [zed/](zed/) directory. Then select the theme with `theme selector: toggle`.

LSP semantic tokens are off by default in Zed. To get type-parameter and enum-member colors, enable them:

```json
{ "semantic_tokens": "combined" }
```

### Neovim (≥ 0.11)

With lazy.nvim:

```lua
{
  'alfatm/plastic-code',
  lazy = false,
  priority = 1000,
  config = function()
    vim.cmd.colorscheme('plastic-code') -- or 'plastic-code-deprioritised'
  end,
}
```

## Development

Requires Node 24+ and pnpm (via corepack).

```sh
pnpm install
pnpm generate   # writes themes/, zed/themes/, colors/
pnpm check      # typecheck, lint, validate Zed theme against its JSON schema
```

Generated files are committed: VS Code, Zed and Neovim all read them straight from the repository.

## Release

1. Bump `version` in [package.json](package.json) and [zed/extension.toml](zed/extension.toml).
2. `pnpm generate && pnpm check`.
3. VS Code Marketplace: `pnpm publish:vscode` (needs `VSCE_PAT`).
4. Open VSX: `pnpm publish:ovsx` (needs `OVSX_PAT`).
5. Zed: open a PR to [zed-industries/extensions](https://github.com/zed-industries/extensions) adding this repository as a submodule with `path = "zed"`.

## License

MIT. Based on [Plastic](https://github.com/will-stone/plastic), © Will Stone.
