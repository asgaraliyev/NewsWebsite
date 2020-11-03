// import { Colors } from "../../Config/Colors";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { change_Drawer } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import store from "../../Redux";
export default function Header(props) {
  const { type, title, classNamee, lightContent } = props.info;
  var backArrowClassName = "icon";
  var titleClassName = "";
  if (lightContent) {
    backArrowClassName += " white";
    titleClassName += "white";
  }
  const router = useRouter();
  const dispatch = useDispatch();
  const changeDrawer = (command) => {
    dispatch(change_Drawer(command));
  };
  const backBtnHandler = () => {
    changeDrawer("CLOSE");
    router.back();
  };

  return (
    <header className={classNamee}>
      <div className="side left">
        {type === "home" ? (
          <div
            className="menu-by-red-cirlce"
            onClick={() => changeDrawer("OPEN_MENU")}
          >
            <MenuIcon></MenuIcon>
            <span>1</span>
          </div>
        ) : (
          <div className="menu-by-red-cirlce" onClick={backBtnHandler}>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          </div>
        )}
      </div>
      <div className="side center">
        <h1 className={titleClassName}>{title}</h1>
      </div>
      <div className="side right">
        {type === "anews" ? (
          <div
            style={{ width: "100%" }}
            className="menu-by-red-cirlce"
            onClick={() => changeDrawer("OPEN_MENU")}
          >
            <MenuIcon></MenuIcon>
            <span>1</span>
          </div>
        ) : (
          <div
            className="search-by-red-cirlce"
            onClick={() => changeDrawer("OPEN_SEARCH")}
          >
            <SearchIcon></SearchIcon>
          </div>
        )}
      </div>
    </header>
  );
}
