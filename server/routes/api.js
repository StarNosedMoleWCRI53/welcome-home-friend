//Set up stuff
//express stuff
const express = require('express');
const router = express.Router();

//controllers
const petController = require('../controllers/petController');
const userController = require('../controllers/userController');


router.get('/', 
petController.getPet, 
(req, res) => {
    return res.status(200).json(res.locals.rows) // place holders -> looks like i'll be using query instead or maybe in the controllers?
});

router.post('/pet', 
petController.addPet, 
(req, res) => {
    return res.status(200).json(res.locals.newPet); // place holders
});

router.post('/found', 
petController.foundPet, 
(req, res) => {
    return res.status(200).json(res.locals.newPet); // place holders
});

router.post('/v1/auth/google', 
userController.verifyTokenId,
userController.addToDb,
userController.cookieForSession,
(req, res) => {
    return res.status(201).json(res.locals.user);
});


module.exports = router;