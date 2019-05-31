const router = require('express').Router();

const movementController = require('../controllers/movementController');
const accountController = require('../controllers/accountController');

//Routes of movements
router.get('/', movementController.list);


//Routes of account
router.get('/registrations/include-account', accountController.list);
router.post('/add-account', accountController.save);
router.get('/edit-account/:id', accountController.edit);
router.post('/update-account/:id', accountController.update);
router.get('/delete-account/:id', accountController.delete);



module.exports = router;
