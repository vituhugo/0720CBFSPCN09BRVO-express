const express = require('express');
const rotasMural = require('./routes/rotasMural');
const app = express();

let comentarios = [];

app.use("/mural", rotasMural);


// Inicia o servidor NODE
app.listen(3001, () => {
    console.log("SERVIDOR RODANDO!");
})