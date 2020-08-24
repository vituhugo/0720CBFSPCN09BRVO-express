
const fs = require('fs');
const express = require('express');
const app = express();
//View
// function view(pagina) {
//     return fs.readFileSync(__dirname+'/view/'+pagina+'.html', {encoding:'utf8', flag:'r'});
// }
let comentarios = [];
//Controlador
let muralController = {
    index: (req, res) => {
        let html_comentarios = comentarios.join("<br>");
        res.send("Estou no meu mural<br>" + html_comentarios);
    },
    comentar: (req, res) => {
        comentarios.push("Novo comentario!")
        res.send("MURAL COMENTADO!");
    }
}

//Rotas
app.get("/mural", muralController.index);
app.get("/comentario", muralController.comentar);


// Inicia o servidor NODE
app.listen(3001, () => {
    console.log("SERVIDOR RODANDO!");
})