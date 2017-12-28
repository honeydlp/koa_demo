const Koa = require('koa');
const app = new Koa();
app.use( async (ctx) => {
  let url = ctx.url;
  //从request中获取GET请求
  let request = ctx.request;        //GET请求通过request接收
  let req_query = request.query;    //query：返回的是格式化好的参数对象
  let req_queryString = request.querystring; //querystring：返回的是请求字符串。

  //从上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_queryString = ctx.querystring;
  ctx.body = {
    url, //"/?xxx=yyy"
    req_query,
    req_queryString,
    ctx_query,
    ctx_queryString
  }
})
app.listen(3000);
console.log('listen 3000 port');