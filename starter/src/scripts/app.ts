import * as Koa from 'koa'
import * as body from 'koa-body'
import router from '../routes'
const app = new Koa()


app.use(body())
app.use(router.routes())

export default app