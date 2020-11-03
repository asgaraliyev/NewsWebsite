import React, { Component } from "react";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { ListItem, List, ListItemIcon } from "@material-ui/core";
import getAllPosts from "../../../Functions/FirebaseFunctions/GettingPosts";
import Link from "next/link";
import { change_Drawer } from "../../../Redux/Actions";
import { connect } from "react-redux";

import "firebase/firestore";
// import SuperMarket from "../../Redux/SuperMarket/SuperMarket";
// import { change_Menu_Stuation_Action } from "../../Redux/Actions/index";
class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  render() {
    const dispatch = this.props.dispatch;
    const closeDrawer = () => {
      dispatch(change_Drawer("CLOSE"));
    };
    const inputHandler = (e) => {
      const self = this;
      const searched = e.target.value.toLowerCase();
      const searchedArray = searched.split(" ");
      const allPosts = [];
      getAllPosts().then((posts) => {
        posts.map((post) => {
          const theTitle = post.data.title.toLowerCase();
          var wordCounter = 0;
          var isThere = false;
          searchedArray.map((word) => {
            if (theTitle.indexOf(word) > -1) {
              isThere = true;
              wordCounter += 1;
            }
          });
          if (isThere) {
            var info = {
              countedWord: wordCounter,
              data: post.data,
              date: post.date,
            };
            allPosts.push(info);
          }
        });
        allPosts.sort(function (a, b) {
          return b.countedWord - a.countedWord;
        });
        self.setState(
          (self.state = {
            posts: allPosts,
          })
        );
      });
    };
    return (
      <>
        <div id="search-text-field">
          <div className="search-bar-and-button">
            <div className="search-bar">
              <input
                placeholder="Search something..."
                onChange={inputHandler}
              ></input>
            </div>
          </div>
        </div>
        <div id="search-result-area">
          <div className="result">
            <br></br>
            <br></br>
            <List>
              {this.state.posts.map((post) => {
                return (
                  <li onClick={closeDrawer} key={post.data.link}>
                    <Link href={`/news/${post.data.link}`}>
                      <ListItem button>
                        <span
                          style={{
                            flex: 9,
                          }}
                        >
                          {post.data.title}
                        </span>
                        <ListItemIcon
                          style={{
                            flex: 1,
                            paddingLeft: "51px",
                          }}
                        >
                          <CallMadeIcon></CallMadeIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                  </li>
                );
              })}
            </List>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SearchArea);
