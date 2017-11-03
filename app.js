const express = require('express')
const app = express()
const query = require('./db/query')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use('/', express.static('public'))

app.get('/', (req, res) => {
  query.getBooks()
  .then((data) => {
    res.render('main', {data})
  })
})

app.post('/add', (req, res) => {
  let bookTitle = {title: req.body.title}
  let characterName = {name: req.body.name}
  query.addBook(bookTitle)
  .then((data) => {
    let bookId = data
    query.addCharacter(characterName)
    .then((data) => {
      let characterId = data
      query.addJoin(bookId, characterId)
      .then(() => {
        res.redirect('/')
      })
    })
  })
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
