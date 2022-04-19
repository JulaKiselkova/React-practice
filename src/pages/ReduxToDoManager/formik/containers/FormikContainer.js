import { useFormik } from "formik";
import { useState, useCallback, memo } from "react";
import FormikView from "../components/Layout";

//handleSubmit, handleChange, errors, touched, handleBlur
const FormikContainer = () => {
  let formik = useFormik({
    initialValues: {
      toDo: "lll",
    },
    onSubmit: (initialValues) => {
      formik = initialValues;
      console.log(JSON.stringify(initialValues));
    },
  });

  return (
    <div>
      <FormikView
        //id={id}
        //val={formik.values.toDo}
        formik={formik}
        //onChange={handleChange}
        //onSubmit={handleSubmit}
      />
    </div>
  );
};

export default memo(FormikContainer);
