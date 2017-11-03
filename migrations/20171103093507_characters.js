
exports.up = function (knex, Promise) {
  return knex.schema.createTable('characters', function (table) {
    table.increments('id').primary()
    table.string('name').notNull()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('characters')
}
