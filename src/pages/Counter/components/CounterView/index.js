//import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Menu from "../../../../components/menu";

const CounterView = ({
  countValue,
  onIncrement,
  onDecrement,
  onReset,
  parityType,
}) => {
  return (
    <div>
      <Menu></Menu>
      <div className={styles.wrapper}>
        <div className={styles.screen}>{countValue}</div>
        <div
          className={`${styles.numInfo} ${
            parityType === "odd" ? styles.highlightOdd : styles.highlightEven
          }`}
        >
          {`The number is ${parityType}`}
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
  parityType: PropTypes.string.isRequired,
};

export default CounterView;
