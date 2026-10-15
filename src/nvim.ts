import { blend, brighten } from './color.ts'
import { custom, palette } from './palette.ts'

const {
  bunker,
  cadetBlue,
  cornflowerBlue,
  dodgerBlue,
  fountainBlue,
  ghost,
  harvestGold,
  lavender,
  olivine,
  robRoy,
  shark,
  shuttleGray,
  sunglo,
  valencia,
  whiskey,
  white,
  woodsmoke,
} = palette

// Neovim has no alpha channel: translucent VS Code colors are pre-blended over
// the background they are drawn on.
const cadetBlue10 = blend(cadetBlue, shark, 0.1)
const cadetBlue20 = blend(cadetBlue, shark, 0.2)

type Highlight = {
  fg?: string
  bg?: string
  sp?: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  undercurl?: boolean
  link?: string
}

function highlights(deprioritised: boolean): Record<string, Highlight> {
  const punctuation = deprioritised ? shuttleGray : custom.foreground

  return {
    // UI
    Normal: { fg: cadetBlue, bg: shark },
    NormalNC: { link: 'Normal' },
    NormalFloat: { fg: cadetBlue, bg: woodsmoke },
    FloatBorder: { fg: custom.accent, bg: woodsmoke },
    FloatTitle: { fg: ghost, bg: woodsmoke, bold: true },
    Cursor: { fg: shark, bg: cadetBlue },
    CursorLine: { bg: cadetBlue10 },
    CursorColumn: { bg: cadetBlue10 },
    ColorColumn: { bg: bunker },
    LineNr: { fg: shuttleGray },
    CursorLineNr: { fg: ghost },
    SignColumn: { bg: shark },
    FoldColumn: { fg: shuttleGray, bg: shark },
    Folded: { fg: shuttleGray, bg: woodsmoke },
    Visual: { bg: cadetBlue20 },
    Search: { bg: blend(dodgerBlue, shark, 0.3) },
    IncSearch: { fg: bunker, bg: custom.accent },
    CurSearch: { link: 'IncSearch' },
    Substitute: { link: 'IncSearch' },
    MatchParen: { bg: blend(dodgerBlue, shark, 0.3), bold: true },
    NonText: { fg: cadetBlue20 },
    Whitespace: { fg: cadetBlue20 },
    EndOfBuffer: { fg: shark },
    Conceal: { fg: shuttleGray },
    WinSeparator: { fg: bunker },
    StatusLine: { fg: cadetBlue, bg: woodsmoke },
    StatusLineNC: { fg: shuttleGray, bg: woodsmoke },
    TabLine: { fg: shuttleGray, bg: woodsmoke },
    TabLineFill: { bg: woodsmoke },
    TabLineSel: { fg: ghost, bg: shark },
    WinBar: { fg: ghost, bg: shark },
    WinBarNC: { fg: shuttleGray, bg: shark },
    Pmenu: { fg: cadetBlue, bg: woodsmoke },
    PmenuSel: { fg: white, bg: custom.accentDark },
    PmenuSbar: { bg: woodsmoke },
    PmenuThumb: { bg: blend(cadetBlue, woodsmoke, 0.2) },
    WildMenu: { link: 'PmenuSel' },
    QuickFixLine: { bg: cadetBlue20 },
    Directory: { fg: cornflowerBlue },
    Title: { fg: harvestGold, bold: true },
    ModeMsg: { fg: ghost },
    MoreMsg: { fg: olivine },
    Question: { fg: olivine },
    ErrorMsg: { fg: valencia },
    WarningMsg: { fg: robRoy },
    SpellBad: { sp: valencia, undercurl: true },
    SpellCap: { sp: robRoy, undercurl: true },
    SpellLocal: { sp: fountainBlue, undercurl: true },
    SpellRare: { sp: lavender, undercurl: true },

    // Diff and VCS
    Added: { fg: olivine },
    Changed: { fg: whiskey },
    Removed: { fg: sunglo },
    DiffAdd: { bg: blend(brighten(olivine, 20), shark, 0.1) },
    DiffChange: { bg: blend(brighten(whiskey, 20), shark, 0.1) },
    DiffDelete: { bg: blend(brighten(sunglo, 20), shark, 0.1) },
    DiffText: { bg: blend(brighten(whiskey, 20), shark, 0.2) },

    // Diagnostics
    DiagnosticError: { fg: valencia },
    DiagnosticWarn: { fg: robRoy },
    DiagnosticInfo: { fg: dodgerBlue },
    DiagnosticHint: { fg: shuttleGray },
    DiagnosticOk: { fg: olivine },
    DiagnosticUnderlineError: { sp: valencia, undercurl: true },
    DiagnosticUnderlineWarn: { sp: robRoy, undercurl: true },
    DiagnosticUnderlineInfo: { sp: dodgerBlue, undercurl: true },
    DiagnosticUnderlineHint: { sp: shuttleGray, undercurl: true },
    LspInlayHint: { fg: shuttleGray },
    LspReferenceText: { bg: blend(dodgerBlue, shark, 0.15) },
    LspReferenceRead: { bg: blend(dodgerBlue, shark, 0.15) },
    LspReferenceWrite: { bg: blend(dodgerBlue, shark, 0.25) },

    // Legacy syntax groups; tree-sitter captures link to these by default.
    Comment: { fg: custom.comment, italic: true },
    Constant: { fg: fountainBlue },
    String: { fg: custom.string },
    Character: { fg: custom.string },
    Number: { fg: custom.number },
    Float: { fg: custom.number },
    Boolean: { fg: fountainBlue },
    Identifier: { fg: custom.foreground },
    Function: { fg: custom.function },
    Statement: { fg: custom.accent },
    Keyword: { fg: custom.accent },
    Operator: { fg: custom.foreground },
    PreProc: { fg: custom.accent },
    Macro: { fg: custom.macro },
    Type: { fg: custom.foreground },
    StorageClass: { fg: custom.accent },
    Structure: { fg: custom.accent },
    Special: { fg: fountainBlue },
    Tag: { fg: harvestGold },
    Delimiter: { fg: punctuation },
    Underlined: { underline: true },
    Error: { fg: valencia },
    Todo: { fg: harvestGold, bold: true },

    // Tree-sitter
    '@variable': { fg: custom.foreground },
    '@variable.builtin': { fg: sunglo },
    '@variable.parameter': { fg: custom.foreground },
    '@variable.member': { fg: custom.foreground },
    '@constant': { fg: fountainBlue },
    '@constant.builtin': { fg: fountainBlue },
    '@constant.macro': { fg: custom.macro },
    '@module': { fg: cornflowerBlue },
    '@label': { fg: custom.accent },
    '@string': { fg: custom.string },
    '@string.escape': { fg: fountainBlue },
    '@string.regexp': { fg: custom.string },
    '@string.special.symbol': { fg: fountainBlue },
    '@character': { fg: custom.string },
    '@number': { fg: custom.number },
    '@boolean': { fg: fountainBlue },
    '@type': { fg: custom.foreground },
    '@type.builtin': { fg: custom.foreground },
    '@attribute': { fg: custom.macro },
    '@property': { fg: custom.foreground },
    '@function': { fg: custom.function },
    '@function.builtin': { fg: custom.function },
    '@function.macro': { fg: custom.macro },
    '@constructor': { fg: custom.foreground },
    '@operator': { fg: custom.foreground },
    '@keyword': { fg: custom.accent },
    '@keyword.operator': { fg: custom.foreground },
    '@punctuation': { fg: punctuation },
    '@punctuation.delimiter': { fg: punctuation },
    '@punctuation.bracket': { fg: punctuation },
    '@punctuation.special': { fg: punctuation },
    '@comment': { link: 'Comment' },
    '@markup.strong': { bold: true },
    '@markup.italic': { italic: true },
    '@markup.heading': { fg: harvestGold },
    '@markup.raw': { fg: custom.string },
    '@markup.link.label': { fg: custom.string },
    '@markup.link.url': { fg: cadetBlue, underline: true },
    '@markup.list': { fg: punctuation },
    '@diff.plus': { fg: olivine },
    '@diff.minus': { fg: sunglo },
    '@diff.delta': { fg: whiskey },
    '@tag': { fg: harvestGold },
    '@tag.attribute': { fg: whiskey },
    '@tag.delimiter': { fg: punctuation },

    // LSP semantic tokens that differ from their tree-sitter defaults.
    '@lsp.type.decorator': { fg: custom.macro },
    '@lsp.type.enumMember': { fg: custom.typeParameter },
    '@lsp.type.lifetime': { fg: custom.accent },
    '@lsp.type.macro': { fg: custom.macro },
    '@lsp.type.typeParameter': { fg: custom.typeParameter },
  }
}

const terminalColors = [
  shuttleGray,
  sunglo,
  olivine,
  harvestGold,
  cornflowerBlue,
  lavender,
  fountainBlue,
  cadetBlue,
]

function luaValue(value: string | boolean): string {
  return typeof value === 'string' ? `"${value}"` : String(value)
}

export function nvimColorscheme(name: string, deprioritised: boolean): string {
  const lines = [
    '-- Generated by plastic-code (src/nvim.ts). Do not edit.',
    'vim.cmd("highlight clear")',
    'vim.o.background = "dark"',
    `vim.g.colors_name = "${name}"`,
    '',
    'local hl = vim.api.nvim_set_hl',
    ...Object.entries(highlights(deprioritised)).map(([group, spec]) => {
      const fields = Object.entries(spec)
        .map(([key, value]) => `${key} = ${luaValue(value)}`)
        .join(', ')
      return `hl(0, "${group}", { ${fields} })`
    }),
    '',
    ...[...terminalColors, ...terminalColors].map(
      (color, index) => `vim.g.terminal_color_${index} = "${color}"`,
    ),
    '',
  ]
  return lines.join('\n')
}
