exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('book').insert([
        {
          title: 'Wave: A Memoir of Life After the Tsunami',
          author: 'Sonali Deraniyagala',
          cover_image:
            'https://images-na.ssl-images-amazon.com/images/I/31qgMqGxGXL._SY344_BO1,204,203,200_.jpg'
        },
        {
          title: 'You Are Not a Gadget: A Manifesto',
          author: 'Jaron Lanier',
          cover_image: 'https://images.gr-assets.com/books/1320388392l/6683549.jpg'
        }
      ]);
    });
};
