// Options for PostCSS as we reference these options twice
// Adds vendor prefixing based on your specified browser support in
// package.json

module.exports = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  plugins: () => [
    require('postcss-sass-each'),
    require('postcss-hexrgba'),
    require('postcss-import'),
    // This is necessary because postcss-url doesn't add
    // a trailing ./ to rebased URLs, causing relative imports
    // to stop working.
    require('postcss-url')({
      url: postcssUrlRebase,
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-cssnext'),
  ],
};

