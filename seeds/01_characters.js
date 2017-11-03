
exports.seed = (knex, Promise) => {
  return knex('characters').del()
    .then(() => {
      return knex('characters').insert([
        {
          id: 100,
          name: 'Harry Potter'
        },
        {
          id: 200,
          name: 'Hermione Granger'
        }
      ])
    })
}
