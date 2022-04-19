import { memo } from "react";
//import {}
//import styles from "./styles.module.css";
import PropTypes from "prop-types";

const FormikView = ({ formik }) => {
  console.log(formik.touched);
  console.log(formik.values.toDo);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="toDo">to do</label>
        <input
          value={formik.values.toDo}
          id="toDo"
          name="toDo"
          type="text"
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

FormikView.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default memo(FormikView);
