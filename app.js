const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3333, () => {
  console.log('JSON Server is running')
})