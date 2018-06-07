import React from "react";
import { FormattedMessage } from "react-intl";

import CestContainer from "./CestContainer";

class CestSection extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const testText =
      "In a story, 0123456789 there are a set of tasks required, these tasks should be fleshed out during estimation of the user story and linked in the team's issue.";
    return (
      <div>
        <CestContainer
            fontStyle="'Work Sans', sans-serif"
            cestText={testText}
          />
          <br/>
         {/* <CestContainer
            fontStyle="'Inconsolata', monospace"
            cestText={"10 " + testText}
          /> */}
      </div>
    );
  }
}

export default CestSection;
