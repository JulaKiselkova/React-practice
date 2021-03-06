import { memo } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const CounterView = ({
  countValue,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  const isEven = countValue % 2 === 0;
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.screen}>{countValue}</div>
        <div
          className={`${styles.numInfo} ${
            isEven ? styles.highlightOdd : styles.highlightEven
          }`}
        >
          {`The number is ${isEven ? "even" : "odd"}`}
        </div>
        <div className={styles.buttons}>
          <button onClick={onDecrement}>-</button>
          <button onClick={onReset}>Reset</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default memo(CounterView);
