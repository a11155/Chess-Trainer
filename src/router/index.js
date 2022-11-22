const Router = require('express').Router;
const path = require('path')
const userController = require('../controllers/user-controller');
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const activatedMiddleware = require('../middlewares/activated-middleware');
const htmlController = require('../controllers/html-controller');
const debutController = require('../controllers/debut-controller');
const router = new Router();




router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}), 
    userController.registration
);

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/home', authMiddleware, htmlController.getHome);
router.get('/login', htmlController.getLogin);
router.get('/',htmlController.getIndex);
router.get('/registration', htmlController.getRegistration);
router.get('/play', authMiddleware, htmlController.getPlay);
router.get('/study', authMiddleware, debutController.getStudy);
router.get('/study/white', authMiddleware, debutController.getWhiteStudy);
router.get('/study/black', authMiddleware, debutController.getBlackStudy);
router.get('/statistics', authMiddleware, activatedMiddleware, htmlController.getStatistics);
router.get('/error', function(req, res, next){
    res.render('error', {title: 'Express'});
})
router.get('/won', authMiddleware, userController.won)
router.post('/addDebut', debutController.createDebut);
router.get('/service', htmlController.getServices)
router.get('/about', htmlController.getAbout)
router.get('/privacy', htmlController.getPrivacy)
router.get('/terms', htmlController.getTerms)



module.exports = router;