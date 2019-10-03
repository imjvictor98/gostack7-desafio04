import React from "react";
import Comment from "./Comment";

function PostItem(props) {
  return (
    <div className="postItem">
      <li>
        <img src={props.data.author.avatar} alt="Foto de perfil" />
        <span>{props.data.author.name}</span>
        <span>{props.data.date}</span>
        <p>{props.data.content}</p>
        <div className="comments">
          <ul>
            {props.data.comments.map(comments => (
              <Comment key={comments.id} data={comments} />
            ))}
          </ul>
        </div>
      </li>
    </div>
  );
}

export default PostItem;
