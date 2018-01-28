import React from "react";
import { FormattedMessage } from "react-intl";

import CestContainer from "./CestContainer";
import CestDescription from "./CestDescription";

class CestSection extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const testText =
      "In a story, 0123456789 there are a set of tasks required, these tasks should be fleshed out during estimation of the user story and linked in the team's issue.";
    return (
      <div>
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Roboto', sans-serif"
            cestText={"1 " + testText}
          />
        </CestContainer> */}
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Pragati Narrow', sans-serif"
            cestText={"2 " + testText}
          />
        </CestContainer> */}
        <CestContainer>
          <CestDescription
            fontStyle="'Rubik', sans-serif"
            cestText={"3 " + testText}
          />
        </CestContainer>
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Istok Web', sans-serif"
            cestText={"4 " + testText}
          />
        </CestContainer> */}
        <CestContainer>
          <CestDescription
            fontStyle="'Work Sans', sans-serif"
            cestText={"5 " + testText}
          />
        </CestContainer>
        <CestContainer>
          <CestDescription
            fontStyle="'Archivo', sans-serif"
            cestText={"6 " + testText}
          />
        </CestContainer>
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Heebo', sans-serif"
            cestText={"7 " + testText}
          />
        </CestContainer> */}
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Signika', sans-serif"
            cestText={"8 " + testText}
          />
        </CestContainer> */}
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Nunito', sans-serif"
            cestText={"9 " + testText}
          />
        </CestContainer> */}
        <CestContainer>
          <CestDescription
            fontStyle="'Inconsolata', monospace"
            cestText={"10 " + testText}
          />
        </CestContainer>
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Source Code Pro', monospace"
            cestText={"11 " + testText}
          />
        </CestContainer> */}
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Space Mono', monospace"
            cestText={"12 " + testText}
          />
        </CestContainer> */}
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Fira Mono', monospace"
            cestText={"13 " + testText}
          />
        </CestContainer>
        <CestContainer>
          <CestDescription
            fontStyle="'Oxygen Mono', monospace"
            cestText={"14 " + testText}
          />
        </CestContainer> */}
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Nunito', sans-serif"
            cestText={"15 " + testText}
          />
        </CestContainer> */}
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Overpass Mono', monospace"
            cestText={"16 " + testText}
          />
        </CestContainer> */}
        {/* <CestContainer>
          <CestDescription
            fontStyle="'Share Tech Mono', monospace"
            cestText={"17 " + testText}
          />
        </CestContainer> */}
      </div>
    );
  }
}

export default CestSection;
