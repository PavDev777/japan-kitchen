import React from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

export const Input = React.forwardRef(
  ({ label, input, isValidAmount }, ref) => {
    const classes = classNames([styles.inputForm], {
      [styles.invalidFromData]: !isValidAmount,
    });

    return (
      <div className={styles.input}>
        <label className={styles.inputLabel} htmlFor={input.id}>
          {label}
        </label>
        <input ref={ref} {...input} className={classes} />
      </div>
    );
  }
);
