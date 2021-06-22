import React from "react";
import  '../../styles/Header.css';
import Logo from "../../media/google.png";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMore from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";

const index = ({userPhoto}) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search here" />
          <ExpandMore />
        </div>
      </div>
      <div className="header__icons">
          <span>
            <HelpOutlineIcon />
            <SettingsIcon />

          </span>
          <AppsIcon />
          <img src={userPhoto} alt="user"/> 
      </div>
    </div>
  );
};

export default index;
