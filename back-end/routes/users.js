const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');
const auth = require('../midd/auth');

router.post('/signin', usersCtrl.signIn);
router.post('/login', usersCtrl.logIn);
router.get('/me', auth, usersCtrl.getOneUser);
router.post('/logout', auth, usersCtrl.logOut);
router.put('/update/:id', auth, usersCtrl.updateUser);
router.delete('/delete/:id', auth, usersCtrl.deleteUser);


module.exports = router;