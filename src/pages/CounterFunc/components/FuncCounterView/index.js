import { memo } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const FuncCounterView = ({
  countValue,
  onIncrement,
  onDecrement,
  onReset,
  id,
  onDelete,
}) => {
  const isEven = countValue % 2 === 0;
  return (
    <div>
      <div className={styles.wrapper}>
        <p>{id}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
        <div className={styles.screen}>{countValue}</div>
        <div
          className={`${styles.numInfo} ${
            isEven ? styles.highlightOdd : styles.highlightEven
          }`}
        >
          {`The number is ${isEven ? "even" : "odd"}`}
        </div>
        <div className={styles.buttons}>
          <button onClick={() => onDecrement(id)}>-</button>
          <button onClick={() => onReset(id)}>Reset</button>
          <button onClick={() => onIncrement(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

FuncCounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(FuncCounterView);
