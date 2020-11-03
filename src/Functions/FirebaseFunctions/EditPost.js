import firebase from "firebase";
import "firebase/firestore";
import DeletePost from "./DeletePost";
import AddPost from "./AddPost";
const theFunction = async (data) => {
  DeletePost(data.link).then(
    (result = {
      if(result) {
        AddPost(data);
      },
    })
  );
};
export default theFunction;
