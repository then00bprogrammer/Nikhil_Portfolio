import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Button } from "./button";
import { useColorModeValue } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    body: "Open Sans, sans-serif",
  },
  icons: {
    iconPack: "fa",
  },
  styles: {
    global: () => ({
      "*": {
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      },
      body: {
        bg: "white",
        // position: "absolute"
      },
      "::-webkit-scrollbar-track": {
        borderRadius: "10px",
        backgroundColor: useColorModeValue("gray.200", "gold.200"),
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      },
      "::-webkit-scrollbar": {
        width: "12px",
        backgroundColor: useColorModeValue("gray.200", "black"),
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: useColorModeValue("gray.600", "gold.600"),
        boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
      },
    }),
  },
  components: {
    Button,
  },
  colors: {
    gold: {
      50: "#fef3e1",
      100: "#efdec0",
      200: "#e2c89b",
      300: "#d4b176",
      400: "#c89b50",
      500: "#C69749",
      600: "#735F32",
      700: "#62481b",
      800: "#3b2b0d",
      900: "#180d00",
    },
  },
});
