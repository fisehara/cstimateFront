import React from "react";
import styled from "styled-components";
import { globalColors } from "../../globalColors";

const CestEstDiv = styled.div`
  margin-top: 5px;
  display: flex;
  background: ${globalColors._cestthird};
  max-width: 30em;
`;

const CestEstDivRow = styled.div`
  height: 30px;
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
`;

const CestEstUnit = styled.button`
  display: flex;
  text-decoration: none;
  font-family: Oswald, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${globalColors._backgroundKicker};
  background: ${globalColors._background};
`;

const CestEstSelect = styled.select`
  text-decoration: none;
  font-family: Oswald, sans-serif;
  font-size: 16px;
  border-radius: 0px;
  appearance: none; /* remove default arrow */
  background: ${globalColors._cestthird};
  color: ${globalColors._backgroundKicker};
  font-weight: 900;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 5px;
  height: 30px;
  padding: 5px 5px;
  -webkit-box-shadow: inset 0 0 2pt -1pt ${globalColors._shadow};
  -moz-box-shadow: inset 0 0 2pt -1pt ${globalColors._shadow};
  box-shadow: inset 0 0 2pt -1pt ${globalColors._shadow};

  &:hover {
    color: ${globalColors._backgroundKicker};
    background: ${globalColors._cestsecond};
  }

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
            <CestEstSelect>
              <option>Hours</option>
              <option>Action Points</option>
              <option>T-Shirt Sizes</option>
            </CestEstSelect>
          </div>
          <div>
            <CestEstSelect>
              <option>10</option>
              <option>50</option>
              <option>100</option>
              <option>200</option>
              <option>500</option>
              <option>1000</option>
            </CestEstSelect>
          </div>
          <div>
            <CestEstSelect>
              <option>1h</option>
              <option>4h</option>
              <option>12h</option>
              <option>24h</option>
              <option>48h</option>
              <option>72h</option>
              <option>168h</option>
            </CestEstSelect>
          </div>
        </CestEstDivRow>
        <CestEstDivRow>
          <CestEstSelect>
            <option value="1">js</option>
            <option value="2">python</option>
            <option value="2">c#</option>
            <option value="2">c++</option>
          </CestEstSelect>
          <CestEstSelect multiple>
            <option value="1">nodejs</option>
            <option value="2">express</option>
            <option value="2">graphql</option>
            <option value="2">django</option>
          </CestEstSelect>
        </CestEstDivRow>
      </CestEstDiv>
    );
  };

  render() {
    return this.renderNormal();
  }
}
