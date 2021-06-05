const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.js');

// CREAR USUARIO
router.post('/users', userController.createUser);
// LOGIN 
router.post('/users/login', userController.login);
// LOGOUT 
router.post('/users/logout', auth, userController.logout);
// LOGOUT PARA TODOS LOS DISPOSITIVOS
router.post('/users/logoutAll', auth, userController.logoutAll);
// GET DEL USUARIO AUTENTICADO
router.get('/users/me', auth, userController.getUser);
// DELETE DEL USUARIO AUTENTICADO
router.delete('/users/me', auth, userController.deleteAuthUser);

module.exports = router;
