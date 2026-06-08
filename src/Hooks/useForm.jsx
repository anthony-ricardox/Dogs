import { func } from "prop-types";
import React from "react";
const validacao = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    messege: 'Preenhca um email válido',
  }
}

const useForm = () => {
  const [value, setValue] = React.useState("");

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    onChange,
  };
};

export default useForm;
