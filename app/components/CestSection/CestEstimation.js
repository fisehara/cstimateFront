import React from "react";
import styled from "styled-components";
import { globalColors } from "../../globalColors";

const CestEstDiv = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  // display: flex;
  background: ${globalColors._cestthird};
  max-width: 30em;
  background: ${globalColors._cestsecgrey};
`;

const CestEstDivRow = styled.div`
  height: 30px;
  margin-left: 10px;
  margin-top: 5px;
  display: flex;
`;

const CestEstUnit = styled.button`
  display: flex;
  padding: 8px 32px;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${globalColors._cestprimary};
  background: ${globalColors._background};
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
    return (
      <CestEstDiv onClick={this.edit} fontStyle={this.state.fontStyle}>
        <CestEstDivRow>
        <div>
          <select>
            <option>Hours</option>
            <option>Action Points</option>
            <option>T-Shirt Sizes</option>
          </select>
        </div>
        <div>
          <select>
            <option>10</option>
            <option>50</option>
            <option>100</option>
            <option>200</option>
            <option>500</option>
            <option>1000</option>
          </select>
        </div>
        <div>
          <select>
            <option>1h</option>
            <option>4h</option>
            <option>12h</option>
            <option>24h</option>
            <option>48h</option>
            <option>72h</option>
            <option>168h</option>
          </select>
        </div>
        </CestEstDivRow>
        <CestEstDivRow>
        <select>
          <option value="1">js</option>
          <option value="2">python</option>
          <option value="2">c#</option>
          <option value="2">c++</option>
        </select>
        <select multiple>
          <option value="1">nodejs</option>
          <option value="2">express</option>
          <option value="2">graphql</option>
          <option value="2">django</option>
        </select>
        </CestEstDivRow>
      </CestEstDiv>
    );
  };

  render() {
    return this.renderNormal();
  }
}
