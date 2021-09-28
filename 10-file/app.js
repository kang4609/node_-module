const fs = require('fs');

// 3
// rename(....., callback(error, data))
// try{renameSync(....)} catch(e) {}
// promises.rename().then().cathc(0)

try {
  fs.renameSync('./text.txt', './text1.txt');
} catch (error) {
  console.error(error);
}
console.log('hello');

fs.rename('./text1.txt', './text.txt', (error) => {
  console.error(error);
});

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => console.log('Done'))
  .catch(console.error);
