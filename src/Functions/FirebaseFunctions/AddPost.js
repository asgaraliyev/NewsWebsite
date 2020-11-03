import firebase from "firebase";
import "firebase/firestore";
const theFunction = async (data) => {
  var catagoryOfThePost = await db
    .collection("catagories")
    .get()
    .then(function (querySnapshot) {
      var theData = [];
      var theCatagory = postInformations.catagory;
      querySnapshot.forEach(function (doc) {
        theData = doc.data().catagories;
        console.log("addPostFunction -> theData", theData);
      });
      const isTheCatagoryExit = theData.includes(postInformations.catagory);
      console.log("addPostFunction -> isTheCatagoryExit", isTheCatagoryExit);
      if (!isTheCatagoryExit) {
        theCatagory = theData[0];
      }
      console.log("addPostFunction -> theCatagory", theCatagory);
      return theCatagory;
    });
  var views;
  if (postInformations.views === null) {
    views = Math.floor(Math.random() * 100 + 1);
  } else {
    views = postInformations.views;
  }
  var thePost = {
    author: postInformations.author,
    body: postInformations.body,
    catagory: catagoryOfThePost,
    image: postInformations.image,
    time: firebase.firestore.Timestamp.fromDate(new Date()),
    title: postInformations.title,
    link: postInformations.link,
    views: views,
    isAuthor: postInformations.isAuthor,
  };
  try {
    db.collection("posts")
      .doc(thePost.link)
      .set(thePost)
      .then(console.log("document successfully written!"));
  } catch (error) {
    console.log("addPostFunction -> error", error);
  }
};
export default theFunction;
