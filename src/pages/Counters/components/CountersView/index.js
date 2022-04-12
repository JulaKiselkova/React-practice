
import { memo } from "react";
import PropTypes from "prop-types";
import FuncCounterContainer from "../../../CounterFunc/containers/FuncCounterContainer";

const CountersView = ({ counters, addCount, removeCount, resetCounters }) => {
  return (
    <div>
      <div>
        {counters.map((counter) => {
          return (
            <FuncCounterContainer
              key={counter.id}
              id={counter.id}
              countValue={counter.countValue}
            />
          );
        })}
      </div>
      <div>
        <div>Total counters: {counters.length}</div>
        {/* <div>Total value: {countersSumValue}</div> */}
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
