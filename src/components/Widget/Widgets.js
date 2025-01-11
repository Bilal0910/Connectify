import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      {/* article left */}
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      {/* article right */}
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Connectify News</h2>
        <InfoIcon style={{ color: "white" }} />
      </div>
      {newsArticle("React.js JSX", "Top news - 999 readers ")}
      {newsArticle("Coronavirus: UK updates", "Top news - 999 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 800 readers")}
      {newsArticle("Is Redux too good?", "Code - 100 readers")}
      {newsArticle("The singularity now!", "Future - 100 readers")}
      {newsArticle("Why React works", "Code - 300 readers")}
      {newsArticle("Why Redux works", "Code - 300 readers")}
    </div>
  );
};

export default Widgets;
