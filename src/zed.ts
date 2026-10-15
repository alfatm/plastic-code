import { blend, brighten, setAlpha } from './color.ts'
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
  transparent,
  valencia,
  whiskey,
  woodsmoke,
} = palette

const cadetBlue10 = setAlpha(cadetBlue, 0.1)
const cadetBlue20 = setAlpha(cadetBlue, 0.2)

const STATUS_BACKGROUND_ALPHA = 0.1
const DIM_TERMINAL_ALPHA = 0.7
const BOLD = 700

function status(name: string, color: string) {
  return {
    [name]: color,
    [`${name}.background`]: setAlpha(color, STATUS_BACKGROUND_ALPHA),
    [`${name}.border`]: color,
  }
}

const ansi = {
  black: shuttleGray,
  blue: cornflowerBlue,
  cyan: fountainBlue,
  green: olivine,
  magenta: lavender,
  red: sunglo,
  white: cadetBlue,
  yellow: harvestGold,
}

const terminal = Object.fromEntries(
  Object.entries(ansi).flatMap(([name, color]) => [
    [`terminal.ansi.${name}`, color],
    [`terminal.ansi.bright_${name}`, color],
    [`terminal.ansi.dim_${name}`, blend(color, woodsmoke, DIM_TERMINAL_ALPHA)],
  ]),
)

// Zed refines user themes over its built-in default, so every key the default
// defines is set here explicitly; anything omitted would inherit One Dark colors.
const style = {
  'background.appearance': 'opaque',
  accents: [cadetBlue, cornflowerBlue, harvestGold, sunglo, olivine, lavender],

  border: bunker,
  'border.variant': bunker,
  'border.focused': custom.accent,
  'border.selected': custom.accent,
  'border.transparent': transparent,
  'border.disabled': bunker,

  background: woodsmoke,
  'surface.background': woodsmoke,
  'elevated_surface.background': woodsmoke,
  'drop_target.background': cadetBlue20,

  'element.background': bunker,
  'element.hover': cadetBlue10,
  'element.active': cadetBlue20,
  'element.selected': cadetBlue20,
  'element.disabled': bunker,

  'ghost_element.background': transparent,
  'ghost_element.hover': cadetBlue10,
  'ghost_element.active': cadetBlue20,
  'ghost_element.selected': cadetBlue20,
  'ghost_element.disabled': transparent,

  text: ghost,
  'text.muted': cadetBlue,
  'text.placeholder': shuttleGray,
  'text.disabled': shuttleGray,
  'text.accent': custom.accent,

  icon: ghost,
  'icon.muted': cadetBlue,
  'icon.disabled': shuttleGray,
  'icon.placeholder': shuttleGray,
  'icon.accent': custom.accent,

  'status_bar.background': shark,
  'title_bar.background': shark,
  'title_bar.inactive_background': shark,
  'toolbar.background': shark,
  'tab_bar.background': woodsmoke,
  'tab.inactive_background': woodsmoke,
  'tab.active_background': shark,

  'search.match_background': setAlpha(dodgerBlue, 0.25),
  'search.active_match_background': setAlpha(dodgerBlue, 0.45),

  'panel.background': woodsmoke,
  'panel.focused_border': custom.accent,
  'panel.indent_guide': bunker,
  'panel.indent_guide_active': cadetBlue20,
  'panel.indent_guide_hover': cadetBlue20,
  'pane.focused_border': custom.accent,
  'pane_group.border': bunker,

  'scrollbar.thumb.background': cadetBlue10,
  'scrollbar.thumb.hover_background': cadetBlue20,
  'scrollbar.thumb.border': transparent,
  'scrollbar.track.background': transparent,
  'scrollbar.track.border': bunker,

  'editor.foreground': cadetBlue,
  'editor.background': shark,
  'editor.gutter.background': shark,
  'editor.subheader.background': woodsmoke,
  'editor.active_line.background': cadetBlue10,
  'editor.highlighted_line.background': cadetBlue10,
  'editor.line_number': shuttleGray,
  'editor.active_line_number': ghost,
  'editor.hover_line_number': cadetBlue,
  'editor.invisible': cadetBlue20,
  'editor.wrap_guide': bunker,
  'editor.active_wrap_guide': cadetBlue20,
  'editor.indent_guide': bunker,
  'editor.indent_guide_active': cadetBlue20,
  'editor.document_highlight.read_background': setAlpha(dodgerBlue, 0.15),
  'editor.document_highlight.write_background': setAlpha(dodgerBlue, 0.25),
  'editor.document_highlight.bracket_background': setAlpha(dodgerBlue, 0.25),

  'terminal.background': woodsmoke,
  'terminal.ansi.background': woodsmoke,
  'terminal.foreground': cadetBlue,
  'terminal.bright_foreground': ghost,
  'terminal.dim_foreground': shuttleGray,
  ...terminal,

  'link_text.hover': dodgerBlue,

  'version_control.added': olivine,
  'version_control.modified': whiskey,
  'version_control.deleted': sunglo,
  'version_control.word_added': setAlpha(brighten(olivine, 20), 0.1),
  'version_control.word_deleted': setAlpha(brighten(sunglo, 20), 0.1),
  'version_control.conflict_marker.ours': setAlpha(olivine, 0.1),
  'version_control.conflict_marker.theirs': setAlpha(cornflowerBlue, 0.1),

  ...status('conflict', robRoy),
  ...status('created', olivine),
  ...status('deleted', sunglo),
  ...status('error', valencia),
  ...status('hidden', shuttleGray),
  ...status('hint', shuttleGray),
  ...status('ignored', shuttleGray),
  ...status('info', dodgerBlue),
  ...status('modified', whiskey),
  ...status('predictive', shuttleGray),
  ...status('renamed', cornflowerBlue),
  ...status('success', olivine),
  ...status('unreachable', shuttleGray),
  ...status('warning', robRoy),

  players: [
    cadetBlue,
    cornflowerBlue,
    olivine,
    lavender,
    harvestGold,
    fountainBlue,
    sunglo,
    whiskey,
  ].map((color) => ({
    cursor: color,
    background: color,
    selection: setAlpha(color, 0.2),
  })),
}

