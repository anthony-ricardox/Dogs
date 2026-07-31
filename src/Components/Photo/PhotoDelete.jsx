import React from "react";
import styles from "./PhotoDelete.module.css";
import userFetch from "../../Hooks/userFetch";
import { PHOTO_DELETE } from "../../api";

const PhotoDelete = ({ id }) => {
  const { loading, request } = userFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar? ");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <div>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </div>
  );
};

export default PhotoDelete;
