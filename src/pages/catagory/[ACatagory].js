import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/";
import App from "../_app";

import GettingCatagories from "../../Functions/FirebaseFunctions/GettingCatagories";
const theFunc = (props) => {
  const catagoryName = props.data.toLowerCase();

  if (catagoryName !== null) {
    if (catagoryName) {
      return (
        <>
          <Header
            info={{
              type: "home",
              title: `${catagoryName} News`,
            }}
          ></Header>
        </>
      );
    } else {
      return <h1> render not found page</h1>;
    }
  } else {
    return <h1>Loading...</h1>;
  }
};

export async function getServerSideProps(context) {
  const catagoryName = context.query.ACatagory;
  var catagories2 = await GettingCatagories();
  var catagories = [];
  catagories2.forEach((catalog) => {
    catagories.push(catalog.toLowerCase());
  });

  var result = null;
  if (catagories && catagories.includes(catagoryName.toLowerCase())) {
    result = catagoryName;
  } else {
    result = false;
  }
  return {
    props: {
      data: result,
    },
  };
}

export default theFunc;
