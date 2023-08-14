const { User } = require('../models');

const userData = [
  {
    name: 'Trevor',
    email: 'trevorh@gmail.com',
  },
  {
    name: 'Emily',
    email: 'emilyj@example.com',
  },
  {
    name: 'Michael',
    email: 'michaelw@hotmail.com',
  },
  {
    name: 'Sophia',
    email: 'sophiaross@gmail.com',
  },
  {
    name: 'Daniel',
    email: 'danielc@example.com',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
