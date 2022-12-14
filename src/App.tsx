import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Logo } from "../components/Logo";
import { ImageContainer } from "../components/ImageContainer";

import { Images, imagesData, Comments, commentsData } from "../data/data";

function App() {
  const [images, setImages] = useState<Images[]>([]);
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/images`)
      .then((resp) => resp.json())
      .then((imagesFromServer) => setImages(imagesFromServer));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/comments`)
      .then((resp) => resp.json())
      .then((commentsFromServer) => setComments(commentsFromServer));
  }, []);

  function filteredComments(image: Images) {
    return comments.filter((comment) => image.id === comment.imageId);
  }

  function like(image: Images) {
    // copy
    const imagesCopy = structuredClone(images);
    //change and update the copy
    const match = imagesCopy.find((target: Images) => target.id === image.id);
    match.likes++;
    //update the server
    fetch(`http://localhost:4000/images/${image.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(match),
    });
    //update the state
    setImages(imagesCopy);
  }

  function createComment(text: string, image: Images) {
    let newComment = {
      content: text,
      imageId: image.id,
    };

    fetch(`http://localhost:4000/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((resp) => resp.json())
      .then((commentsFromServer) => {
        setComments([...comments, commentsFromServer]);
      });
  }

  function createPost(text : string , link : string){
    let newPost = {
      title: text,
      image: link,
      likes : 0
    }

    fetch(`http://localhost:4000/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((resp) => resp.json())
      .then((postsFromServer) => {
        setImages([...images, postsFromServer]);
      });


  }

  return (
    <>
      <Logo createPost={createPost}/>
      <ImageContainer
        images={images}
        filteredComments={filteredComments}
        like={like}
        createComment={createComment}
      />
    </>
  );
}

export default App;
