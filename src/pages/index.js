import Header from "../Components/Header/";
import App from "./_app";
import { useState, useEffect } from "react";
import TheSlider from "../Components/Slider";
import { useSelector } from "react-redux";
import GettingPosts from "../Functions/FirebaseFunctions/GettingPosts";
export default function Index() {
  return (
    <>
      <App Component={Home}></App>
    </>
  );
}
function Home() {
  const [posts, setPosts] = useState([]);
  const catagories = useSelector((state) => state.catagories);
  useEffect(() => {
    GettingPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <>
      <Header
        info={{
          type: "home",
          title: "News",
        }}
      ></Header>
      <TheSlider
        slidesToShow={6}
        autoplay={true}
        arrows={true}
        data={{
          type: "CATAGORIES",
          dataItSelf: catagories,
        }}
        responsive={[
          {
            breakpoint: 600,
            settings: {
              arrows:false,
              slidesToShow: 3,
            },
          },
        ]}
      ></TheSlider>
      <TheSlider
        rtl={true}
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={true}
        arrows={true}
        data={{
          type: "TRENDING",
          dataItSelf: posts,
        }}
        responsive={[
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 4,
              arrows:false,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      ></TheSlider>
      <TheSlider
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        data={{
          type: "AUTHORS",
          dataItSelf: posts,
        }}
        arrows={true}
        responsive={[
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 850,
            settings: {
              arrows:false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      ></TheSlider>
    </>
  );
}
