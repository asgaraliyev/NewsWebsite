import Image from "material-ui-image";

const Index = ({ image, width, height }) => {
  var theClass = "width";
  if (height) {
    theClass = "height";
  } else {
    theClass = "width";
  }
  return (
    <div className={`image-center ${theClass}`}>
      <Image src={image}></Image>
    </div>
  );
};
export default Index;
