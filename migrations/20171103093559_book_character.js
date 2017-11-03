exports.up = function (knex, Promise) {
  return knex.schema.createTable('book_character', function (table) {
    table.increments('id').primary()
    table.integer('book_id').references('books.id').onDelete('CASCADE')
    table.integer('character_id').references('characters.id').onDelete('CASCADE')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('book_character')
}
