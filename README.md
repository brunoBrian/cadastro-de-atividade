
### Pasta backend

Inserir os comandos abaixo na pasta backend:

**npm i -y** para instalar as dependências

* Rodar **mongod** na pasta para iniciar o Banco de Dados

* Rodar o comando **./node_modules/.bin/pm2 monit** para monitorar o processamento da aplicação e iniciar o server, para podermos acessar a api (http://localhost:3003/api/todos)

	**./node_modules/.bin/pm2 status** - monitorar o status da aplicação

	caso não rodar o monit, rodar o comando **./node_modules/.bin/pm2 resurrect** para recuperar a aplicação

OBS: Os três comandos acima devem estar rodando para ter o resultado esperado, cada um em um terminal


### Past frontend

**npm i -y** para instalar as dependências

Rodar os comandos:
	**npm run dev** - rodar aplicação em develop ou desenvolvedor
					**OU**
	**npm run production** - rodar aplicação em produção

Basta acessar http://localhost:8080/#/todos e se todos os passos estiverem ok, a aplicação já estará funcionando perfeitamente.