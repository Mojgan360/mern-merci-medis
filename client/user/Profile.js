import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

const Profile = ({ match }) => {
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  return (
    <div>
      <h1>Hello fro Profile</h1>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
