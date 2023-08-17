// const router = require('express').Router();
// const {Exercise, User, UserData, Routine } = require('../../models');
// // const withAuth = require('../../utils/auth')
// //get all routines
// router.get('/', async (req, res) => {
//     try {
//         const routineData = await Routine.findAll({
//             include: [
//                 {model: User},
//                 {model: UserData},
//                 {model: Exercise}
//             ]
//         });
//         res.status(200).json(routineData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// // get one routine by id
// router.get('/:id', async (req, res) => {
//     try {
//         const routineData = await Routine.findByPk(req.params.id, {
//             include: [
//                 {model: User},
//                 {model: UserData},
//                 {model: Exercise}
//             ]
//         });

//         if (!routineData) {
//             res.status(404).json({ message: 'No routine found with this id!' });
//             return;
//         }

//         res.status(200).json(routineData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// // create a new routine
// router.post('/', async (req, res) => {
//     try {
//         const newRoutine = await Routine.create(req.body);

//         res.status(200).json(newRoutine);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });
// // update routine by id
// router.put('/:id', async (req, res) => {
//     await Routine.update(req.body, {
//         where: {id: req.params.id }
//     });
//     res.status(200).json({ message: 'Routine updated!' });
// });
// // delete routine by id
// router.delete('/:id', async (req, res) => {
//     await Routine.destroy({
//         where: {id: req.params.id}
//     });
//     res.status(200).json({message: 'Routine deleted successfully'});
// });