const db = require('../database.js');
let comentarios = db.comentarios;

module.exports = {
    all: () => comentarios,
    get: (numero) => comentarios[numero],
    delete: (numero) => {
        comentarios.splice(numero, 1);
    },
    update: (numero, texto) => {
        comentarios[numero] = texto;
    },
    add: (texto) => comentarios.push(texto)
}