// Upstream palette from plastic-palette@1.0.5 (https://github.com/will-stone/plastic), MIT.
export const palette = {
  bunker: '#0D1117',
  cadetBlue: '#A9B2C3',
  cornflowerBlue: '#61AFEF',
  dodgerBlue: '#1085FF',
  fountainBlue: '#56B6C2',
  ghost: '#C6CCD7',
  harvestGold: '#E5C07B',
  lavender: '#B57EDC',
  olivine: '#98C379',
  robRoy: '#E9D16C',
  shark: '#21252B',
  shuttleGray: '#5F6672',
  sunglo: '#E06C75',
  transparent: '#00000000',
  valencia: '#D74E42',
  whiskey: '#D19A66',
  white: '#FFFFFF',
  woodsmoke: '#181A1F',
} as const

// Plastic Code overrides, named by role.
export const custom = {
  accent: '#EA7D5F',
  accentDark: '#B86449',
  comment: '#97907F',
  foreground: '#E0DDD8',
  function: '#8CB6E3',
  macro: '#CA86DE',
  number: '#DDC36A',
  string: '#9CD68D',
  typeParameter: '#E0B882',
} as const
