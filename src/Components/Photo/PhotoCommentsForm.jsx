import React from "react";
import Enviar from "../../Assents/enviar.svg?react";
import userFetch from "../../Hooks/userFetch";
import {COMMENT_POST} from '../../api'

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState("");
  const { error, request } = userFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST( id, {comment})
    await request(url, options);
    console.log(comment)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => {
          setComment(target.value);
        }}
      />
      <button>
        {" "}
        <Enviar />{" "}
        
      </button>
      
    </form>
  );
};

export default PhotoCommentsForm;
