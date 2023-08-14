const sequelize = require('../config/connections');
const seedUser = require('./seedUser');
const seedRoutine = require('./seedRoutine');
const seedExercise = require('./seedExercise');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    await seedRoutine();
    console.log('\n----- ROUTINES SEEDED -----\n');

    await seedExercise();
    console.log('\n----- EXERCISES SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
