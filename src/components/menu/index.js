import React from "react";
import styles from "./styles.module.css";

import { memo } from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes/routeNames";

const Menu = ({ children }) => {
  return (
    <div className={styles.menu}>
      {children}
      <div>
        <button>
          <Link to={ROUTE_NAMES.HOME_PAGE}>Home</Link>
        </button>
        <button>
          <Link to={ROUTE_NAMES.COUNTER_PAGE}>Counter</Link>
        </button>
        <button>
          <Link to={ROUTE_NAMES.COUNTERS_PAGE}>Counters</Link>
        </button>
        <button>
          <Link to={ROUTE_NAMES.TODO_LIST}>Todo</Link>
        </button>
        <button>
          <Link to={ROUTE_NAMES.FORMIK}>FORMIK</Link>
        </button>
      </div>
    </div>
  );
};

export default memo(Menu);
