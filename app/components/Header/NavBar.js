import styled from 'styled-components';
import { globalColors } from '../../globalColors';

export default styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${globalColors._cestprimary};
  border-bottom: 2px solid ${globalColors._cestprimary};
  background: ${globalColors._background};
`;
