const router = require('express').Router();
const { Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const { exerciseName, exerciseType, maxWeight, routineId } = req.body;

    const newExercise = await Exercise.create({
      name: exerciseName,
      type_of_exercise: exerciseType,
      max_weight: maxWeight,
      routine_id: routineId
    });

    res.status(201).json(newExercise);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data. Exercise could not be created.' });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const exerciseData = await Exercise.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!exerciseData) {
      res.status(404).json({ message: 'No exercise found with this id!' });
      return;
    }

    res.status(201).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
