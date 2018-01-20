import styled from 'styled-components';
import { globalColors } from '../../globalColors';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 4px solid ${globalColors._button};

  padding: 0.25em 2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 16px;
  
  background: ${globalColors._backgroundKicker};
  color: ${globalColors._foregroundKicker};
`;

export default Wrapper;
