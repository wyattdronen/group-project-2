const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userDataRoutes = require('./userDataRoutes');
const routineRoutes = require('./routineRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/users', userRoutes);
router.use('/userdata', userDataRoutes);
router.use('/routine', routineRoutes);
router.use('/exercise', exerciseRoutes)

module.exports = router;