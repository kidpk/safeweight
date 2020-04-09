import React from "react";
import notiIcon from "../icons/notificationsIcon.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h4><a className="headerLink" href="/">Safe Weight</a></h4>
        </div>
        <ul className="registerUl">
          <li><a className="headerLink" href="/signup">Sign up</a></li>
          <li><a className="headerLink"  href="/login">Log in</a></li>
          {/* <li><a className="headerLink"  href="/editprofile">Edit Profile</a></li> */}

        </ul>
        <img
          style={{ marginTop: 5, marginRight: 10, cursor: "pointer" }}
          className="defaultIcons"
          src={notiIcon}
        />
      </header>
    );
  }
}

export default Header;
