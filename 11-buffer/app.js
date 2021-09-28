// Fiexed-size chunk of memory(고정된 사이즈의 메모리 덩어리)
// arrag of integers, byte of data (숫자 배열의 형태, 데이터의 바이트 그 자체)
const buf = Buffer.from('Hi');

console.log(buf); // unicode
console.log(buf.length);

// 배열로 하면 ascii code
console.log(buf[0]);
console.log(buf[1]);

console.log(buf.toString());

// create

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast -  초기화 안함
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
