import React from "react";
import styled from "styled-components";
import { globalColors } from "../../globalColors";

const CestEstDiv = styled.div`
  margin-top: 5px;
  display: flex;
  background: ${globalColors._cestthird};
`;

// const CestEstDivRow = styled.div`
//   height: 30px;
//   margin-top: 5px;
//   margin-left: 5px;
//   display: flex;
// `;

const CestEstDivSpacer = styled.div`
font-family: Oswald, sans-serif;
font-size: 14px;
font-weight: 900;
border-radius: 0px;
align-items: center;
color: ${globalColors._cestprimary};
background: ${globalColors._background};
width:9em;
margin-right: 25px;
`;

const CestEstDivRow = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 10px;
  align-items: center;
  justify-content: left;
  border-top: 2px solid ${globalColors._cestprimary};
  border-bottom: 2px solid ${globalColors._cestprimary};
  background: ${globalColors._background};
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
  font-weight: 900;
  border-radius: 0px;
  appearance: none; /* remove default arrow */
  padding: 8px 32px;
  height: 32px;
  width:9em;
  text-align: center;
  color: ${globalColors._cestprimary};
  background: ${globalColors._background};

  &:hover {
    background: ${globalColors._cestprimary};
    color: ${globalColors._cestsecond};

    background-image: linear-gradient(
        30deg,
        transparent 50%,
        ${globalColors._cestsecond} 50%
      ),
      linear-gradient(150deg, ${globalColors._cestsecond} 50%, transparent 50%);
    background-position: calc(100% - 20px) 15px, calc(100% - 10px) 15px,
      calc(100% - 5px) 15px;
    background-size: 10px 8px, 10px 8px;
    background-repeat: no-repeat;
  }

  background-image: linear-gradient(
      30deg,
      transparent 50%,
      ${globalColors._cestprimary} 50%
    ),
    linear-gradient(150deg, ${globalColors._cestprimary} 50%, transparent 50%);
  background-position: calc(100% - 20px) 15px, calc(100% - 10px) 15px,
    calc(100% - 5px) 15px;
  background-size: 10px 8px, 10px 8px;
  background-repeat: no-repeat;
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
          <CestEstDivSpacer>
            {/* <CestEstSelect>
              <option>Hours</option> */}
              Action Points
              {/* <option>T-Shirt Sizes</option>
            </CestEstSelect> */}
          </CestEstDivSpacer>
          <div>
            <CestEstSelect>
              <option>0.5</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>5</option>
              <option>8</option>
              <option>13</option>
              <option>21</option>
            </CestEstSelect>
          </div>
          <CestEstDivSpacer>
            {/* <CestEstSelect>
              <option>Hours</option> */}
              Estimation Duration
              {/* <option>T-Shirt Sizes</option>
            </CestEstSelect> */}
          </CestEstDivSpacer>
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
      </CestEstDiv>
    );
  };

  render() {
    return this.renderNormal();
  }
}
