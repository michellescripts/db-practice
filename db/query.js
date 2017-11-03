const pg = require('./knex')

let getBooks = () => {
  return pg('books').fullOuterJoin('book_character', 'book_character.book_id', 'books.id').fullOuterJoin('characters', 'characters.id', 'book_character.character_id').select()
  .then((data) => {
    let hitTitles = []
    let organizedData = []
    data.forEach((item) => {
      if (!hitTitles.includes(item.title)) {
        hitTitles.push(item.title)
        organizedData.push({title: item.title, name: [item.name]})
      } else {
        organizedData.forEach((book) => {
          if (item.title === book.title) {
            book.name.push(item.name)
          }
        })
      }
    })
    return organizedData
  })
}

let addBook = (bookTitle) => {
  // add a book if the title is not in the table
}

let addCharacter = (characterName) => {
  // add a character if the character is not in the table
}

let addJoin = (book, name) => {
  // add a relationship between a character and a book if it does not exist
}

module.exports = {
  getBooks,
  addBook,
  addCharacter,
  addJoin
}
