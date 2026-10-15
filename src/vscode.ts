import { brighten, setAlpha } from './color.ts'
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
  white,
  woodsmoke,
} = palette

const cadetBlue10 = setAlpha(cadetBlue, 0.1)
const cadetBlue20 = setAlpha(cadetBlue, 0.2)

const colors = {
  'activityBar.activeBorder': dodgerBlue,
  'activityBar.background': shark,
  'activityBar.border': bunker,
  'activityBar.foreground': ghost,
  'activityBar.inactiveForeground': shuttleGray,

  'activityBarBadge.background': sunglo,
  'activityBarBadge.foreground': white,

  'badge.background': custom.accentDark,

  'breadcrumb.focusForeground': ghost,
  'breadcrumb.foreground': shuttleGray,

  'button.background': custom.accentDark,
  'button.foreground': white,
  'button.hoverBackground': custom.accent,
  'button.secondaryBackground': bunker,
  'button.secondaryForeground': white,

  'checkbox.background': cornflowerBlue,
  'checkbox.foreground': white,

  contrastBorder: bunker,

  'debugToolBar.background': woodsmoke,

  'diffEditor.border': bunker,
  'diffEditor.diagonalFill': bunker,
  'diffEditor.insertedLineBackground': setAlpha(brighten(olivine, 20), 0.05),
  'diffEditor.insertedTextBackground': setAlpha(brighten(olivine, 20), 0.1),
  'diffEditor.removedLineBackground': setAlpha(brighten(sunglo, 20), 0.05),
  'diffEditor.removedTextBackground': setAlpha(brighten(sunglo, 20), 0.1),

  'dropdown.background': woodsmoke,
  'dropdown.border': bunker,

  'editor.background': shark,
  'editor.findMatchBackground': transparent,
  'editor.findMatchBorder': dodgerBlue,
  'editor.findMatchHighlightBackground': transparent,
  'editor.findMatchHighlightBorder': ghost,
  'editor.foreground': cadetBlue,
  'editor.lineHighlightBackground': cadetBlue10,
  'editor.lineHighlightBorder': transparent,
  'editor.linkedEditingBackground': bunker,
  'editor.rangeHighlightBorder': ghost,
  'editor.selectionBackground': cadetBlue20,
  'editor.selectionHighlightBackground': cadetBlue10,
  'editor.selectionHighlightBorder': ghost,
  'editor.wordHighlightBackground': transparent,
  'editor.wordHighlightBorder': dodgerBlue,
  'editor.wordHighlightStrongBackground': transparent,
  'editor.wordHighlightStrongBorder': dodgerBlue,

  'editorBracketHighlight.foreground1': cadetBlue,
  'editorBracketHighlight.foreground2': cornflowerBlue,
  'editorBracketHighlight.foreground3': harvestGold,
  'editorBracketHighlight.foreground4': sunglo,
  'editorBracketHighlight.foreground5': olivine,
  'editorBracketHighlight.foreground6': lavender,
  'editorBracketHighlight.unexpectedBracket.foreground': valencia,

  'editorBracketMatch.background': transparent,
  'editorBracketMatch.border': dodgerBlue,

  'editorCursor.foreground': cadetBlue,

  'editorError.foreground': valencia,

  'editorGroup.border': bunker,
  'editorGroup.emptyBackground': woodsmoke,

  'editorGroupHeader.tabsBackground': woodsmoke,

  'editorGutter.addedBackground': olivine,
  'editorGutter.deletedBackground': sunglo,
  'editorGutter.modifiedBackground': whiskey,

  'editorHoverWidget.background': woodsmoke,
  'editorHoverWidget.border': dodgerBlue,

  'editorIndentGuide.activeBackground': cadetBlue20,
  'editorIndentGuide.background': bunker,

  'editorInfo.foreground': dodgerBlue,

  'editorInlayHint.background': transparent,
  'editorInlayHint.foreground': shuttleGray,

  'editorLightBulb.foreground': robRoy,

  'editorLightBulbAutoFix.foreground': dodgerBlue,

  'editorLineNumber.activeForeground': ghost,
  'editorLineNumber.foreground': shuttleGray,

  'editorOverviewRuler.addedForeground': olivine,
  'editorOverviewRuler.border': bunker,
  'editorOverviewRuler.deletedForeground': sunglo,
  'editorOverviewRuler.errorForeground': valencia,
  'editorOverviewRuler.findMatchForeground': dodgerBlue,
  'editorOverviewRuler.infoForeground': dodgerBlue,
  'editorOverviewRuler.modifiedForeground': whiskey,
  'editorOverviewRuler.warningForeground': robRoy,

  'editorRuler.foreground': bunker,

  'editorStickyScroll.background': woodsmoke,
  'editorStickyScrollHover.background': shark,

  'editorSuggestWidget.background': woodsmoke,
  'editorSuggestWidget.border': dodgerBlue,
  'editorSuggestWidget.selectedBackground': cadetBlue10,

  'editorWarning.foreground': robRoy,

  'editorWhitespace.foreground': cadetBlue10,

  'editorWidget.background': woodsmoke,

  errorForeground: valencia,

  focusBorder: custom.accent,

  'gitDecoration.deletedResourceForeground': sunglo,
  'gitDecoration.ignoredResourceForeground': shuttleGray,
  'gitDecoration.modifiedResourceForeground': whiskey,
  'gitDecoration.untrackedResourceForeground': olivine,

  'input.background': bunker,

  'inputOption.activeBorder': dodgerBlue,

  'inputValidation.errorBackground': valencia,
  'inputValidation.errorBorder': valencia,
  'inputValidation.infoBackground': dodgerBlue,
  'inputValidation.infoBorder': dodgerBlue,
  'inputValidation.infoForeground': bunker,
  'inputValidation.warningBackground': robRoy,
  'inputValidation.warningBorder': robRoy,
  'inputValidation.warningForeground': bunker,

  'list.activeSelectionBackground': cadetBlue20,
  'list.activeSelectionForeground': white,
  'list.errorForeground': valencia,
  'list.focusBackground': cadetBlue20,
  'list.hoverBackground': cadetBlue10,
  'list.inactiveFocusOutline': shuttleGray,
  'list.inactiveSelectionBackground': cadetBlue20,
  'list.inactiveSelectionForeground': ghost,
  'list.warningForeground': robRoy,

  'minimap.findMatchHighlight': dodgerBlue,
  'minimap.selectionHighlight': ghost,

  'minimapGutter.addedBackground': olivine,
  'minimapGutter.deletedBackground': sunglo,
  'minimapGutter.modifiedBackground': whiskey,

  'notificationCenter.border': bunker,

  'notificationCenterHeader.background': woodsmoke,

  'notifications.background': woodsmoke,
  'notifications.border': bunker,

  'notificationToast.border': bunker,

  'panel.background': woodsmoke,
  'panel.border': bunker,

  'panelTitle.inactiveForeground': shuttleGray,

  'peekView.border': dodgerBlue,

  'peekViewEditor.background': woodsmoke,
  'peekViewEditor.matchHighlightBackground': cadetBlue20,

  'peekViewResult.background': woodsmoke,
  'peekViewResult.matchHighlightBackground': cadetBlue20,
  'peekViewResult.selectionBackground': cadetBlue10,
  'peekViewResult.selectionForeground': ghost,

  'peekViewTitle.background': woodsmoke,

  'progressBar.background': custom.accent,

  'sash.hoverBorder': cadetBlue20,

  'scrollbar.shadow': transparent,

  'scrollbarSlider.activeBackground': cadetBlue20,
  'scrollbarSlider.background': cadetBlue10,
  'scrollbarSlider.hoverBackground': cadetBlue20,

  'sideBar.background': woodsmoke,
  'sideBar.border': bunker,
  'sideBar.foreground': ghost,

  'sideBarSectionHeader.background': shark,

  'statusBar.background': shark,
  'statusBar.border': bunker,
  'statusBar.debuggingBackground': custom.accent,
  'statusBar.debuggingBorder': fountainBlue,
  'statusBar.debuggingForeground': cadetBlue,
  'statusBar.focusBorder': cadetBlue,
  'statusBar.foreground': cadetBlue,
  'statusBar.noFolderBackground': woodsmoke,

  'statusBarItem.activeBackground': bunker,
  'statusBarItem.errorBackground': shark,
  'statusBarItem.errorForeground': valencia,
  'statusBarItem.focusBorder': cadetBlue,
  'statusBarItem.hoverBackground': woodsmoke,
  'statusBarItem.hoverForeground': cadetBlue,
  'statusBarItem.remoteBackground': shark,
  'statusBarItem.remoteForeground': lavender,
  'statusBarItem.warningBackground': shark,
  'statusBarItem.warningForeground': robRoy,

  'tab.activeBackground': shark,
  'tab.activeBorderTop': dodgerBlue,
  'tab.activeForeground': ghost,
  'tab.border': bunker,
  'tab.inactiveBackground': woodsmoke,
  'tab.inactiveForeground': shuttleGray,
  'tab.lastPinnedBorder': cadetBlue20,

  'terminal.ansiBlack': shuttleGray,
  'terminal.ansiBlue': cornflowerBlue,
  'terminal.ansiBrightBlack': shuttleGray,
  'terminal.ansiBrightBlue': cornflowerBlue,
  'terminal.ansiBrightCyan': fountainBlue,
  'terminal.ansiBrightGreen': olivine,
  'terminal.ansiBrightMagenta': lavender,
  'terminal.ansiBrightRed': sunglo,
  'terminal.ansiBrightWhite': cadetBlue,
  'terminal.ansiBrightYellow': harvestGold,
  'terminal.ansiCyan': fountainBlue,
  'terminal.ansiGreen': olivine,
  'terminal.ansiMagenta': lavender,
  'terminal.ansiRed': sunglo,
  'terminal.ansiWhite': cadetBlue,
  'terminal.ansiYellow': harvestGold,
  'terminal.foreground': cadetBlue,

  'titleBar.activeBackground': shark,
  'titleBar.activeForeground': ghost,
  'titleBar.border': bunker,
  'titleBar.inactiveBackground': shark,
  'titleBar.inactiveForeground': shuttleGray,

  'toolbar.hoverBackground': cadetBlue20,

  'widget.shadow': transparent,
}

