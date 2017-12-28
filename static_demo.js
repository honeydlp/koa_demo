const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const views = require('koa-views')
 
const app = new Koa()
 
 // 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
 
app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title
  })
})
 
app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})
 
const staticPath = './static'
 
app.use(static(
  path.join( __dirname,  staticPath)
))
 

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})