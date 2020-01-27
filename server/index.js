const express = require ('express')
const app = express()
const mc = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

const messurl = '/api/messages'
app.post(messurl, mc.create)

app.get(messurl, mc.read)

app.put(`${messurl}/:id`, mc.update)

app.delete(`${messurl}/:id`, mc.delete)

const port = 3001
app.listen(port, () => console.log(`Server listening on ${port}`))