// Importa o pacote express e coloca na variável express
const express = require("express");
// Importa o pacote cors e coloca na variável cors
// CORS (Cross-Origin Resource Sharing)
const cors = require("cors");
// Importa as funções exportadas do módulo usuario
const { criar, buscar } = require("./controladores/usuario");
// Importa as funções exportadas do módulo questao
const { listar } = require("./controladores/questao");
// Importa o pacote dotenv e coloca na variável dotenv
const dotenv = require("dotenv");
// Carregar as variáveis de ambiente do arquivo .env no objeto process.env do Node
// O arquivo .env precisa estar na raiz do projeto
dotenv.config();

// Será usado 3000 se a variável de ambiente não tiver sido definida
const PORTA = process.env.PORTA || 3000;
// Cria o servidor e coloca na variável app
const app = express(); 
// Configura o servidor para receber requisições de qualquer domínio
app.use(cors());
// Configura o servidor para suportar parâmetros JSON no body da requisição
app.use(express.json());
// Inicializa o servidor na porta especificada
app.listen(PORTA, () => {
    console.log(`Rodando na porta ${PORTA}`);
});

// Define a rota /usuario usando o método HTTP POST
// A rota é mapeada para a função criar
app.post("/usuario", criar);

// Define a rota /login usando o método HTTP POST
app.post("/login", buscar);

// Define a rota /usuario usando o método HTTP GET
app.get("/questao", listar);

app.use(function(req,res){
    res.json({erro:"Rota desconhecida"});
});