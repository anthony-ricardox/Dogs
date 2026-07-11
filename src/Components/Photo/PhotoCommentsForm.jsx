import React from "react";
import Enviar from "../../Assents/enviar.svg?react"

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState("");
  return (
    <form>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => {
          setComment(comment.value);
        }} 
      />
      <button> <Enviar/> </button>
    </form>
  );
};

export default PhotoCommentsForm;
''