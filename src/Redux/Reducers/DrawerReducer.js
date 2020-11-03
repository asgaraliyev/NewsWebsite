const initialState = {
  isMenuOpen: false,
  componentName: null,
};
const drawer_Reducer = (state = initialState, action) => {
  var newState = { ...state };
  if (action.type === "OPEN_MENU") {
    newState = {
      isMenuOpen: true,
      componentName: "MENU",
    };
  } else if (action.type === "OPEN_SEARCH") {
    newState = {
      isMenuOpen: true,
      componentName: "SEARCH",
    };
  } else if (action.type === "CLOSE") {
    newState = {
      isMenuOpen: false,
      componentName: null,
    };
  }
  console.log(`%c isMenuOpen: ${newState.isMenuOpen} `, "background: #222; color: #bada55");
  console.log(`%c componentName: ${newState.componentName} `, "background: #222; color: #bada55");
  return newState;
};
export default drawer_Reducer;
