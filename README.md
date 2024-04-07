## ABP - 1DSM - 2024-1 - Código de Exemplo

O código é formado pelas pastas:
- servidor: exemplo de código para fazer as operações no SGBD PostgreSQL;
- front: exemplo de  código para fazer requisições HTTP no servidor.

### Instruções de uso

Antes de prosseguir é necessário ter instalado o Node.js (https://nodejs.org/en/download) e o git (https://git-scm.com/downloads) no seu computador.

Baixar as pastas no seu computador:
```
git clone https://github.com/arleysouza/api-1dsm-2024-1.git projeto
```
Instalar os pacotes necessários para rodar o servidor:
```
cd projeto/servidor
npm i
```
Passos para configurar o projeto:
1. Acesse o SGBD PostgreSQL usando o pgAdmin e crie um BD de nome `bdapi`;
2. No pgAdmin, execute os comandos SQL a seguir para criar as tabelas `tbusuario` e `tbquestao`. Essas tabelas serão usados para você testar o código, posteriormente, você terá de criar mais tabelas:
```
DROP TABLE if exists tbusuario;
DROP TABLE if exists tbquestao;

CREATE TABLE tbusuario (
  idusuario SERIAL PRIMARY KEY,
  mail VARCHAR(50) NULL,
  nome VARCHAR(50) NULL
);

CREATE TABLE tbquestao (
  idquestao SERIAL PRIMARY KEY,
  enunciado VARCHAR(256) NULL,
  resposta BOOL NULL
);

INSERT INTO tbquestao (enunciado, resposta) 
VALUES
('Uma variável é um espaço na memória do computador?', true),
('O tipo de dado é o conteúdo da variável?', false),
('Os tipos de dados podem ser primitivos ou objetos?', true),
('Na estrutura decisão if...else o bloco if pode existir sem o bloco else?', true ),
('Na estrutura decisão if...else o bloco else pode existir sem o bloco if?', false),
('A estrutura de decisão if...else pode ser aninhada dentro de um bloco if ou else?', true),
('Uma estrutura de repetição for pode ser usada quando o número de iterações é desconhecido?', false),
('O loop do...while executa o bloco de código pelo menos uma vez, mesmo se a condição for inicialmente falsa?', true),
('Em uma estrutura de repetição while, o bloco de código é executado enquanto a condição especificada for falsa?', false);
```
3. No VS Code, atualize o arquivo `.env` da pasta `servidor` para ter os dados de conexão com o BD `bdapi`, ou algum outro nome que você tenha dado. As variáveis de ambientes do arquivo `.env` possuem os parâmetros usados para fazer a conexão ao BD no SGBD:
```
PORTA = 3030
BDUSUARIO = postgres
BDHOST = localhost
BDNOME = bdapi
BDSENHA = 123
BDPORTA = 5432
```
4. Execute um dos comandos a seguir no terminal do VS Code, é necessário estar dentro da pasta `servidor`:
```
npm run dev
ou
npm start
```
5. Teste no navegador:
As rotas estão mapeadas no servidor no arquivo `src/index.js`. Atualmente existem as rotas `/usuario`, `/login` e `/questao`. Uma rota é formado pelo caminha + método HTTP. As rotas `/usuario` e `/login` usam o método HTTP POST.
```
// Define a rota /usuario usando o método HTTP POST
// A rota é mapeada para a função criar
app.post("/usuario", criar);

// Define a rota /login usando o método HTTP POST
app.post("/login", buscar);

// Define a rota /usuario usando o método HTTP GET
app.get("/questao", listar);
```
Qualquer outra rota será tratada pelo código a seguir:
```
app.use(function(req,res){
    res.json({erro:"Rota desconhecida"});
});
```
### Exemplos de rotas
A rota `/questao` responde a lista de questões e pode ser testada diretamente no navegador, por ela usar o método HTTP GET, já as demais rotas não funcionam diretamente no navegador:
```
http://localhost:3030/questao
```
A rota `/login` requer que o cliente envie o e-mail e, por utilizar o método HTTP POST, não pode ser testada diretamente no navegador:
```
http://localhost:3030/login
```
