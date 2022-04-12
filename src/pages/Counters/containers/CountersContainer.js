import { useState } from "react";
import { useCallback } from "react";
import { memo } from "react";
import { v4 as uuid } from "uuid";
import CountersView from "../components/CountersView";

const CountersContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCount = useCallback(() => {
    const newCount = {
      id: uuid(),
      countValue: 0,
    };
    setCounters([...counters, newCount]);
    console.log(newCount.id);
    console.log(...counters);
  });

  const handleRemoveCount = useCallback(() => {
    setCounters((counters) => {
      const copyCounters = [...counters];
      copyCounters.pop();
      return copyCounters;
    });
  }, []);

  const handleResetCounters = useCallback(() => {
    setCounters([]);
  }, []);
  return (
    <CountersView
      addCount={handleAddCount}
      counters={[...counters]}
      removeCount={handleRemoveCount}
      resetCounters={handleResetCounters}
    />
  );
};

export default memo(CountersContainer);
