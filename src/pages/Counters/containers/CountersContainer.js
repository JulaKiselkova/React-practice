import { useState, useCallback, memo } from "react";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";
import CountersView from "../components/CountersView";

const CountersContainer = () => {
  const [counters, setCounters] = useState([]);
  const isEven = (number) => number % 2 === 0;

  const handleAddCount = () => {
    setCounters((prevState) => {
      const newCount = {
        id: uuid(),
        countValue: 0,
      };
      const updateCounters = prevState.map(({ id, countValue }) => {
        return {
          id,
          countValue: isEven(countValue) ? countValue + 1 : countValue,
        };
      });
      console.log(updateCounters);
      return [...updateCounters, newCount];
    });
  };

  const handleRemoveCount = useCallback(() => {
    setCounters((counters) => {
      const copyCounters = [...counters];
      copyCounters.pop();

      const updateCounters = copyCounters.map(({ id, countValue }) => {
        return {
          id,
          countValue: !isEven(countValue) ? countValue - 1 : countValue,
        };
      });
      return updateCounters;
    });
  }, []);

  const handleResetCounters = useCallback(() => {
    setCounters([]);
  }, []);

  const handleIncrement = useCallback((id) => {
    setCounters((prevState) => {
      const copy = cloneDeep(prevState);
      const theItem = copy.find((counter) => counter.id === id);
      theItem.countValue = theItem.countValue + 1;
      return copy;
    });
  }, []);

  const handleDecrement = useCallback((id) => {
    setCounters((prevState) => {
      const copy = cloneDeep(prevState);
      const theItem = copy.find((counter) => counter.id === id);
      if (theItem.countValue > 0) {
        theItem.countValue = theItem.countValue - 1;
      }
      return copy;
    });
  }, []);

  const handleReset = useCallback((id) => {
    setCounters((prevState) => {
      const copy = cloneDeep(prevState);
      const theItem = copy.find((counter) => counter.id === id);
      theItem.countValue = 0;
      return copy;
    });
  }, []);

  const handleThisCounterRemove = useCallback((id) => {
    setCounters((prevState) => {
      const copy = cloneDeep(prevState);
      const theItemIndex = copy.findIndex((counter) => counter.id === id);
      copy.splice(theItemIndex, 1);
      const updateCounters = copy.map(({ id, countValue }) => {
        return {
          id,
          countValue: !isEven(countValue) ? countValue - 1 : countValue,
        };
      });
      return updateCounters;
    });
  }, []);

  const totalSum = counters.reduce((sum, counter) => {
    sum += counter.countValue;
    return sum;
  }, 0);
  return (
    <CountersView
      addCount={handleAddCount}
      counters={counters}
      removeCount={handleRemoveCount}
      resetCounters={handleResetCounters}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
      onDelete={handleThisCounterRemove}
      totalSum={totalSum}
    />
  );
};

export default memo(CountersContainer);
