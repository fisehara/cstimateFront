import React from "react";
import { FormattedMessage } from "react-intl";

import CestContainer from "./CestContainer";
import CestDescription from "./CestDescription";
// import messages from './messages';
// We're extending Button with some extra styles
// const IstokCestDescription = CestDescription.extend`
//   font-family: "Istok Web", sans-serif;
// `;
// // We're extending Button with some extra styles
// const WorkCestDescription = CestDescription.extend`
//   font-family: "Work Sans", sans-serif;
// `;
// // We're extending Button with some extra styles
// const ArchivoCestDescription = CestDescription.extend`
//   font-family: "Archivo", sans-serif;
// `;

// const SourceCestDescription = CestDescription.extend`
//   font-family: "Source Code Pro", monospace;
// `;
// const SpaceCestDescription = CestDescription.extend`
//   font-family: "Space Mono", monospace;
// `;
// const FiraCestDescription = CestDescription.extend`
//   font-family: "Fira Mono", monospace;
// `;
// const OxygenCestDescription = CestDescription.extend`
//   font-family: "Oxygen Mono", monospace;
// `;
// const OverpassCestDescription = CestDescription.extend`
//   font-family: "Overpass Mono", monospace;
// `;
// const ShareCestDescription = CestDescription.extend`
//   font-family: "Share Tech Mono", monospace;
// `;
// const RobotoCestDescription = CestDescription.extend`
//   font-family: "Roboto", sans-serif;
// `;
// const InconsolataCestDescription = CestDescription.extend`
//   font-family: "Inconsolata", monospace;
// `;
// const NunitoCestDescription = CestDescription.extend`
//   font-family: "Nunito", sans-serif;
// `;
// const SignikaCestDescription = CestDescription.extend`
//   font-family: "Signika", sans-serif;
// `;
// const HeeboCestDescription = CestDescription.extend`
//   font-family: "Heebo", sans-serif;
// `;
// const RubikCestDescription = CestDescription.extend`
//   font-family: "Rubik", sans-serif;
// `;
// const PragatiCestDescription = CestDescription.extend`
//   font-family: "Pragati Narrow", sans-serif;
//   font-weight: 450;
// `;

class CestSection extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const testText = "In a story, there are a set of 1234 tasks required, these tasks should be fleshed out during estimation of the user story and linked in the team's issue tracker."
    return (
      <div>
        <CestContainer>
          <CestDescription fontStyle="'Pragati Narrow', sans-serif" cestText={testText} />
        </CestContainer>
        <CestContainer>
          <CestDescription cestText={testText} />
        </CestContainer>
      </div>
    );
  }
}

export default CestSection;
