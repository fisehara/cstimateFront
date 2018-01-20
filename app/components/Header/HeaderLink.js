import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { globalColors } from '../../globalColors';

export default styled(Link)`
  display: flex;
  padding: 8px 32px;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${globalColors._cestprimary};
  background: ${globalColors._background};

  &:hover {
    background: ${globalColors._cestprimary};
    color: ${globalColors._background};
  }
`;
