import { injectGlobal } from "styled-components";
import { globalColors } from "./globalColors";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Work Sans', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Work Sans', sans-serif
  }

  #app {
    background-color: ${globalColors._background};
    min-height: 100%;
    min-width: 100%;
  }

  label {
    font-family: 'Inconsolata';
    line-height: 1.5em;
  }
`;
