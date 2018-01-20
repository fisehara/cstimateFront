import React from "react";
import { FormattedMessage } from "react-intl";

import Img from './Img';
import zestTextPath from './zestTextPath.svg';

// import messages from './messages';

class CestSection extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <Img src={zestTextPath} />
      <Img src={zestTextPath} mirror />
      </div>
    );
  }
}

export default CestSection;
