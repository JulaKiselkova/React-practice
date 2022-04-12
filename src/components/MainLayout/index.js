import Menu from "../menu";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default MainLayout;
