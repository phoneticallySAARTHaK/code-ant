import { ChakraTheme, extendTheme } from "@chakra-ui/react";

const config: Partial<ChakraTheme> = {
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
  },
};

export const theme = extendTheme(config);
