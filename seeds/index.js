const seedExercise = require('./seedExercise');
const seedRoutine = require('./seedRoutine');
const seedUser = require('./seedUser');
const seedUserData = require('./seedUserData');

const sequelize = require('../config/connections');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedExercise();
  console.log('\n----- EXERCISES SEEDED -----\n');

  await seedRoutine();
  console.log('\n----- ROUTINES SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedUserData();
  console.log('\n----- USER DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();