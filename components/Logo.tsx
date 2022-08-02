import React from "react";
import { Newpost } from "./Newpost";

type Prop ={
  createPost : Function
}

export function Logo({createPost} : Prop) {
  return (
    <>
      <img className="logo" src="assets/hoxtagram-logo.png" />
      <Newpost createPost={createPost}/>
    </>
  );
}
