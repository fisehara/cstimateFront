import styled from "styled-components";
import { globalColors } from "../../globalColors";

export default styled.textarea`
  width: 85%;
  margin: 0.5em auto;
  display: inline-flex;
  padding: 0.25em 0.25em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  font-family: "Puritan", sans-serif;
  font-weight: 450;
  color: ${globalColors._text};
  background: ${globalColors._background};
  word-wrap: break-word;
  resize: none;
  max-height: 84px;
  font-size: 14px;
`;
