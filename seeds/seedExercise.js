const { Exercise } = require('../models');

const exerciseData = [
  {
    name: 'push up',
    type_of_exercise: 'arms',
    max_weight: 150, 
    routine_id: 1
  },
  {
    name: 'squat',
    type_of_exercise: 'legs',
    max_weight: 250, 
    routine_id: 1
  },
  {
    name: 'bench press',
    type_of_exercise: 'chest',
    max_weight: 135, 
    routine_id: 2
  },
  {
    name: 'pull-up',
    type_of_exercise: 'back',
    max_weight: 150, 
    routine_id: 2
  },
  {
    name: 'plank',
    type_of_exercise: 'core',
    max_weight: 150, 
    routine_id: 3
  },
  {
    name: 'deadlift',
    type_of_exercise: 'full body',
    max_weight: 210, 
    routine_id: 3
  },
  {
    name: 'shoulder press',
    type_of_exercise: 'shoulders',
    max_weight: 135, 
    routine_id: 4
  },
  {
    name: 'lunges',
    type_of_exercise: 'legs',
    max_weight: 50, 
    routine_id: 4
  },
  {
    name: 'bicep curls',
    type_of_exercise: 'arms',
    max_weight: 35, 
    routine_id: 5
  },
  {
    name: 'crunches',
    type_of_exercise: 'core',
    max_weight: 25, 
    routine_id: 5
  },
];

const seedExercise = async () => {
  try {
    await Exercise.bulkCreate(exerciseData);
    console.log('Exercise data seeded successfully.');
  } catch (error) {
    console.error('Error seeding exercise data:', error);
  }
};

module.exports = seedExercise;
