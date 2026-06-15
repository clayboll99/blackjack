// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  // Your custom configs here
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
)
