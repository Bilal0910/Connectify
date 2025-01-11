import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "../InputOption/InputOption";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendIcon from "@mui/icons-material/Send";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photoUrl, timestamp }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src={photoUrl}>
          {name[0]}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <small style={{ fontSize: "11px", color: "gray" }}>
            {timestamp
              ? new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  weekday: "long",
                }).format(new Date(timestamp.toDate()))
              : "Loading..."}
          </small>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" />
        <InputOption Icon={CommentIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" />
        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
});

export default Post;
