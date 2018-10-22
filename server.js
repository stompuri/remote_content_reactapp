const Koa = require('Koa');
const views = require('koa-views');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(views(__dirname, {extension: 'pug'}));


router.get('/', async function (ctx, next) {
  console.log('Setting body');
  ctx.body = 'Hello from Koa!';

  ctx.state = {
    host: 'localhost:3002'
  };
 
  await ctx.render('index');
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3002, () => console.log('Server listening on port 3002'));