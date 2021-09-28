const fs = require('fs');
const path = require('path');

console.log(__dirname);

if (process.argv.length <= 2) {
  console.error('디렉토리 파라미터 입력해주세요');
  return;
}
const folder = process.argv[2];
const dir = path.join(__dirname, folder);

console.log(dir);

fs.promises
  .readdir(dir)
  .then((fileList) => {
    fileList.forEach((filename) => {
      console.log(path.extname(filename));
      let extname = path.extname(filename);

      if (extname === '.mp4' || extname === '.mov') {
        console.log('video filename = ' + filename);
        console.log('video extname = ' + extname);

        const directory = fs.existsSync(path.join(dir, 'video'));

        if (!directory) {
          fs.mkdirSync(path.join(dir, 'video'));
        }

        fs.promises
          .rename(path.join(dir, filename), path.join(dir, 'video', filename))
          .then(() => {
            console.log(`${filename} move`);
          })
          .catch(console.error);
      }

      if (extname === '.aae' || extname === '.png') {
        console.log('captures filename = ' + filename);
        console.log('captures extname = ' + extname);
        const directory = fs.existsSync(path.join(dir, 'captures'));

        if (!directory) {
          fs.mkdirSync(path.join(dir, 'captures'));
        }
        fs.promises
          .rename(
            path.join(dir, filename),
            path.join(dir, 'captures', filename),
          )
          .then(() => {
            console.log(`${filename} move`);
          })
          .catch(console.error);
      }
      if (extname === '.jpg') {
        console.log('dupliated filename = ' + filename);
        console.log('dupliated extname = ' + extname);
        const directory = fs.existsSync(path.join(dir, 'dupliated'));

        if (!directory) {
          fs.mkdirSync(path.join(dir, 'dupliated'));
        }

        if (filename.includes('IMG_E')) {
          fs.promises
            .rename(
              path.join(dir, filename.replace('IMG_E', 'IMG_')),
              path.join(dir, 'dupliated', filename.replace('IMG_E', 'IMG_')),
            )
            .then(() => {
              console.log(`${filename} move`);
            })
            .catch(console.error);
        }
      }
    });
  })
  .catch(console.error);
