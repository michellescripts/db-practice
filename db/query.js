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
  return pg('books').select().where('title', bookTitle.title).first()
  .then((book) => {
    if (book === undefined) {
      return pg('books').insert(bookTitle).returning('id')
    } else {
      return [book.id]
    }
  })
}

let addCharacter = (characterName) => {
  return pg('characters').select().where('name', characterName.name).first()
  .then((name) => {
    if (name === undefined) {
      return pg('characters').insert(characterName).returning('id')
    } else {
      return [name.id]
    }
  })
}

let addJoin = (book, name) => {
  return pg('book_character').select().where('book_character.book_id', book[0]).andWhere('book_character.character_id', name[0]).first()
  .then((join) => {
    if (join === undefined) {
      let add = {book_id: book[0], character_id: name[0]}
      return pg('book_character').insert(add)
    } else {
      return [join.id]
    }
  })
}

module.exports = {
  getBooks,
  addBook,
  addCharacter,
  addJoin
}
