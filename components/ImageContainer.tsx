import React from "react";
import { Images, Comments } from "../data/data";

type Props = {
  images: Images[];
  filteredComments: (image: Images) => Comments[];
  like: Function;
  createComment: Function;
};

export function ImageContainer({
  images,
  filteredComments,
  like,
  createComment,
}: Props) {
  return (
    <section className="image-container">
      <article className="image-card">
        {images.map((image) => (
          <>
            <h2 className="title">{image.title}</h2>
            <img src={image.image} className="image" />
            <div className="likes-section">
              <span className="likes">{image.likes}</span>
              <button
                className="like-button"
                onClick={() => {
                  like(image);
                }}
              >
                ♥
              </button>
            </div>

            <ul className="comments">
              {filteredComments(image).map((element) => (
                <>
                  <li key={element.id}>{element.content}</li>
                </>
              ))}
            </ul>
            <form
              action=""
              className="comment-form"
              onSubmit={(event) => {
                createComment(event.target.input.value, image);
              }}
            >
              <input
                type="text"
                name="input"
                className="comment-input"
                placeholder="Add a comment..."
              />
              <button
                className="comment-button"
                type="submit"
                onSubmit={(event) => {
                  createComment(event.target.input.value, image);
                }}
              >
                Post
              </button>
            </form>
          </>
        ))}
      </article>
    </section>
  );
}
