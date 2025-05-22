const bcrypt = require('bcryptjs');

//MIGUEL
const password = '123456'; // Cambia esto por la contraseña que quieras encriptar
const hash = bcrypt.hashSync(password, 10);

console.log('Hash generado:', hash);
