const looger = require('./logger');

const emitter = new looger.Logger();

emitter.on('log', (event) => {
  console.log(event);
});

emitter.log(() => {
  console.log('.....doinng ');
});
