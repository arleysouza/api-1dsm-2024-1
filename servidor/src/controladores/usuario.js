const { pool } = require("./bd.js");

async function criar(req, res) {
  // Desestrutura as propriedades mail e nome
  // do objeto JSON que está no body da requisição HTTTP
  const { mail, nome } = req.body;
  if (!mail || mail.length == 0) {
    return res.json({ erro: "Forneça o e-mail" });
  }
  if (!nome || nome.length == 0) {
    return res.json({ erro: "Forneça o nome" });
  }

  // Insere um registro na tbusuario
  const resposta = await pool.query(
    "INSERT INTO tbusuario(mail,nome) VALUES ($1,$2) RETURNING idusuario",
    [mail, nome]
  );
  // Retorna o registro inserido no formato JSON
  return res.json({ idusuario: resposta.rows[0].idusuario, mail, nome });
}

async function buscar(req, res) {
  const { mail } = req.body;
  if (!mail || mail.length == 0) {
    return res.json({ erro: "Forneça o e-mail" });
  }
  
  // Procura na tbusuario o 1o registro que satisfaz as condições
  let resposta = await pool.query(
    "SELECT idusuario,mail,nome FROM tbusuario WHERE mail=$1 LIMIT 1",
    [mail]
  );
  // Verifica se o usuário existe na tbusuario
  if (resposta.rowCount > 0) {
    // Retorna o registro no formato JSON
    return res.json(resposta.rows[0]);
  } else {
    return res.json({erro:"Usuário não cadastrado"});
  }
}

// Exporta as funções
module.exports = { criar, buscar };
