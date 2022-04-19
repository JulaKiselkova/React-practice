import { memo } from "react";
import { Fragment, useCallback, useState } from "react";
import PropTypes from "prop-types";
import ToDoCardView from "../../../ToDoCard/components/Layout";
import FormikView from "../../formik/components/Layout";
//import FormikContainer from "../../formik/containers/FormikContainer";

const ReduxToDoView = ({ addTodo, onDelete, toDos, onComplete, formik }) => {
  const [inputValue, setInputValue] = useState("");

  //   const handleToDoChange = useCallback((event) => {
  //     setInputValue(event.target.value);
  //   }, []);

  //   const handleFormReset = useCallback(() => {
  //     setInputValue(inputValue);
  //   }, []);

  return (
    <div>
      <button onClick={addTodo}>Create</button>
      <FormikView formik={formik} handleSubmit={addTodo}></FormikView>
      {toDos.map(({ id}) => {
        return (
          <div>
            <ToDoCardView
              key={id}
              id={id}
              toDoValue={formik.values.toDo}
              onDelete={() => onDelete(id)}
              onComplete={() => onComplete(id)}
              onEdit={() => {}}
            />
          </div>
        );
      })}
      {/* <button onClick={addTodo}>Add Counter</button> */}
      {/* <button onClick={removeCount}>Remove Counter</button>
      <button onClick={resetCounters}>Reset Counter</button> */}
    </div>
  );
};
// ToDoCardView.propTypes = {
//   id: PropTypes.string,
//   countValue: PropTypes.number,
// };

export default memo(ReduxToDoView);
