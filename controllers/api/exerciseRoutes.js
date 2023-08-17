const router = require('express').Router();
const {Exercise, User, UserData, Routine } = require('../../models');
// const withAuth = require('../../utils/auth')
// get all exercises
router.get('/', async (req, res) => {
    try {
    const exerciseData = await Exercise.findAll({
    include: [
        {model: User},
        {model: UserData},
        {model: Routine}
    ]
});
res.status(200).json(exerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// get one exercise by id
router.get('/:id', async (req, res) => {
    try{
        const exerciseData = await Exercise.findByPk(req.params.id);

        if(!exerciseData) {
            res.status(404).json({ message: 'No exercise found with this id!' });
            return;
        }
        res.status(200).json(exerciseData);
    } catch (err) {
                res.status(500).json(err);
        }
});
// create a new exercise
router.post('/', (req, res) => {
Exercise.create(req.body)
.then((exercise) => {
    if (req.body.routineId) {
        return exercise.setRoutine(req.body.routineId);
    }
    res.json(exercise);
})
 .catch(err => {
    console.log(err);
    res.status(400).json(err);
    });
});
// update exercise by id
router.put('/:id', async (req, res) => {
    await Exercise.update(req.body, {
        where: {id: req.params.id}
        })
        .then(async exercise => {
            if (req.body.routineId) {
                await exercise.setRoutine(req.body.routineId);
            }
            res.json(exercise);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// delete exercise by id
router.delete('/:id', async (req, res) => {
    try {
        const exerciseData = await Exercise.destroy({
            where: { id: req.params.id }
        });
     if (!exerciseData) {
        res.status(404).json({ message: 'No exercise found with this id!' });
        return;
        }

    res.status(200).json(exerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});