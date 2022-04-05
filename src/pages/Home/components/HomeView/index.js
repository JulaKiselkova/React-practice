import PropTypes from "prop-types";
import Menu from "../../../../components/menu";

const HomeView = () => {
  return (
    <div>
      HOME PAGE
      <Menu></Menu>
    </div>
  );
};

HomeView.propTypes = {
  switchToCounter: PropTypes.func,
};

export default HomeView;
