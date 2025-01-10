import React from "react";
import "./SideBar.css";
import { Avatar } from "@mui/material";
import bgSidebar from "../../assets/bg-sidebar.avif";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';

const SideBar = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  const groups = (topic, icon) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">{icon}</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={bgSidebar} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>M. Bilal Nadeem</h2>
        <h4>bilalnadeem4u@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,034</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,487</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("frontend-dev")}
        {recentItem("AWS-SAA")}
        {recentItem("Databases")}
        {recentItem("Microsoft Azure")}
      </div>

      <div className="sidebar__bottom">
        <p>Groups</p>
        {groups("Amazon Web Services", <InterpreterModeOutlinedIcon/> )}
        {groups("Python Fundamentals", <Diversity2OutlinedIcon />)}
        {groups("Data Science", <SchemaOutlinedIcon />)}
        {groups("React-Native x Flutter", <DeveloperModeOutlinedIcon />)}
        {groups("NodeJS Community", <GroupsOutlinedIcon />)}
        {groups("GraphQl Hub", <AccountTreeOutlinedIcon />)}
      </div>
    </div>
  );
};

export default SideBar;
