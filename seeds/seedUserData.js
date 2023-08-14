const { UserData } = require('../models');

const userDataData = [
  {
    height: 6,
    weight: 200,
    weight_goal: 185,
    user_id: 1
  },
  {
    height: 5.5,
    weight: 150,
    weight_goal: 140,
    user_id: 2
  },
  {
    height: 5.9,
    weight: 180,
    weight_goal: 170,
    user_id: 3
  },
  {
    height: 5.8,
    weight: 160,
    weight_goal: 155,
    user_id: 4
  },
  {
    height: 6.2,
    weight: 190,
    weight_goal: 200,
    user_id: 5
  },
];

const seedUserData = () => UserData.bulkCreate(userDataData);

module.exports = seedUserData;
