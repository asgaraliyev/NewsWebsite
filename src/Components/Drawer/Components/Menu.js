import { List, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { change_Drawer } from "../../../Redux/Actions";
const Index = ({ catagories }) => {
  const dispatch = useDispatch();
  const closeDrawer = () => {
    dispatch(change_Drawer("CLOSE"));
  };
  return (
    <>
      <Link href="/">
        <Image
          src="/Images/logo.webp"
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </Link>
      <span id="catagories" className="side-by-side">
        <List
          style={{
            cursor: "pointer",
          }}
          size="large"
          header={<h1>Catagories</h1>}
          dataSource={catagories}
          renderItem={(item) => (
            <List.Item onClick={closeDrawer}>
              <Link href={`/catagory/${item}`}>
                <strong>{item}</strong>
              </Link>
            </List.Item>
          )}
        ></List>
      </span>
      <br></br>
      <br></br>
      <span className="side-by-side">
        <h1>About Us</h1>
        <Typography>
          Lorem proident proident veniam culpa nisi non enim. Et consectetur ex
          duis id ullamco. Esse irure quis irure quis. Officia amet qui mollit
          proident ad tempor excepteur est et anim. Incididunt cupidatat
          reprehenderit irure do labore aute exercitation. Commodo laboris non
          sunt aliquip cillum non exercitation sit. Labore veniam sunt
          exercitation amet voluptate do duis sunt aliquip laborum sit in. Nulla
          ipsum aliqua laboris occaecat non deserunt fugiat amet veniam.
          Exercitation fugiat aute cillum deserunt consectetur ut exercitation
          sunt adipisicing duis labore sint ea sit. Nisi quis proident dolore id
          sint aliqua et. Commodo mollit do ut laboris aliqua tempor laborum
          irure et eu. Qui cupidatat ut consequat ullamco sunt nulla voluptate
          consectetur enim. Dolore non sit excepteur ut eu consectetur fugiat
          minim id. Ad elit in laboris incididunt eiusmod do in mollit laboris
          eu eu eiusmod do dolore. Consequat adipisicing cupidatat veniam
          officia velit. Est adipisicing ex dolore reprehenderit dolore ex
          laborum ex cillum occaecat labore. Laborum quis ad nostrud eiusmod
          occaecat quis cillum nisi occaecat proident elit adipisicing
          cupidatat.
        </Typography>
      </span>
    </>
  );
};
export default Index;
