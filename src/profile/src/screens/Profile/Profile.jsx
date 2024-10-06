import React from "react";
import { NavBar } from "../../components/NavBar";
import { SmallLogo } from "../../components/SmallLogo";
import "./style.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="div">
        <NavBar className="nav-bar-instance" />
        <SmallLogo className="small-logo-instance" />
        <button className="save-btn">
          <div className="overlap">
            <div className="text-wrapper-2">Save</div>
          </div>
        </button>
        <div className="others">
          <div className="div-wrapper">
            <p className="text-wrapper-3">Enter anything else you want other people to remember you by</p>
          </div>
        </div>
        <div className="others-name">Others</div>
        <div className="linkedin">
          <div className="overlap-2">
            <div className="text-wrapper-3">LinkedIn @</div>
          </div>
        </div>
        <div className="email">
          <input className="input" placeholder="Email address" type="email" />
        </div>
        <div className="instagram">
          <div className="overlap-2">
            <div className="text-wrapper-3">Instagram @</div>
          </div>
        </div>
        <div className="contacts-name">Contacts</div>
        <div className="interests">
          <div className="div-wrapper">
            <p className="text-wrapper-3">Enter your favourite food / sport / activity</p>
          </div>
        </div>
        <div className="interests-name">Interests</div>
        <div className="school">
          <div className="div-wrapper">
            <p className="text-wrapper-3">Enter your year / major / courses / interms</p>
          </div>
        </div>
        <div className="school-name">School/ Occupation</div>
        <div className="name">
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="text-wrapper-4">Amelie</div>
          </div>
        </div>
        <div className="name-name">Name</div>
       
        <div className="text-wrapper-5">Profile</div>
      </div>
    </div>
  );
};
