import React    from "react";
import template from "./Profile.jsx";

class Profile extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Profile;
