import React from "react";
import Enviar from "../../Assents/enviar.svg?react";
import userFetch from "../../Hooks/userFetch";
import { COMMENT_POST } from "../../api";
import Error from '../Help/Error'

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState("");
  const { error, request } = userFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const {response, json} = await request(url, options);
    if (response.ok) {
        setComment('')
      setComments((comments) => [...comments, json]);
    }
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
      <Error error={error}/>
    </form>
  );
};

export default PhotoCommentsForm;
