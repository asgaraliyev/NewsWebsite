import React from "react";
import GetCatagories from "../Functions/FirebaseFunctions/GettingCatagories";
import GettingPosts from "../Functions/FirebaseFunctions/GettingPosts";
const EXTERNAL_DATA_URL = "https://karabakh-news.herokuapp.com";

const createSitemap = (posts, catagories) => {
  if (catagories && posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> <url>
    <loc>${`${EXTERNAL_DATA_URL}`}</loc>
</url>
    
        ${catagories
          .map((catagory) => {
            return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/catagory/${catagory}`}</loc>
                    </url>
                `;
          })
          .join("")}

          ${posts
            .map((post) => {
              return `
                      <url>
                          <loc>${`${EXTERNAL_DATA_URL}/news/${post.data["link"]}`}</loc>
                      </url>
                  `;
            })
            .join("")}
    </urlset>
    `;
  }
};

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(EXTERNAL_DATA_URL);
    await GetCatagories().then(async (catagories) => {
      await GettingPosts().then((posts) => {
        res.setHeader("Content-Type", "text/xml");
        res.write(createSitemap(posts, catagories));
        res.end();
      });
    });
  }
}

export default Sitemap;
