import { useState, useCallback, memo } from "react";
import ToDoCardView from "../components/Layout";

const ToDoCardContainer = () => {
  const [toDoValue, setCountValue] = useState('0)');
  const [id, setId] = useState("1");

  const handleEdit = useCallback(() => {
    setCountValue(`${toDoValue}:)))))`);
    console.log(toDoValue);
  }, [toDoValue]);

  const handleComplete = useCallback(() => {
    setCountValue(toDoValue + 1);
    console.log(toDoValue);
  }, [toDoValue]);

  const handleDel = useCallback(() => {
    setCountValue(toDoValue + 1);
    console.log(toDoValue);
  }, [toDoValue]);

  return (
    <div>
      <ToDoCardView
        id={id}
        toDoValue={toDoValue}
        onEdit={handleEdit}
        onComplete={handleComplete}
        onDelete={handleDel}
      />
    </div>
  );
};

export default memo(ToDoCardContainer);
