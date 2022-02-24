const router = require('express').Router();
const userRoutes = require('./user-routes');
const featuredRoutes = require('./featured-routes');
const categoryRoutes = require('./category-routes');
const categoryRoutes = require('./category-routes');
const shoeRoutes = require('./shoeRoutes');

router.use('/users', userRoutes);
router.use('/featured', featuredRoutes);
router.use('/categories', categoryRoutes);
router.use('/shoes', shoeRoutes);

module.exports = router;
