import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { selectUser } from "../../redux/slices/User/UserSlice";
import { useSelector } from "react-redux";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon"
          style={{
            border: "1px solid gray",
            backgroundColor: "white",
            color: "black",
          }}
        >
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h4 className="headerOption__title">{title}</h4>
    </div>
  );
};

export default HeaderOption;
