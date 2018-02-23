import React from 'react';
import { FormattedMessage } from 'react-intl';
import { globalColors } from "../../globalColors";

import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import styled from 'styled-components';

// Footer A
const A = styled.a`
  color: ${globalColors._foregroundKicker};
  // text-decoration: none;
  &:hover {
    color: ${globalColors._cestsecond};
  }
`;


function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/harafise">Hara Fise</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
