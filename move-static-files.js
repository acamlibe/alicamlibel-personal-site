const fs = require("fs-extra");

const onError = (err) => {
  if (err) return console.error(err);
};

fs.copy('src/fonts', 'dist/fonts', onError);

fs.copy('src/img', 'dist/img', onError);

fs.copy('src/js', 'dist/js', onError);