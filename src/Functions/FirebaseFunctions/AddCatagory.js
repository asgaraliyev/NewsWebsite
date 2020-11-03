import firebase from "firebase";
import "firebase/firestore";
const theFunction = async (data) => {
  try {
    let db = firebase.firestore();
    var catagories = db.collection("catagories").doc("catagories");
    catagories.update({
      catagories: firebase.firestore.FieldValue.arrayUnion(data),
    });
    return true;
  } catch (error) {
    return false;
  }
};
export default theFunction;
