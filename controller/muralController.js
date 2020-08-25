const comentarioModel = require('../model/comentario');
let muralController = {

    index: (req, res) => {
        let comentarios = comentarioModel.all();
        let html_comentarios = comentarios.map((comentario, posicao) => {
            return '<a href="/mural/deletar/'+posicao+'"/>'+comentario+'</a>'
        }).join("<br>");
        res.send("Estou no meu mural<br>" + html_comentarios);
    },

    comentar: (req, res) => {
        comentarioModel.add("Novo comentario!")
        res.send("MURAL COMENTADO!");
    },

    showComentario: (req, res) => {
        let numero = req.params.numero;
        let comentario = comentarioModel.get(numero)

        res.send(comentario);
    },

    /**
     * Exclui um comentário da lista de comentários pela posição.
     */
    excluirComentario: (req, res) => {
        let {numero} = req.params;
        comentarioModel.delete(numero);
        res.send("Comentário excluido com sucesso!");
    }
}

module.exports = muralController;