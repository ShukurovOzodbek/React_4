import React from "react";
import "./Item.css";

const Item = ({title,author, url, created_at}) => {
  return (
    <div className="item">
      <b className="title">
        {title}
      </b>
      <div className="info">
        <i className="author">{author}</i>
        <a href={url} target="_blank" >Read More</a>
      </div>
      <p className="date">{created_at}</p>
    </div>
  );
};

export default Item