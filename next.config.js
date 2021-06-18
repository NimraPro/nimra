
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['6iu295UiMZ8b1qQooUTNAk'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  