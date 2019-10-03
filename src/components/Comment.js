import React from "react";

function Comment(props) {
  return (
    <li>
      <img src={props.data.author.avatar} alt="Foto de perfil no comentário" />
      <p>
        {props.data.author.name} {props.data.content}
      </p>
    </li>
  );
}
export default Comment;
