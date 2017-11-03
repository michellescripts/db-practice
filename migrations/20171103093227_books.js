
exports.up = function (knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary()
    table.string('title').notNull()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('books')
}
