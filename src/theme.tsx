import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import "@fontsource/inter";

export const Fonts = () => (
  <Global
    styles={`@font-face{
font-family: 'satoshi';
src: url('fonts/satoshi-regular.woff2') format('woff2'),url('fonts/satoshi-regular.woff') format('woff');
font-weight: normal;
font-style: normal;
font-display: swap;
}`}
  />
);

const config = {
  fonts: {
    heading: `inter, sans-serif`,
    body: `inter, sans-serif`,
  },
  shadows: {
    xs: "0 1 2 0 hsla(220, 29%, 5%, 0.05)",
  },
  colors: {
    brand: {
      50: "hsla(215,  87%, 87.5%, 1)",
      100: "hsla(215, 87%, 80%,   1)",
      200: "hsla(215, 87%, 72.5%, 1)",
      300: "hsla(215, 87%, 65%,   1)",
      400: "hsla(215, 87%, 57.5%, 1)",
      500: "hsla(215, 87%, 50%,   1)",
      600: "hsla(215, 87%, 42.5%, 1)",
      700: "hsla(215, 87%, 35%,   1)",
      800: "hsla(215, 87%, 27.5%, 1)",
      900: "hsla(215, 87%, 20%,   1)",
    },
    secondary: "#081735",
    "secondary-light": "#171717",
  },
  components: {
    Icon: {
      baseStyle: {
        width: "initial",
        height: "initial",
      },
    },
  },
} as const satisfies Readonly<Partial<ChakraTheme>>;

export const theme = extendTheme(config);