const scopeColors: [string[], string][] = [
  // comments
  [
    [
      'comment',
      // start and end of comment blocks
      'punctuation.definition.comment',
      // Diff files
      'source.diff',
    ],
    shuttleGray,
  ],

  // functions
  [
    [
      'entity.name.function',
      'support.function',
      // Diff files
      'meta.diff.range',
      'punctuation.definition.range.diff',
    ],
    lavender,
  ],

  // import, export, return etc.
  [
    [
      'keyword',
      // css @ in @media queries
      'punctuation.definition.keyword',
      // this
      'variable.language',
      // Diff files
      'markup.deleted',
      'meta.diff.header.from-file',
      'punctuation.definition.deleted',
      'punctuation.definition.from-file.diff',
    ],
    sunglo,
  ],

  // primitives
  [['constant', 'support.constant'], fountainBlue],

  // const, var, class etc. and React JSX component tag
  [
    [
      'storage',
      // console and JSX custom components
      'support.class',
      // ReScript components
      'entity.name.namespace',
      // Diff files
      'meta.diff.header',
    ],
    cornflowerBlue,
  ],

  // anything in quotes
  [
    [
      // inline code in markdown
      'markup.inline.raw.string',
      'string',
      // Diff files
      'markup.inserted',
      'punctuation.definition.inserted',
      'meta.diff.header.to-file',
      'punctuation.definition.to-file.diff',
    ],
    olivine,
  ],

  // html tags and types
  [
    [
      'entity.name.section',
      'entity.name.tag',
      'entity.name.type',
      'support.type',
    ],
    harvestGold,
  ],

  // variables
  [
    [
      // css property names
      'support.type.property-name',
      'support.variable',
      'variable',
    ],
    ghost,
  ],

  // Other
  [
    [
      'entity.other',
      // css . and # for CSS classes and IDs
      'punctuation.definition.entity',
      'support.other',
    ],
    whiskey,
  ],
]

