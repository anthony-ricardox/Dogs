import React from "react";
import styles from "./FeedModal.module.css";
import userFetch from "../../Hooks/userFetch";
import { PHOTO_GET } from "../../api";
import Error from "../Help/Error";
import Loading from "../Help/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = userFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideCLick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }
  return (
    <div className={styles.modal} onClick={handleOutsideCLick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
