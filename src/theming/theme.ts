import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

/**
 * "Morat Ruach" theme
 * Inspired by the group's cover photo: a deep chalkboard teal,
 * chalk-dust white, and the warm amber of coffee-with-milk & cracker biscuits.
 *
 * Two font roles:
 *  - display: "Frank Ruhl Libre" — a literary Hebrew serif, used sparingly for headlines
 *  - body:    "Heebo" — a clean, highly legible Hebrew sans for everything else
 *
 * Make sure both are loaded in index.html, e.g.:
 * <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500;700;900&family=Heebo:wght@300;400;500;700&display=swap" rel="stylesheet" />
 */

const config = defineConfig({
  globalCss: {
    "html, body": {
      direction: "rtl",
    },
  },
  theme: {
    tokens: {
      colors: {
        // Chalkboard teal — the dark, structural color of the site
        board: {
          50: { value: "#EAF1EF" },
          100: { value: "#CFE0DC" },
          200: { value: "#A3C4BD" },
          300: { value: "#75A79D" },
          400: { value: "#4C8A7E" },
          500: { value: "#2E6259" },
          600: { value: "#204B44" },
          700: { value: "#163A34" },
          800: { value: "#102B27" },
          900: { value: "#0B211D" },
          950: { value: "#071613" },
        },
        // Coffee-with-milk amber — the warm accent, used for CTAs & highlights
        chalk: {
          50: { value: "#FBF3E4" },
          100: { value: "#F3DFB2" },
          200: { value: "#EACB86" },
          300: { value: "#E0B75E" },
          400: { value: "#D4A344" },
          500: { value: "#C08F35" },
          600: { value: "#9C722A" },
          700: { value: "#7A591F" },
          800: { value: "#5A4116" },
          900: { value: "#3D2B0E" },
        },
        // A muted burgundy lifted from the blouse in the cover photo — used rarely
        ember: {
          400: { value: "#9C4A4E" },
          500: { value: "#7C3438" },
          600: { value: "#5E262A" },
        },
        paper: {
          value: "#F6F2E8",
        },
      },
      fonts: {
        heading: { value: "'Frank Ruhl Libre', serif" },
        body: { value: "'Heebo', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        "bg.canvas": {
          value: { base: "{colors.board.800}" },
        },
        "bg.surface": {
          value: { base: "{colors.paper}" },
        },
        "bg.surfaceDark": {
          value: { base: "{colors.board.700}" },
        },
        "text.onDark": {
          value: { base: "{colors.paper}" },
        },
        "text.onLight": {
          value: { base: "{colors.board.900}" },
        },
        "accent.solid": {
          value: { base: "{colors.chalk.400}" },
        },
        "accent.emphasis": {
          value: { base: "{colors.chalk.500}" },
        },
        "accent.cta": {
          value: { base: "{colors.ember.500}" },
        },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)
export default system