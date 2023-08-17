const router = require('express').Router();
const userRoutes = require('./userRoutes');
const user_dataRoutes = require('./user_dataRoutes');
const routineRoutes = require('./routineRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/users', userRoutes);
router.use('/user_data', user_dataRoutes);
router.use('/routine', routineRoutes);
router.use('/exercise', exerciseRoutes)

module.exports = router;