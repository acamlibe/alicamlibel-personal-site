import { copy } from "fs-extra";

onError = (err) => { 
  if (err) return console.error(err)
};


copy('src/fonts', 'dist/fonts', onError);

copy('src/img', 'dist/img', onError);

copy('src/js', 'dist/js', onError);