const express = require('express')
const bodyParser = require('body-parser')

const usersRoute = require('./routes/usersRoute')
const port = 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

usersRoute(app)

app.get('/', (req, res) => res.send('Olá mundo!'))

app.listen(port, () => console.log(`Express rodando na porta ${port}`)) 