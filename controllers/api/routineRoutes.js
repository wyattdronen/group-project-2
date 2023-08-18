const router = require('express').Router();
const { Routine, User, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRoutine = await Routine.create({
      name: req.session.name,
      duration: req.session.duration,
      user_id: req.session.user_id,
    });

    res.status(201).json(newRoutine);
  } catch (err) {
    res.status(400).json({ error: 'An error occurred while posting the routine.' });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const routineData = await Routine.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!routineData) {
      res.status(404).json({ message: 'No routine found with this id!' });
      return;
    }

    res.status(201).json(routineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const routines = await Routine.findAll({
      attributes: ['id', 'name', 'duration'],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Exercise,
          attributes: ['name', 'type_of_exercise', 'max_weight'],
        },
      ],
    });

    res.status(200).json(routines);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching routines.' });
  }
});

module.exports = router;
