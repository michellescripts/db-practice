
exports.seed = (knex, Promise) => {
  return knex('books').del()
    .then(() => {
      return knex('books').insert([
        {
          id: 100,
          title: 'Harry Potter and the Sorcerer\'s Stone'
        },
        {
          id: 200,
          title: 'Harry Potter and the Chamber of Secrets'
        }
      ])
    })
}
