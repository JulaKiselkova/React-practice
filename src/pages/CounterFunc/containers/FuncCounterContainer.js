import React from "react";
import { useState, memo, useCallback } from "react";
//import { v4 as uuid } from "uuid";
import FuncCounterView from "../components/FuncCounterView";

const FuncCounterContainer = () => {
  const [countValue, setCountValue] = useState(0);
  const [id, setId] = useState("");

  const handleIncrement = useCallback(() => {
    setCountValue(countValue + 1);
    console.log(countValue);
  }, [countValue]);
  const handleDecrement = useCallback(() => {
    if (countValue > 0) {
      setCountValue(countValue - 1);
    }
  }, [countValue]);
  const handleOnReset = useCallback(() => {
    setCountValue(0);
  }, []);

  return (
    <div>
      <FuncCounterView
        id={id}
        countValue={countValue}
        onReset={handleOnReset}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default memo(FuncCounterContainer);
