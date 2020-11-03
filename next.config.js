// const path = require("path");
// const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");


// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
// };
// module.exports = withSass({
//   webpack(config, { dev }) {
//     if (dev) {
//       config.devtool = "cheap-module-source-map";
//     }
//     return config;
//   },
// });
module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});
module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: [],
    path: '/_next/image',
    loader: 'default',
  },
}