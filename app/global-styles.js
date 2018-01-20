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
    font-family: 'Source Code Pro';
  }

  body.fontLoaded {
    font-family: 'Source Code Pro';
  }

  #app {
    background-color: ${globalColors._background};
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Playfair Display';
    line-height: 1.5em;
  }
`;
