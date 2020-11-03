const initialState = [
  "World",
  "Economy",
  "Science",
  "Politics",
  "Technology",
  "Sport",
  "Business",
];

const catagories = (state = initialState, action) => {
  if (action.type === "CHANGE_CATAGORIES") {
    return action.data;
  } else {
    return state;
  }
};
export default catagories