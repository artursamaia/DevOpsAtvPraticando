const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/data/database.json')
const publicRoutes = require('./routes/publicRoutes')
const authenticationMiddleware = require('./middleware/authenticationMiddleware')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

server.use('/public', publicRoutes) //rotas na porta 8000


server.use(/^(?!\/(public|livros|autores|categorias)).*$/, authenticationMiddleware);

server.use(router) //rotas na prota 3000

server.listen(8000, () => {
  console.log("Hello Artur's World")
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log("Alteração Simples na branch Develop seguindo o esquema do Git Flow")
  console.log("Implementando mais uma linha de codigo para fazer o merge de tudo na branch release")
>>>>>>> develop
=======
  console.log("Voltando ao codigo original")
>>>>>>> develop
  console.log("API disponível em http://localhost:8000")
})