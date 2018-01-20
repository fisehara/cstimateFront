import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { globalColors } from "../../globalColors";
import Img from "./Img";

import Icon from "!svg-react-loader?name=Icon!./zestPath.svg";

const LinkSvg = styled(Link)`
  display: flex;
  .app_setting *:hover {
    cursor: move;
  }
`;

const StyledIcon = styled(Icon)`
  display: flex;
  height: 40px;
  width: 40px;

  #cesticon1 {
    fill: rgb(255, 236, 165);
  }
  #cesticon2 {
    fill: rgb(255, 192, 44);
  }

  &:hover {
    background: ${globalColors._button};
  }

  &:hover #cesticon1,
  &:hover #cesticon2 {
    fill: #fff; // rgb(255, 236, 165);
    // stroke:  ${globalColors._button};
  }
`;

export default props => (
  <LinkSvg to={props.to}>
    <StyledIcon />
  </LinkSvg>
);
