const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
app.use( async (ctx) => {
  let url = ctx.request.url;
  let html = await route(url);
  ctx.body = html;
})
app.listen(3000);
console.log('listen 3000 port');

function render(page){
  return new Promise((resolve,reject)=>{
    let pageUrl = `./page/${page}`;
    fs.readFile(pageUrl,'binary',(err,data)=>{
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    })
  })
}

async function route(url){
  let page = '404.html';
  switch(url){
    case '/':
      page = 'index.html';
      break;
    case '/b':
      page = 'b.html';
      break;
    default:
      break;
  }
  let html = await render(page);
  return html;
}