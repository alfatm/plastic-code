import { readFile } from 'node:fs/promises'

import { Ajv, type AnySchema } from 'ajv'

const SCHEMA_URL = 'https://zed.dev/schema/themes/v0.2.0.json'
const THEME_PATH = 'zed/themes/plastic-code.json'

const response = await fetch(SCHEMA_URL)
if (!response.ok) {
  throw new Error(`Failed to fetch ${SCHEMA_URL}: ${response.status}`)
}

const validate = new Ajv({ strict: false, allErrors: true }).compile(
  (await response.json()) as AnySchema,
)
const theme = JSON.parse(await readFile(THEME_PATH, 'utf8'))

if (!validate(theme)) {
  console.error(validate.errors)
  process.exit(1)
}
console.log(`${THEME_PATH} matches ${SCHEMA_URL}`)
