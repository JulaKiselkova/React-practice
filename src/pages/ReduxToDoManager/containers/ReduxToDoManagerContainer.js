import { useState, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";
import ReduxToDoView from "../components/Layout";
import { CREATE_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_TODO } from "../actions";

const ReduxToDoContainer = () => {
  const dispatch = useDispatch();

  const toDos = useSelector((store) => store.toDoManager.toDos);

  //const { toDos } = useSelector((store) => store.toDoManager);

  let formik = useFormik({
    initialValues: {
      toDo: "init",
    },
    onSubmit: (initialValues) => {
      formik = initialValues;
      console.log(JSON.stringify(initialValues));
    },
  });

  console.log(toDos);

  const handleAddToDo = () => {
    dispatch(CREATE_TODO());
  };

  const handleDeleteToDo = (id) => {
    dispatch(DELETE_TODO(id));
  };

  const handleCompleteToDo = (id) => {
    dispatch(COMPLETE_TODO(id));
  };
  return (
    <ReduxToDoView
      // value={value.values.toDo}
      // onChange={handleChange}
      // onSubmit = {handleSubmit}
      addTodo={handleAddToDo}
      toDos={toDos}
      onDelete={handleDeleteToDo}
      onComplete={handleCompleteToDo}
      formik={formik}
      //onDelete = {handleDeleteToDo}
      //   removeCount={handleRemoveCount}
      //   resetCounters={handleResetCounters}
      //   onIncrement={handleIncrement}
      //   onDecrement={handleDecrement}
      //   onReset={handleReset}
      //   onDelete={handleThisCounterRemove}
    />
  );
};

export default memo(ReduxToDoContainer);
