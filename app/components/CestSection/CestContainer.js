import React from "react";
import styled from "styled-components";
import { globalColors } from "../../globalColors";
import CestDescription from "./CestDescription";

import Icon from "!svg-react-loader?name=Icon!../../images/zestPath.svg";

const CestContainer = styled.div`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  background: ${globalColors._cestsecond};
`;

const StyledIcon = styled(Icon)`
  height: 30px;
  width: 30px;
  margin: 5px 0px;
  #cesticon1 {
    fill: ${globalColors._cestsecgrey};
  }
  #cesticon2 {
    fill: ${globalColors._cestprimgrey};
  }
`;

export default props => (
  <CestContainer>
    <StyledIcon />
    <CestDescription fontStyle={props.fontStyle} cestText={props.cestText} />
  </CestContainer>
);
