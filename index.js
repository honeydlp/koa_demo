const Koa = require('koa');
const app = new Koa();
app.use( async (ctx) => {
  ctx.body = 'hello koa2';
})
app.listen(3000);
console.log('listen 3000 port');

// async function testAsync(){
//   return 'Hello async';
// }
// const result = testAsync();
// console.log(result); Promise { 'Hello async' }

// function takeLongTime() {
//   return new Promise(resolve => {
//       setTimeout(() => resolve("long_time_value"), 1000);
//   });
// }

// async function test() {
//   const v = await takeLongTime();
//   console.log(v);
// }

// test();