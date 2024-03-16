## API - 1DSM - 2024-1 - Código de Exemplo

O código é formado pelas pastas:
- servidor: possui o código para fazer as operações no SGBD PostgreSQL;
- front: possui o código para fazer requisições HTTP no servidor.

### Instruções de uso

Antes de prosseguir é necessário ter instalado Node.js (https://nodejs.org/en/download) e git (https://git-scm.com/downloads) no seu computador.

Baixar as pastas no seu computador:
```
git clone https://github.com/arleysouza/previsao.git
```
Instalar os pacotes necessários para rodar o servidor:
```
cd api-1dsm-2024-1/servidor
npm i
```
Criar o banco de dados no SGBD PostgreSQL e atualize as variáveis de ambientes do arquivo .env com os parâmetros usados para fazer a conexão ao BD no SGBD:
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
