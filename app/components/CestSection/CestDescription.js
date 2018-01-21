import styled from "styled-components";
import { globalColors } from "../../globalColors";

export default styled.textarea`
  width: 85%;
  height: calc(8.2em);
  margin: 0.5em auto;
  display: inline-flex;
  padding: 0.25em 0.25em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  border-radius: 2px;
  -webkit-box-shadow: inset 0  0 0.25em  -0.05em  ${globalColors._text};
  -moz-box-shadow: inset 0 0 0.25em  -0.05em  ${globalColors._text};
  box-shadow: inset 0 0 0.25em  -0.05em  ${globalColors._text};
  
  // font-family: 'Tenor Sans', sans-serif;
  //font-family: 'Work Sans', sans-serif;
  // font-family: 'Archivo', sans-serif;
  // font-family: 'Rubik', sans-serif;
  font-weight: 450;
  color: ${globalColors._text};
  background: ${globalColors._background};
  word-wrap: break-word;
  resize: none;
  font-size: 14px;
  
  :focus {
    outline: none !important;
  }

`;