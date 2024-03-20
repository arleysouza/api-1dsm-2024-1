## API - 1DSM - 2024-1 - Código de Exemplo

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
Criar o BD no SGBD PostgreSQL e, na sequência, atualize as variáveis de ambientes do arquivo .env com os parâmetros usados para fazer a conexão ao BD no SGBD:
```
PORTA = 3030
BDUSUARIO = postgres
BDHOST = localhost
BDNOME = bdapi
BDSENHA = 123
BDPORTA = 5432
```
Instruções para subir o servidor:
```
npm run dev
ou
npm start
```
Teste no navegador:
```
http://localhost:3030/
```
