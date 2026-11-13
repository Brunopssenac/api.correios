const express = require("express");
// igual a -> import express from express mas precisa do "tupe": "module" no package.json

const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});

