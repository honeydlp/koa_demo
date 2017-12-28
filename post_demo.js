const Koa = require('koa');
const app = new Koa();
app.use( async (ctx) => {
  // ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
  // ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。  
  // ctx.method 获得请求的类型
  if(ctx.url==='/' && ctx.method==='GET'){
    //显示表单页面
    let html=`
        <h1>JSPang Koa2 request POST</h1>
        <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>age</p>
            <input name="age" /><br/>
            <p>website</p>
            <input name="webSite" /><br/>
            <button type="submit">submit</button>
        </form>
    `;
    ctx.body=html;
  }else if(ctx.url==='/' && ctx.method==='POST'){
      let pastData=await parsePostData(ctx);
      ctx.body=pastData;
  }else{
      ctx.body='<h1>404!</h1>';
  }
})
app.listen(3000);
console.log('listen 3000 port');

function parsePostData(ctx){
  return new Promise((resolve,reject)=>{
      try{
          let postdata="";
          ctx.req.on('data',(data)=>{
              postdata += data
          })
          ctx.req.addListener("end",function(){
            console.log(postdata);
              let parseData = parseQueryStr( postdata )
              resolve(parseData);
          })
      }catch(error){
          reject(error);
      }
  });
}

function parseQueryStr(queryStr){
  
  let queryData={};
  let queryStrList = queryStr.split('&');
  for( let [index,queryStr] of queryStrList.entries() ){
      let itemList = queryStr.split('=');
      queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  } 
  return queryData
}