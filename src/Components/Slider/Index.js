import Slider from "react-slick";
import Link from "next/link";
import AnAuthor from "../Author";
import ANewsContainer from "../../Components/ANewsContainer";
const Index = ({
  dots,
  infinite,
  speed,
  autoplay,
  slidesToShow,
  slidesToScroll,
  autoplaySpeed,
  pauseOnHover,
  rtl,
  arrows,
  responsive,
  data,
}) => {
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    autoplay: autoplay,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: pauseOnHover,
    arrows: arrows,
    rtl: rtl,
    responsive: responsive,
  };
  var items = [];
  if (data.dataItSelf && data.type === "CATAGORIES") {
    const catagories = data.dataItSelf;
    catagories.map((catagory) => {
      items.push(
        <div className="catagory-item">
          <Link href={`/catagory/${catagory}`}>
            <h3 className="title">{catagory}</h3>
          </Link>
        </div>
      );
    });
  } else if (data.dataItSelf && data.type === "AUTHORS") {
    const posts = data.dataItSelf;
    posts.map((post, index) => {
      var background_Color = "#cb822e";
      if (index % 2 === 0) {
        background_Color = "#2300a7";
      }
      if (post.data.isAuthor) {
        items.push(
          <AnAuthor
            backgroundC={background_Color}
            title={post.data.title}
            link={post.data.link}
            image={post.data.image}
            time={post.date.toString()}
            author={post.data.author}
          ></AnAuthor>
        );
      }
    });
  } else if (data.dataItSelf && data.type === "TRENDING") {
    const posts = data.dataItSelf;
    var totalNumber = 0;
    posts.map((post) => {
      totalNumber += post.data.views;
    });
    var avaragePopulation = totalNumber / posts.length;
    posts.map((post) => {
      if (post.data.views > avaragePopulation) {
        items.push(
          <ANewsContainer
            type={1}
            link={post.data.link}
            image={post.data.image}
            time={post.date}
            title={post.data.title}
          ></ANewsContainer>
        );
      }
    });
  }
  return (
    <div className="a-slider">
      <Slider {...settings}>
        {items}
        {/* <div className="catagory-item">
          <h3 className="title">Ecenomoy</h3>
        </div>
        <div className="catagory-item">
          <h3 className="title">Ecenomoy</h3>
        </div>
        <div className="catagory-item">
          <h3 className="title">Ecenomoy</h3>
        </div>
        <div className="catagory-item">
          <h3 className="title">Ecenomoy</h3>
        </div>
        <div className="catagory-item">
          <h3 className="title">Ecenomoy</h3>
        </div>
        <div className="catagory-item">
          <h3 className="title">Ecenomoy</h3>
        </div>
        <div className="catagory-item">
          <h3 className="title">Ecenomoy</h3>
        </div>
        <div className="catagory-item">
          <h3 className="title">Ecenomoy</h3>
        </div> */}
      </Slider>
    </div>
  );
};
Index.defaultProps = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  rtl: false,
  arrows: false,
  responsive: [],
};
export default Index;
