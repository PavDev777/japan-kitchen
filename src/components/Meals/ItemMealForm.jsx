import React, { useRef, useState } from "react";
import styles from "./ItemMealForm.module.scss";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

export const ItemMealForm = ({ id, onAddToCart }) => {
  const [isValidAmount, setIsValidAmount] = useState(true);
  const inputAmountRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const inputCurrentRefValue = inputAmountRef.current.value;
    if (
      inputCurrentRefValue.trim().length === 0 ||
      +inputCurrentRefValue < 1 ||
      +inputCurrentRefValue > 10
    ) {
      setIsValidAmount(false);
      return;
    }
    onAddToCart(+inputCurrentRefValue);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        isValidAmount={isValidAmount}
        ref={inputAmountRef}
        label="Количество"
        input={{
          id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button type={"submit"}>Добавить</Button>
    </form>
  );
};
