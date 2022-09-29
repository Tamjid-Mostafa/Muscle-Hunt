import profilePhoto from "../../profile.png";
import "./Profile.css";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <img src={profilePhoto} alt="" />
        <div className="user-name-location">
          <p>Tamjid Mostafa</p>
          <p>
            <small>Gazipur, Bangladesh</small>
          </p>
        </div>
      </div>
      <div className="profile-stats">
        <div>
          <h3>
            75<small>kgs</small>
          </h3>
          <p>Weight</p>
        </div>
        <div>
          <h3>
            5.3"<small></small>
          </h3>
          <p>Heigth</p>
        </div>
        <div>
          <h3>
            25<small>years</small>
          </h3>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
