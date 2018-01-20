import React from "react";
import { FormattedMessage } from "react-intl";

import A from "./A";
import Img from "./Img";
import NavBar from "./NavBar";
import HeaderLink from "./HeaderLink";
import zestPath from "./zestPath.svg";
import messages from "./messages";
import Icon from "./Icon";

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <Icon to="/"/>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        <HeaderLink to="/profile">
          <FormattedMessage {...messages.profile} />
        </HeaderLink>
      </NavBar>
    );
  }
}

export default Header;
