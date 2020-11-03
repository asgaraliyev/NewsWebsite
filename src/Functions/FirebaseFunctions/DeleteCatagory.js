import firebase from "firebase";
import "firebase/firestore";
const theFunction = async (data) => {
  console.log("theFunction -> data", data);
  try {
    let db = firebase.firestore();
    var catagories = db.collection("catagories").doc("catagories");
    catagories.update({
      catagories: firebase.firestore.FieldValue.arrayRemove(data),
    });
    return true;
  } catch (error) {
    return error;
  }
};
export default theFunction;
