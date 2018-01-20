import React from "react";
import { FormattedMessage } from "react-intl";

import CestContainer from "./CestContainer";
import CestDescription from "./CestDescription";
// import messages from './messages';

class CestSection extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <CestContainer>
        Test
        <CestDescription>
          ABCDEFGHIJKL MNOPQRSTUVWXYZ ABCDEFGHIJKL MNOPQRSTUVWXYZ ABCDEFGHIJKL
          MNORSTUVWXY ABCDEFGHIJKL MNOPQRSTUVWXYZ ABCDEFGHIJKL MNOPQRSTUVWXYZ
          ABCDEFGHIJKL MNOPQRSTUX
        </CestDescription>
      </CestContainer>
      </div>
    );
  }
}

export default CestSection;
