const fsbx = require('fuse-box');

fsbx.FuseBox.init({
  homeDir: `./src`,
  cache: false,
  log: false
}).bundle({
  [`dist/vendor.js`]: "+date-fns +date-fns/locale/fr"
}).then(bundle => {
  if (!bundle) throw new Error("Could not generate bundle")
});

fsbx.FuseBox.init({
  homeDir: `./src`,
  tsConfig: './tsConfig.json',
  cache: false,
  log: false
}).bundle({
  [`dist/index.js`]: "> [index.ts]"
}).then(bundle => {
  if (!bundle) throw new Error("Could not generate bundle")
});
