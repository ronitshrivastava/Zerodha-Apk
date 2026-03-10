const { Signup, Login, CurrentUser,Logout } = require('../controllers/AuthController')
const {userVerification} = require('../middlewares/AuthMiddleware')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/currentUser', userVerification,CurrentUser);
router.get('/logout',Logout);

module.exports = router