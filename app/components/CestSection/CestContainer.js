import React from "react";
import styled from "styled-components";
import { globalColors } from "../../globalColors";
import CestDescription from "./CestDescription";
import CestEstimation from "./CestEstimation";

import Icon from "!svg-react-loader?name=Icon!../../images/zestPath.svg";

const CestContainer = styled.div`
  display: flex;
  background: ${globalColors._cestthird};
  max-width: 30em;
`;

const StyledIcon = styled(Icon)`
  height: 30px;
  width: 30px;
  margin: 5px 0px;
  #cesticon1 {
    fill: ${globalColors._cestsecond};
  }
  #cesticon2 {
    fill: ${globalColors._cestprimary};
  }
`;

const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 50px);
`;

export default props => (
  <CestContainer>
    <StyledIcon />
    <ContainerCol>
      <CestDescription fontStyle={props.fontStyle} cestText={props.cestText} />
      <CestEstimation />
    </ContainerCol>
  </CestContainer>
);
