import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Josefin Sans', sans-serif`,
  },
  colors: {
    cultured: "#F7F4F3",
    gold: "#FFE94B",
    black: {
      "600": "#232526",
      "300": "#414345",
    },
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.600",
        lineHeight: "tall",
        backgroundImage: "linear-gradient(to right, #232526 , #414345)",
      },
    },
  },
});

export default theme;
