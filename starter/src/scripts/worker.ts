import config from '../config'
import app from './app'
const start = () => {
  console.log(`工作进程 ${process.pid} 已启动`);

  const now = () => new Date().toISOString().replace(/T/, ' ').replace(/Z/, '')
  const { server: { port } } = config
  const server = app.listen(port, () => {
    console.log(`[${now()}]   worker#${process.pid} rap2-dolores is running as ${port}`)
  })

  
}

start()

export {}
