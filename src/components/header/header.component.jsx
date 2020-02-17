import React from "react";
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

// // <Logo className="logo" />
// https://stackoverflow.com/questions/42296499/how-to-display-svg-icons-svg-files-in-ui-using-react-component

class Header extends React.Component {
  render() {
    return (
      // const Header = () => (
      <div className="header">
        <Link className="logo-container" to="/">
          <img className="logo" alt="Logo" src={require("../../assets/crown.svg")} />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