// Plastic Code overrides. Appended after the upstream rules so that, for selectors
// of equal specificity, they win — the same precedence VS Code gives to
// `editor.tokenColorCustomizations`. Scope lists mirror VS Code's expansion of the
// `comments`/`strings`/`keywords`/... shorthands (colorThemeData.ts tokenGroupToScopesMap).
const overrideScopeColors: [string[], string][] = [
  [['comment', 'punctuation.definition.comment'], custom.comment],
  [['string', 'meta.embedded.assembly'], custom.string],
  [
    [
      'keyword - keyword.operator',
      'keyword.control',
      'storage',
      'storage.type',
    ],
    custom.accent,
  ],
  [['constant.numeric'], custom.number],
  [
    ['entity.name.type', 'entity.name.class', 'support.type', 'support.class'],
    custom.foreground,
  ],
  [['entity.name.function', 'support.function'], custom.function],
  [['variable', 'entity.name.variable'], custom.foreground],
  [
    [
      'entity.name.function.macro.rust',
      'support.function.macro.rust',
      'meta.attribute.rust',
    ],
    custom.macro,
  ],
]

const fontStyles: [string[], string][] = [
  [
    [
      'markup.bold',
      'punctuation.definition.bold',
      // css ID
      'entity.other.attribute-name.id',
    ],
    'bold',
  ],
  [['comment', 'markup.italic', 'punctuation.definition.italic'], 'italic'],
]

const semanticTokenColors = {
  class: custom.foreground,
  comment: custom.comment,
  decorator: custom.macro,
  enum: custom.foreground,
  enumMember: custom.typeParameter,
  function: custom.function,
  interface: custom.foreground,
  macro: custom.macro,
  method: custom.function,
  number: custom.number,
  parameter: custom.foreground,
  property: custom.foreground,
  string: custom.string,
  struct: custom.foreground,
  type: custom.foreground,
  typeParameter: custom.typeParameter,
  variable: custom.foreground,
}

export function vscodeTheme(name: string, deprioritised: boolean) {
  const rules: [string[], string][] = [
    ...scopeColors,
    [['meta.brace', 'punctuation'], deprioritised ? shuttleGray : cadetBlue],
    ...overrideScopeColors,
    // The deprioritised variant keeps upstream's dimmed punctuation.
    [
      deprioritised
        ? ['keyword.operator']
        : ['keyword.operator', 'punctuation'],
      custom.foreground,
    ],
  ]

  return {
    $schema: 'vscode://schemas/color-theme',
    name,
    type: 'dark',
    semanticHighlighting: true,
    semanticTokenColors,
    colors,
    tokenColors: [
      ...rules.map(([scope, foreground]) => ({
        scope,
        settings: { foreground },
      })),
      ...fontStyles.map(([scope, fontStyle]) => ({
        name: fontStyle,
        scope,
        settings: { fontStyle },
      })),
    ],
  }
}
