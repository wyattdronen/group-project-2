const { User } = require('../models');
const bcrypt = require('bcrypt');

const seedUser = async () => {
  const userData = [
    {
      name: 'Trevor',
      email: 'trevorh@gmail.com',
      password: await bcrypt.hash('password123', 10),
    },
    {
      name: 'Emily',
      email: 'emilyj@example.com',
      password: await bcrypt.hash('password123', 10),
    },
    {
      name: 'Michael',
      email: 'michaelw@hotmail.com',
      password: await bcrypt.hash('password123', 10),
    },
    {
      name: 'Sophia',
      email: 'sophiaross@gmail.com',
      password: await bcrypt.hash('password123', 10),
    },
    {
      name: 'Daniel',
      email: 'danielc@example.com',
      password: await bcrypt.hash('password123', 10),
    },
  ];

  await User.bulkCreate(userData);
};

module.exports = seedUser;
