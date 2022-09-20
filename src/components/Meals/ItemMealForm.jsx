import React from "react";
import styles from "./ItemMealForm.module.scss";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

export const ItemMealForm = () => {
  return (
    <form className={styles.form}>
      <Input
        label="Количество"
        input={{
          id: "amount",
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
