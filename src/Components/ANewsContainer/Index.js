import Middle from "../ImageMidller";
import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Link from "next/link";
TimeAgo.locale(en);

const Index = ({
  type,
  title,
  time,
  width,
  height,
  image,
  description,
  link,
}) => {
  const [theDesc, setTheDesc] = useState(null);

  useEffect(() => {
    function extractContent(s) {
      var span = document.createElement("span");
      span.innerHTML = s;
      return span.textContent || span.innerText;
    }
    if (description && description !== null) {
      var body = extractContent(description);
      body = body.slice(0, 150);
      body = body.split(" ");
      body = body.slice(0, body.length - 2);
      var newBody = "";
      body.map((word) => {
        newBody += word + " ";
      });
      body = newBody;
      body += "...";
      setTheDesc(body);
    }
  }, []);
  if (type === 0) {
    return <Middle width={width} height={height} image={image}></Middle>;
  } else if (type === 1) {
    return (
      <Link href={`/news/${link}`}>
        <div className="a-news-container">
          <div className="image side">
            <Middle width={width} height={height} image={image}></Middle>
          </div>
          <div className="content side">
            <div className="texts">
              <p className="title">{title}</p>
              <ReactTimeAgo date={time} locale="en-EN" timeStyle="round" />
            </div>
          </div>
        </div>
      </Link>
    );
  } else if (type === 2) {
    return (
      <Link href={`/news/${link}`}>
        <div className="two-news-container">
          <div className="image side">
            <Middle width={width} height={height} image={image}></Middle>
          </div>
          <div className="content side">
            <div className="texts">
              <p className="title">{title}</p>
              <p className="description">{theDesc}</p>
              <ReactTimeAgo date={time} locale="en-EN" timeStyle="round" />
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return <Middle width={width} height={height} image={image}></Middle>;
};
Index.defaultProps = {
  type: 0,
  title: "Not found",
  width: false,
  height: true,
  image:
    "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg",
  description: ``,
  time: Date(),
};

export default Index;
