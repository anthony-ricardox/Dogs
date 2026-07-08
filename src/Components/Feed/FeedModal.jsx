import React from "react";
import styles from "./FeedModal.module.css";
import userFetch from "../../Hooks/userFetch";
import { PHOTO_GET } from "../../api";
import Error from "../Help/Error";
import Loading from "../Help/Loading";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = userFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent  data={data}/>}
    </div>
  );
};

export default FeedModal;
