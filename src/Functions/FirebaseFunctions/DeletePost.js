import firebase from "firebase";
import "firebase/firestore";
const theFunction = async (link) => {
  let db = firebase.firestore();
  db.collection("posts")
    .doc(link)
    .delete()
    .then(function () {
      console.log("Document successfully deleted!");
      return true;
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
      return false;
    });
};
export default theFunction;
