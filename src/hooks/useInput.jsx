import { useState } from "react";

const useInput = (valid) => {
  const [value, setValue] = useState("");
  const [isTouch, setIsTouch] = useState(null);

  const valueIsValid = valid(value);
  const valueIsInvalid = !valueIsValid && isTouch;

  const onChangeValueHandler = (event) => {
    setValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouch(true);
  };

  const reset = () => {
    setValue("");
    setIsTouch(false);
  };

  return {
    value,
    onChangeValueHandler,
    valueIsValid,
    valueIsInvalid,
    onBlurHandler,
    reset,
  };
};

export default useInput;

export const useInputNumber = (valid, defaultValue) => {
  // const defaultValue
  const [value, setValue] = useState(defaultValue);
  const [isTouch, setIsTouch] = useState(null);

  const valueIsValid = valid(value);
  const valueIsInvalid = !valueIsValid && isTouch;

  const onChangeValueHandler = (event) => {
    setValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouch(true);
  };

  const reset = () => {
    setValue(null);
    setIsTouch(false);
  };

  return {
    value,
    onChangeValueHandler,
    valueIsValid,
    valueIsInvalid,
    onBlurHandler,
    reset,
    defaultValue,
  };
};

export const useImage = () => {
  const [image, setImage] = useState("");

  const onChangeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const reset = () => {
    setImage("");
    // setIsTouch(false);
  };

  return {
    image,
    onChangeHandler,
    reset,
  };
};
