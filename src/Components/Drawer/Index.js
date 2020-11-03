import { Drawer } from "antd";
import { change_Drawer } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import GettingCatagories from "../../Functions/FirebaseFunctions/GettingCatagories";
import { catagories_Action } from "../../Redux/Actions";
import { useEffect } from "react";
import Menu from "./Components/Menu";
import Search from "./Components/Search";


const theDrawer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.drawer.isMenuOpen);
  const componentName = useSelector((state) => state.drawer.componentName);
  const catagoriesFromRedux = useSelector((state) => state.catagories);
  useEffect(() => {
    dispatch(change_Drawer("CLOSE"));
    GettingCatagories().then((theCatagories) => {
      dispatch(catagories_Action(theCatagories));
    });
  }, []);
  const closeHandler = () => {
    dispatch(change_Drawer("CLOSE"));
  };
  return (
    <>
      <Drawer
        placement="top"
        height={"fit-content"}
        visible={isMenuOpen}
        onClose={closeHandler}
      >
        {componentName === "MENU" ? (
          <Menu catagories={catagoriesFromRedux} />
        ) : (
          <Search />
        )}
      </Drawer>
    </>
  );
};

export default theDrawer;
