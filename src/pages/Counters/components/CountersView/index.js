import { memo } from "react";
import PropTypes from "prop-types";
import FuncCounterView from "../../../CounterFunc/components/FuncCounterView";

const CountersView = ({
  counters,
  addCount,
  removeCount,
  resetCounters,
  onIncrement,
  onDecrement,
  onReset,
  onDelete,
  totalSum,
}) => {
  return (
    <div>
      <div>
        {counters.map(({ id, countValue }) => {
          return (
            <FuncCounterView
              key={id}
              id={id}
              countValue={countValue}
              onDecrement={() => onDecrement(id)}
              onIncrement={() => onIncrement(id)}
              onReset={() => onReset(id)}
              onDelete={() => onDelete(id)}
            />
          );
        })}
      </div>
      <div>
        <div>Total counters: {counters.length}</div>
        <div>Total value: {totalSum}</div>
      </div>
      <button onClick={addCount}>Add Counter</button>
      <button onClick={removeCount}>Remove Counter</button>
      <button onClick={resetCounters}>Reset Counter</button>
    </div>
  );
};

// CountersView.propTypes = {
//   counters: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       value: PropTypes.number,
//     })
//   ),
// };
CountersView.propTypes = {
  id: PropTypes.string,
  countValue: PropTypes.number,
};

export default memo(CountersView);
