const EventEmiiter = require('events');

const emitter = new EventEmiiter();

const callback1 = (args) => {
  console.log('first callback-', args);
};

emitter.on('test', callback1);

emitter.on('test', (args) => {
  console.log('second callback -', args);
});

emitter.emit('test', { message: 1 });
emitter.emit('test', { message: 2 });
//emitter.removeListener('test', callback1);
emitter.removeAllListeners();
emitter.emit('test', { message: 3 });
