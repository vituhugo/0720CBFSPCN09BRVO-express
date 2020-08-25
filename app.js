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
        let html_comentarios = comentarios.map((comentario, posicao) => {
            return '<a href="/mural/deletar/'+posicao+'"/>'+comentario+'</a>'
        }).join("<br>");
        res.send("Estou no meu mural<br>" + html_comentarios);
    },

    comentar: (req, res) => {
        comentarios.push("Novo comentario!")
        res.send("MURAL COMENTADO!");
    },

    showComentario: (req, res) => {
        let numero = req.params.numero;
        res.send(comentarios[numero]);
    },

    /**
     * Exclui um comentário da lista de comentários pela posição.
     */
    excluirComentario: (req, res) => {
        let {numero} = req.params;
        comentarios.splice(numero, 1);
        res.send("Comentário excluido com sucesso!");
    }
}

//Rotas
app.get("/mural", muralController.index);
app.get("/mural/:numero", muralController.showComentario);
app.get("/comentar", muralController.comentar);
app.get("/mural/deletar/:numero", muralController.excluirComentario)


// Inicia o servidor NODE
app.listen(3001, () => {
    console.log("SERVIDOR RODANDO!");
})