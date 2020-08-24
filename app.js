const express = require('express');
const app = express();
//View

//Controlador
let muralController = {
    index: (req, res) => res.send("Entrei no mural!")
}

//Rotas
app.get("/mural", muralController.index);


// Inicia o servidor NODE
app.listen(3001, () => {
    console.log("SERVIDOR RODANDO!");
})