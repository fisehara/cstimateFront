import styled from 'styled-components';
import { globalColors } from '../../globalColors';

export default styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 4px solid ${globalColors._button};
  border-bottom: 4px solid ${globalColors._button};
  background: ${globalColors._background};
`;
