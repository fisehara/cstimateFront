import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { globalColors } from '../../globalColors';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${globalColors._button};
  background: ${globalColors._background};

  &:hover {
    display: inline-block;
    -webkit-transform: perspective(0) translateZ(0);
    transform: perspective(0) translateZ(0);
    box-shadow: 0 0 0 transparent;
    position: relative;
    // overflow: hidden;
    // padding-left: calc(2em + 1px);
    // padding-right: calc(2em - 1px);
    background: ${globalColors._button};
    color: ${globalColors._foreground};
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

`;
