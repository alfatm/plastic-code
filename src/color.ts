const MAX_CHANNEL = 255

function toChannels(hex: string): [number, number, number] {
  const value = Number.parseInt(hex.slice(1, 7), 16)
  return [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff]
}

function toHex(channels: number[]): string {
  return `#${channels
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`
}

export function setAlpha(hex: string, alpha: number): string {
  return toHex([...toChannels(hex), Math.round(alpha * MAX_CHANNEL)])
}

// Same semantics as tinycolor2 `brighten`, which upstream used for diff colors.
export function brighten(hex: string, percent: number): string {
  const delta = Math.round((MAX_CHANNEL * percent) / 100)
  return toHex(
    toChannels(hex).map((channel) =>
      Math.min(MAX_CHANNEL, Math.max(0, channel + delta)),
    ),
  )
}

// Opaque equivalent of `fg` at `alpha` over `bg`, for targets without alpha support.
export function blend(fg: string, bg: string, alpha: number): string {
  const back = toChannels(bg)
  return toHex(
    toChannels(fg).map((channel, index) =>
      Math.round(channel * alpha + (back[index] ?? 0) * (1 - alpha)),
    ),
  )
}
