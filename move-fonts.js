var fs = require("fs-extra");

fs.copy('src/fonts', 'dist/fonts', function (err) {
  if (err) return console.error(err)
});