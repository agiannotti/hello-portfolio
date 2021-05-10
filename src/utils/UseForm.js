import { useState } from 'react';

export const UseForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
};
