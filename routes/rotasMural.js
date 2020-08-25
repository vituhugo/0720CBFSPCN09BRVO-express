const express = require('express');
const muralController = require('../controller/muralController');

const router = express.Router();

router.get("/", muralController.index);
router.get("/comentar", muralController.comentar);
router.get("/deletar/:numero", muralController.excluirComentario);
router.get("/:numero", muralController.showComentario);

module.exports = router;