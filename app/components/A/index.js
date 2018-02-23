/**
 * A link to a certain page, an anchor tag
 */
import { globalColors } from "../../globalColors";

import styled from 'styled-components';

const A = styled.a`
  color: ${globalColors._foregroundKicker};
  // text-decoration: none;
  &:hover {
    color: ${globalColors._cestsecond};
  }
`;

export default A;