function syntax(deprioritised: boolean) {
  const punctuation = { color: deprioritised ? shuttleGray : custom.foreground }

  return {
    attribute: { color: custom.macro },
    'attribute.jsx': { color: whiskey },
    boolean: { color: fountainBlue },
    comment: { color: custom.comment, font_style: 'italic' },
    'comment.doc': { color: custom.comment, font_style: 'italic' },
    constant: { color: fountainBlue },
    constructor: { color: custom.foreground },
    embedded: { color: cadetBlue },
    emphasis: { color: cadetBlue, font_style: 'italic' },
    'emphasis.strong': { color: cadetBlue, font_weight: BOLD },
    enum: { color: custom.foreground },
    function: { color: custom.function },
    'function.decorator': { color: custom.macro },
    'function.macro': { color: custom.macro },
    'function.special': { color: custom.macro },
    hint: { color: shuttleGray },
    keyword: { color: custom.accent },
    label: { color: custom.accent },
    lifetime: { color: custom.accent },
    link_text: { color: custom.string },
    link_uri: { color: cadetBlue },
    namespace: { color: cornflowerBlue },
    number: { color: custom.number },
    operator: { color: custom.foreground },
    predictive: { color: shuttleGray, font_style: 'italic' },
    preproc: { color: custom.accent },
    primary: { color: cadetBlue },
    property: { color: custom.foreground },
    punctuation,
    'punctuation.bracket': punctuation,
    'punctuation.delimiter': punctuation,
    'punctuation.list_marker': punctuation,
    'punctuation.markup': punctuation,
    'punctuation.special': punctuation,
    selector: { color: whiskey },
    'selector.pseudo': { color: whiskey },
    string: { color: custom.string },
    'string.escape': { color: fountainBlue },
    'string.regex': { color: custom.string },
    'string.special': { color: custom.string },
    'string.special.symbol': { color: fountainBlue },
    tag: { color: harvestGold },
    'tag.component.jsx': { color: custom.foreground },
    'text.literal': { color: custom.string },
    title: { color: harvestGold },
    type: { color: custom.foreground },
    'type.enum.member': { color: custom.typeParameter },
    'type.parameter': { color: custom.typeParameter },
    variable: { color: custom.foreground },
    'variable.parameter': { color: custom.foreground },
    'variable.special': { color: sunglo },
    variant: { color: custom.typeParameter },
    'diff.plus': { color: olivine },
    'diff.minus': { color: sunglo },
  }
}

export function zedThemeFamily(
  variants: { name: string; deprioritised: boolean }[],
) {
  return {
    $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
    name: 'Plastic Code',
    author: 'alfatm',
    themes: variants.map(({ name, deprioritised }) => ({
      name,
      appearance: 'dark',
      style: { ...style, syntax: syntax(deprioritised) },
    })),
  }
}
