const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
//router.post('/logout', usuariosController.logout);//no implementado
router.post('/update-rol:id', usuariosController.updateRol);//no implementado
router.post('/login', usuariosController.login);
router.post('/register', usuariosController.register);
router.put('/actualizar/:id', usuariosController.actualizarUsuario);

module.exports = router;
