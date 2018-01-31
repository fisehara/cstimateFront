import React from "react";
import styled from "styled-components";
import { globalColors } from "../../globalColors";

const CestEstDiv = styled.div`
  height: 30px;
  width: 100%;
  margin: 0px 10px;
  background: ${globalColors._cestsecgrey};
`;

export default props => <CestTextField metric={props.metric} />;

class CestTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metric: props.metric
    };
  }

  renderNormal = () => {
    // ** Render "state.text" inside your <p> whether its empty or not...
    return <CestEstDiv onClick={this.edit} fontStyle={this.state.fontStyle} />;
  };

  render() {
    return this.renderNormal();
  }
}
