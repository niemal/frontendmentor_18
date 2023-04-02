export const COLORS = {
  dark_blue_intro: "hsl(217, 28%, 15%)",
  dark_blue_background: "hsl(218, 28%, 13%)",
  dark_blue_footer_background: "hsl(216, 53%, 9%)",
  dark_blue_testi_background: "hsl(219, 30%, 18%)",
  dark_blue_testi_background_fade: "hsla(219, 30%, 18%, 0.4)",
  cyan: "hsl(176, 68%, 64%)",
  blue: "hsl(198, 60%, 50%)",
  light_red: "hsl(0, 100%, 63%)",
  white: "hsl(0, 0%, 100%)",
  white_fade: "hsla(0, 0%, 100%, 0.2)",
  white_fade_ultra: "hsla(0, 0%, 100%, 0.07)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth1: 1320,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
};

/*
## Colors

### Primary

- Dark Blue (intro and email sign up background): hsl(217, 28%, 15%)
- Dark Blue (main background): hsl(218, 28%, 13%)
- Dark Blue (footer background): hsl(216, 53%, 9%)
- Dark Blue (testimonials background): hsl(219, 30%, 18%)

### Accent

- Cyan (inside call-to-action gradient): hsl(176, 68%, 64%)
- Blue (inside call-to-action gradient): hsl(198, 60%, 50%)
- Light Red (error): hsl(0, 100%, 63%)

### Neutral

- White: hsl(0, 0%, 100%)
*/
