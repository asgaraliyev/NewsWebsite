import { Avatar } from "@material-ui/core";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const Index = ({ backgroundC, link, image, author, time, title }) => {
  const classes = useStyles();

  return (
    <Link key={link} href={`/news/${link}`}>
      <div
        className="author"
        style={{
          background: backgroundC,
        }}
        className={`author`}
      >
        <span className="profile-photo">
          <div>
            <Avatar alt={author} src={image} className={classes.large}></Avatar>
          </div>
        </span>
        <span>
          <p>{author}</p>
          <h5>{title}</h5>
          <ReactTimeAgo date={time} locale="en-EN" timeStyle="round" />
        </span>
      </div>
    </Link>
  );
};
export default Index;
