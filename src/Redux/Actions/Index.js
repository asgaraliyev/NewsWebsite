
export const catagories_Action = (catagories) => {
  
  return {
    type: "CHANGE_CATAGORIES",
    data: catagories,
  };
};

export const change_Drawer = (actionType) => {
  return {
    type: actionType,
  };
};
