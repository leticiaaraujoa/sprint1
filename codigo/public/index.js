const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
const middlewares = jsonServer.defaults({noCors: true})
server.use(middlewares)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})

server.use(router)

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
