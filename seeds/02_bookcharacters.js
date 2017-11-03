exports.seed = (knex, Promise) => {
  return knex('book_character').del()
    .then(() => {
      return knex('book_character').insert([
        {
          id: 100,
          book_id: 100,
          character_id: 100
        },
        {
          id: 200,
          book_id: 100,
          character_id: 200
        },
        {
          id: 300,
          book_id: 200,
          character_id: 100
        },
        {
          id: 400,
          book_id: 200,
          character_id: 200
        }
      ])
    })
}
