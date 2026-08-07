/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "secondary-container": "#58368d",
        "tertiary-container": "#8a6600",
        "primary-fixed": "#e9ddff",
        "surface-container-high": "#2c2835",
        "on-surface-variant": "#cbc3d9",
        "outline": "#948da2",
        "ethereal-cream": "#F5ECD0",
        "surface-container-low": "#1d1a26",
        "tertiary-fixed": "#ffdf9f",
        "error-container": "#93000a",
        "on-background": "#e7dff1",
        "primary-fixed-dim": "#cfbdff",
        "on-tertiary-fixed": "#261a00",
        "primary-container": "#7b3fff",
        "on-tertiary": "#402d00",
        "on-tertiary-container": "#ffeccb",
        "on-error": "#690005",
        "surface-container": "#211e2a",
        "surface-variant": "#363340",
        "error": "#ffb4ab",
        "on-tertiary-fixed-variant": "#5c4300",
        "surface": "#15121d",
        "on-primary-fixed": "#22005d",
        "on-primary-container": "#f4ebff",
        "on-error-container": "#ffdad6",
        "secondary": "#d5baff",
        "outline-variant": "#494456",
        "on-secondary": "#3e1a73",
        "tertiary": "#f0c052",
        "dream-surface": "#141125",
        "surface-container-lowest": "#0f0c18",
        "inverse-on-surface": "#322e3b",
        "secondary-fixed-dim": "#d5baff",
        "background": "#15121d",
        "primary": "#cfbdff",
        "on-primary": "#3a0093",
        "on-secondary-container": "#caa9ff",
        "surface-tint": "#cfbdff",
        "on-surface": "#e7dff1",
        "on-secondary-fixed-variant": "#55348b",
        "surface-dim": "#15121d",
        "on-secondary-fixed": "#270057",
        "midnight-void": "#07050F",
        "on-primary-fixed-variant": "#5300cc",
        "lucid-magenta": "#FF2EF0",
        "tertiary-fixed-dim": "#f0c052",
        "inverse-surface": "#e7dff1",
        "secondary-fixed": "#ecdcff",
        "inverse-primary": "#6d2af1"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "grid-margin": "24px",
        base: "8px",
        "section-gap-mobile": "64px",
        "section-gap-desktop": "120px",
        gutter: "20px"
      },
      fontFamily: {
        caption: ["Inter"],
        "label-bold": ["Inter"],
        "display-lg": ["Libre Caslon Text"],
        "headline-lg": ["Libre Caslon Text"],
        "headline-lg-mobile": ["Libre Caslon Text"],
        "headline-md": ["Libre Caslon Text"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"]
      },
      fontSize: {
        caption: ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "label-bold": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    }
  },
  plugins: []
}