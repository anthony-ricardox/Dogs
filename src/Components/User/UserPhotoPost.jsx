import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import UserForm from "../../Hooks/useForm";
import UserFetch from "../../Hooks/userFetch";
import Error from "../Help/Error";
import { PHOTO_POST } from "../../api";

const UserPhotoPost = () => {
  const nome = UserForm();
  const peso = UserForm("number");
  const idade = UserForm("number");
  const [img, setImg] = React.useState({});
  const { data, loading, error, request } = UserFetch();
  const navigate = React.useNavigate()

  React.useEffect(() => {  
    if(data) navigate('/conta')
  },[data, navigate])

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);

    const { response, json } = await request(url, options);

    if (response && response.ok) {
      console.log("Enviado", json);
    } else {
      console.log("deu Errado ", json);
    }
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${styles.photoPost} animeLeft `}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}

        <Error error={error} />

      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          >
            {" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
