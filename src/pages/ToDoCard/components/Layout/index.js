import { memo } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const ToDoCardView = ({ toDoValue, id, onEdit, onComplete, onDelete }) => {
  //const isEven = toDoValue % 2 === 0;
  return (
    <div>
      <div className={styles.wrapper}>
        <p>{id}</p>
        <button className={styles.delete} onClick={() => onDelete(id)}>
          Delete
        </button>
        <div className={styles.screen}>{toDoValue}</div>
        {/* <div
          className={`${styles.numInfo} ${
            isEven ? styles.highlightOdd : styles.highlightEven
          }`}
        >
          {`The number is ${isEven ? "even" : "odd"}`}
        </div> */}
        <div className={styles.buttons}>
          <button className={styles.edit} onClick={() => onEdit(id)}>
            Edit
          </button>
          <button className={styles.complete} onClick={() => onComplete(id)}>
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

ToDoCardView.propTypes = {
  toDoValue: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(ToDoCardView);
