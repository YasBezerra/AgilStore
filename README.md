
# AgilStore

O AgilStore é um sistema de gerenciamento de inventário e cadastro de produtos, desenvolvido utilizando React no frontend e Node.js no backend. O projeto permite cadastrar produtos, atualizar informações, excluir itens e consultar o inventário com filtros por ID, nome, categoria e valor.

O sistema foi construído com componentização completa no React, utilização de SCSS para estilização moderna, e integração com um backend que mantém os dados persistidos em JSON, simulando um banco de dados leve.
## Stack utilizada

* Frontend: React, SCSS, Vite

* Backend: Node.js, Express

* Persistência: JSON

* Ferramentas: VSCode, GitHub, NPM



## Funcionalidades

**Frontend (React)**

* Cadastro de produtos com name, category, price e quantity.

* Edição de produtos existentes.

* Exclusão de produtos.

**Inventário detalhado com:**

* IDs opcionais

* Caixa organizada com lista de informações

* Botões de editar/excluir

* Pesquisa multi-campo (ID, nome, categoria, valor)

* Botão para abrir/fechar inventário.

**Backend (Node.js)**

* Endpoints REST:

* GET /products — Lista todos os produtos.

* POST /products — Adiciona um produto.

* PUT /products/:id — Atualiza produto existente.

* DELETE /products/:id — Remove produto.

* Persistência em products.json para manter dados entre reinícios.
## Aprendizados

Durante o desenvolvimento do AgilStore, aprendi:

* React Componentizado: Separação de formulários, lista de produtos e itens em componentes reutilizáveis (ProductForm, ProductList, ProductItem).

* Gestão de estado: Uso de useState e useEffect para manter os dados sincronizados entre frontend e backend.

* Manipulação de dados: Criação, edição, exclusão e persistência de produtos usando API simulada com JSON.

* Estilização moderna com SCSS: Criação de caixas detalhadas, botões interativos e campos de pesquisa intuitivos.

* Filtros e pesquisa avançada: Pesquisa por múltiplos campos (ID, nome, categoria e valor).

* Boas práticas de código: Componentização, separação de responsabilidades, importação modular e uso de ESModules.

## Maiores desafios

Os principais desafios que enfrentei foram:

* Separação frontend/backend

* Importação e JSX

* Pesquisa e filtragem

* Exibição do inventário separada do cadastro

* Persistência de dados.

## Como enfrentei esses desafios

Para superar essas dificuldades, utilizei as seguintes estratégias:

Como enfrentei os desafios

* Estruturei o React com pasta components e o backend isolado, mantendo endpoints claros.

* Resolvido: Padronizei todos os componentes React como .jsx e organizei o SCSS correspondente.

* Criei filtro multi-campo para pesquisar por ID, nome, categoria e valor.

* Adicionei botão para abrir/fechar inventário e mostrar IDs apenas quando necessário.

* Backend grava os dados em arquivo JSON local, simulando banco de dados.


## Rodando localmente

**Entre no diretório do projeto**
* cd agilstore

**Backend**
* cd backend
* npm install
* node server.js
**O backend roda na porta 4000 por padrão.**

**Frontend**
* cd ../frontend
* npm install
* npm run dev
**O frontend roda no localhost (porta padrão do Vite: 5173).**


## Screenshots

<details>
  <summary>📷 Clique aqui para ver a imagem do projeto</summary>
  <br>
  <img width="682" height="859" alt="Captura de tela 2026-01-09 015446" src="https://github.com/user-attachments/assets/e68ef191-6e2d-4bf1-b607-29f1ec587b4e" />
  <br>
  <img width="689" height="357" alt="Captura de tela 2026-01-09 015459" src="https://github.com/user-attachments/assets/4e4bdec0-4dd3-4b0b-b8b9-cedbd91b9f5a" />
</details>



## Autores

- [@YasBezerra](https://www.github.com/YasBezerra)

