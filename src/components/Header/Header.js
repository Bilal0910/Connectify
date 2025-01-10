import React from "react";
import logo1 from "../../assets/image.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from "../HeaderOption/HeaderOption";
import avatar from '../../assets/avatar.webp'

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo1} alt="logo" />

        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={PeopleAltSharpIcon} title='My Network' />
        <HeaderOption Icon={WorkIcon} title='Jobs' />
        <HeaderOption Icon={MessageIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={avatar} title='me' />

      </div>
    </div>
  );
};

export default Header;
