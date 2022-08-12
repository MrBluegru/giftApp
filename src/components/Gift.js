import React from "react";
import "../styles/gift.css"

export default function Gift({ title, id, url }) {
  return (
    <div >
      <a className="title-id" href={`#${id}`}>
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </a>
    </div>
  );
}
