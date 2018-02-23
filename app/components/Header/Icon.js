import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { globalColors } from "../../globalColors";
import Img from "./Img";

import Icon from "!svg-react-loader?name=Icon!../../images/zestPath.svg";

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
    fill: ${globalColors._cestsecond};
  }
  #cesticon2 {
    fill: ${globalColors._cestprimary};
  }

  &:hover {
    background: ${globalColors._cestprimary};
  }

  &:hover #cesticon1,
  &:hover #cesticon2 {
    fill: ${globalColors._cestsecond};
    //fill: #fff;
    // stroke:  ${globalColors._cestprimary};
  }
`;

export default props => (
  <LinkSvg to={props.to}>
    <StyledIcon />
  </LinkSvg>
);
