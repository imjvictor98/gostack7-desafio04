import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "João Victor",
          avatar: "https://avatars0.githubusercontent.com/u/47538285?s=460&v=4"
        },
        date: "24 de junho de 2019",
        content: "Pessoal, alguém sabe de qualé desse ECOSISTEMA com o React ?",
        comments: [
          {
            id: 2,
            author: {
              name: "Guilherme peixoto",
              avatar:
                "https://avatars3.githubusercontent.com/u/37823327?s=64&v=4"
            },
            content: "Não sei irmão, dá teus pulo. Vou beber minha cerveja!"
          }
        ]
      },
      {
        id: 5,
        author: {
          name: "Lucas Freitas",
          avatar: "https://avatars0.githubusercontent.com/u/47538285?s=460&v=4"
        },
        date: "25 de junho de 2019",
        content: "Alguem me ajuda??? Como funciona um callback em javascript ?",
        comments: [
          {
            id: 8,
            author: {
              name: "Francis da Silva",
              avatar:
                "https://avatars3.githubusercontent.com/u/37823327?s=64&v=4"
            },
            content:
              "Um callback é uma função que executa a partir de uma reação da função invocada"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postList">
        <ul>
          {this.state.posts.map(post => (
            <PostItem key={post.id} data={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
