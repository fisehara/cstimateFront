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
    const testText = "In a story, there are a set of tasks required, these tasks should be fleshed out during estimation of the user story and linked in the team's issue tracker."
    return (
      <div>
        <CestContainer>
          <CestDescription cestText={testText} />

          {/* <WorkCestDescription>
            2 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </WorkCestDescription>

          <ArchivoCestDescription>
            3 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </ArchivoCestDescription>

          <CestDescription>
            4 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </CestDescription>

          <RobotoCestDescription>
            5 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </RobotoCestDescription>

          <NunitoCestDescription>
            7 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </NunitoCestDescription>

          <SignikaCestDescription>
            8 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </SignikaCestDescription>

          <HeeboCestDescription>
            10 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </HeeboCestDescription>

          <RubikCestDescription>
            11 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </RubikCestDescription>

          <PragatiCestDescription>
            12 In a story, there are a set of tasks required, these tasks should
            be fleshed out during estimation of the user story and linked in the
            team's issue tracker.
          </PragatiCestDescription> */}
        </CestContainer>
      </div>
    );
  }
}

export default CestSection;
