import firebase from "firebase";
import "firebase/firestore";
const theFunction = async () => {
  let db = firebase.firestore();
  const result = await db
    .collection("posts")
    .get()
    .then(function (posts) {
      var theData = [];
      posts.forEach(function (post) {
        var info = {
          data: post.data(),
          date: post.data().time.toDate(),
        };
        theData.push(info);
      });
      return theData;
    });
  return result;
};
export default theFunction;
