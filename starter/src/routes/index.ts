import * as Router from 'koa-router'
const router = new Router()

router.get('/', (ctx) => {
    ctx.body = "hello world";
})
router.get('/env', (ctx) => {
    ctx.body = process.env.NODE_ENV;
})


export default router