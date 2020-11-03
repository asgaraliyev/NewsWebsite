import firebase from "firebase";
import "firebase/firestore";
const theFunction = async () => {
  let db = firebase.firestore();
  const result = await db
    .collection("catagories")
    .get()
    .then(function (querySnapshot) {
      var theData = [];
      querySnapshot.forEach(function (doc) {
        theData = doc.data().catagories;
      });
      return theData;
    });
  return result;
};
export default theFunction;

