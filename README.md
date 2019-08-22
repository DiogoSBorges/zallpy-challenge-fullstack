# zallpy-challenge-fullstack 

## Executar

-- Rodar a Aplicação
```
> git clone https://github.com/DiogoSBorges/zallpy-challenge-fullstack.git

> cd zallpy-challenge-fullstack

> docker-compose up
```  

-- Executar teste back-end
```
> cd api

> npm install

> npm run test
```  

-- Back-end docs
```
> http://localhost:3000/swagger
```

-- React APP
```
> http://localhost:8000
```
-- Rotas APP
* "/" - Lista projetos que usuário tem permissão
* "/admin" - Lista todos os projetos com todas as horas laçadas nos mesmos
* "/login" - Tela de login

## Melhorias que poderiam ser feitas

-- API
* Implementar mais regras na funcionalidade de lançar horas (Ex: a  data informada não pode ser maior que data atual).
* Validação de entrada de valores nos controllers e services.
* Automatizar a geração do JSON do SWAGGER.

-- UI
* Melhorar na estilização e responsividade e também na utilização correta de estilos.
* Melhorar no quesito usabilidade para o usuário.
* Implementar Login utilizando redux.