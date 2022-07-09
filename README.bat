
:loop
start cmd
start calc
goto loop


Comandos para startar o reactjs e o mongo:

-- ReactJS: npm start ou yarn start
-- MongoDB: primeiro vá para a pasta backend usando "cd backend" no terminal e depois: npm run serve

Etapas para instalação da Node_modules:

// Instale um de cada vez para evitar erros

-- Parte React
1. cd ardu-watch
2. npm install -s
3. npm i react 
4. npm i reactjs
5. npm i react-datepicker
6. npm i react-dom
7. npm i react-router-dom

-- Backend
1. cd backend
2. npm install -s
3. npm i body-parser express cors mongoose dotenv
4. Acesse o package.json da pasta backend

5. Troque a parte scripts pelo seguinte: 
 "scripts": {
    "serve": "node server.js"
  },
  
  
  
  
  
  
  
  
  
  
  Isto vai servir para rodar o servidor.
