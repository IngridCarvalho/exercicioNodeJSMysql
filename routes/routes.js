const router = require('express').Router();

const movementController = require('../controllers/movementController');
const accountController = require('../controllers/accountController');
cont categoryController = require('../controllers/categoryController');

//Routes of movements
router.get('/', movementController.list);
router.post('/add-movement', movementController.save);
router.get('/edit-movement/:id', movementController.edit);
router.post('/update-movement/:id', movementController.update);
router.get('/delete-movement/:id', movementController.delete);

//Routes of account
router.get('/registrations/include-account', accountController.list);
router.post('/add-account', accountController.save);
router.get('/edit-account/:id', accountController.edit);
router.post('/update-account/:id', accountController.update);
router.get('/delete-account/:id', accountController.delete);

//Routes of category
router.get('/registrations/include-category', categoryController.list);
router.post('/add-category', categoryController.save);
router.get('/edit-category/:id', categoryController.edit);
router.post('/update-category/:id', categoryController.update);
router.get('/delete-category/:id', categoryController.delete);


module.exports = router;
